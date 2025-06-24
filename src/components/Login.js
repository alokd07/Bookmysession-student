/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Menu, MenuHandler, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  signOut,
} from "firebase/auth";
// import OTPInput, { ResendOTP } from "otp-input-react";
import OTPInput from "./OtpInputWrapper";
import ResendOTP from "./ResendOtpWrapper";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import axios from "axios";
import ReactPlayer from "react-player";
import { useEffect } from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL || "https://api.bookmysession.com/";

export default function Login({ isModalOpen }) {
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  const navigate = useRouter();

  useEffect(() => {
    if (isModalOpen === true) {
      console.log("Cleaning up fields...");
      setMobile("");
      setOtp("");
      setOtpSent(false);
      setResendTimer(0);
      setLoading(false);
      setLoadingMessage("");
    }
  }, [isModalOpen]);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // sendOtp();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  async function sendOtp() {
    if (mobile.length !== 10) {
      toast.error("Please enter a valid mobile number");
      return;
    }

    onCaptchVerify();
    setLoading(true);
    setLoadingMessage("Checking mobile number...");

    try {
      const data = {
        phoneNumber: `+91${mobile}`,
      };

      const config = {
        method: "post",
        url: `${BASE_URL}student/checkNumber`,
        data: data,
      };

      const response = await axios(config);

      if (response.data.code === 200 || response.data.code === 202) {
        setLoadingMessage("Sending OTP...");
        signInWithPhoneNumber(auth, `+91${mobile}`, window.recaptchaVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setOtpSent(true);
            toast.success("OTP sent successfully");
            setLoading(false);
            setLoadingMessage("");

            // Start resend timer
            setResendTimer(30);

            // Begin countdown
            const interval = setInterval(() => {
              setResendTimer((prevTimer) => {
                if (prevTimer > 0) {
                  return prevTimer - 1;
                } else {
                  clearInterval(interval);
                  return 0;
                }
              });
            }, 1000);
          })
          .catch((error) => {
            toast.error("OTP send failed");
            console.error(error);
            setLoading(false);
            setLoadingMessage("");
          });
      } else {
        toast.error(response.data.message);
        setLoading(false);
        setLoadingMessage("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response && error.response.status === 409) {
        toast.error(error.response.data.message);
        console.error(error.response.data.message);
      } else {
        toast.error("Network error or server is down.");
      }
      setLoading(false);
      setLoadingMessage("");
      localStorage.clear();
      sessionStorage.clear();
    }
  }

  async function verifyOtp() {
    setLoading(true);
    setLoadingMessage("Verifying OTP...");

    try {
      const result = await window.confirmationResult.confirm(otp);
      const existing_uid = result._tokenResponse.isNewUser;
      const user = result.user;
      const idToken = await user.getIdToken();
      toast.success("OTP verified successfully");

      const random = Math.floor(1000 + Math.random() * 9000);

      if (!existing_uid) {
        setLoadingMessage("Checking mobile number...");

        try {
          const data = JSON.stringify({
            phoneNumber: mobile.startsWith("+91") ? mobile : "+91" + mobile,
          });

          const config = {
            method: "post",
            url: `${BASE_URL}student/checkNumber`,
            headers: {
              Authorization: `Bearer ${idToken}`,
              "Content-Type": "application/json",
            },
            data: data,
          };

          const response = await axios(config);

          if (response.data.code === 200) {
            localStorage.setItem("userId", result.user.uid);
            Cookies.set("userId", result.user.uid);
            Cookies.set("idToken", idToken);
            localStorage.setItem("isAuthenticated", true);
            setLoading(false);
            setLoadingMessage("");
            navigate("/home?new=true");
          } else {
            toast.custom((t) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } max-w-xs w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="new-gif.gif"
                        alt=""
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-semibold text-gray-900">
                        Register Yourself!
                      </p>
                      <p className="mt-1 text-sm text-gray-700">
                        {response.data.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ));
            Cookies.set("userId", result.user.uid);
            Cookies.set("idToken", idToken);
            setLoading(false);
            setLoadingMessage("");
            navigate("/register");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          toast.error("Something went wrong");
          setLoading(false);
          setLoadingMessage("");
          localStorage.clear();
          sessionStorage.clear();
          signOut(auth);
        }
      } else {
        Cookies.set("userId", result.user.uid);
        Cookies.set("idToken", idToken);
        navigate("/register");
        setLoading(false);
        setLoadingMessage("");
      }
      const tokenResponse = await axios
        .post(
          `${BASE_URL}generateToken`,
          {
            mobile: user.phoneNumber,
            random: random,
            uid: user.uid,
          },
          {
            headers: {
              // firebase token
              "x-firebase-appcheck": idToken,
            },
          }
        )
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          return response;
        })
        .catch((error) => {
          console.error("Error generating token:", error);
          setLoading(false);
          setLoadingMessage("");
          return toast.error("Something went wrong");
        });
    } catch (error) {
      console.error(error);
      toast.error("Please enter a valid OTP");
      setLoading(false);
      setLoadingMessage("");
    }
  }

  function resendOtp() {
    setLoading(true);
    signInWithPhoneNumber(auth, "+91" + mobile, window.recaptchaVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        toast.success("OTP resent successfully");
        setLoading(false);
        setLoadingMessage("");
        // increase the timer by 60 seconds
        setResendTimer((prevTimer) => prevTimer + 60);
      })
      .catch((error) => {
        console.log(error);
        toast.error("OTP resend failed");
        setLoadingMessage("");
        setLoading(false);
      });
  }

  return (
    <>
      <div id="recaptcha-container"></div>
      <div className="text-gray-900 flex justify-center">
        <div className="bg-white sm:rounded-lg flex justify-center flex-1">
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex bg-no-repeat bg-contain relative items-centerx login-thumbnail-container">
            <img
              src="/login-thumbnail.png"
              alt="Login Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute z-[100] left-1/2 top-1/2 btn-login"></div>
            <div className="absolute z-[9] w-full h-full login-video">
              <ReactPlayer
                url="https://firebasestorage.googleapis.com/v0/b/homeetute.appspot.com/o/admin%2Fsample-profile-image%2Fvideo.mp4?alt=media&token=714593b9-9016-498c-ac76-1c0c85646734"
                playing={true}
                loop={true}
                muted={true}
                width="100%"
                height="100%"
                className="absolute top-0 left-0 w-full h-full"
              />
              <div className="h-[100%] w-[100%] absolute z-[11] login-bg"></div>
              <div className="absolute bottom-0 px-4 py-8 z-[11]">
                <h1 className="text-[2rem] w-10/12 text-left font-semibold uppercase text-[#fff]">
                  Learn from best educators
                </h1>
                <p className="text-base w-10/12 text-left tracking-wide font-semibold text-[#fff]">
                  Don&apos;t worry about anything. You can individually approach
                  teachers to request a demo. Otherwise, please let us know what
                  your specific needs are.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-5/12 py-4 px-4">
            <div>
              <img src="/logo.svg" className="w-48 mx-auto" />
            </div>
            <div className="mt-6 flex flex-col items-center">
              <h1 className="text-lg font-medium">Book Your Free Demo</h1>
              <p className="text-center md:text-left">
                We will send one time password to your mobile number
              </p>
              <div className="w-full flex-1 mt-6">
                <div className="mx-auto max-w-xs">
                  <Typography
                    className="block text-sm font-semibold"
                    color="blue-gray"
                  >
                    Mobile Number
                  </Typography>
                  <div className="flex mt-2">
                    <Menu placement="bottom-start">
                      <MenuHandler>
                        <div className="absolute flex py-3 w-[6rem] text-sm items-center gap-2 rounded-l-lg border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3">
                          <img
                            src="/india.png"
                            alt="India"
                            className="h-4 w-4 rounded-full object-cover"
                          />
                          +91
                        </div>
                      </MenuHandler>
                    </Menu>
                    <input
                      className="w-full px-8 py-3 pl-[100px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={mobile}
                      autoFocus
                      onChange={(e) => {
                        let value = e.target.value;
                        let reg = /^[0-9\b]+$/;
                        if (value === "" || reg.test(value)) {
                          setMobile(value);
                        }
                      }}
                      maxLength={10}
                    />
                  </div>
                  {otpSent && (
                    <>
                      <Typography
                        className="block text-sm font-semibold mt-5"
                        color="blue-gray"
                      >
                        OTP (One Time Password)
                      </Typography>
                      <OTPInput
                        inputClassName="bg-gray-100 border border-gray-500 py-4 mx-auto rounded-md focus:outline-teal-600 focus:outline text-sm font-medium leading-nonef text-gray-800 mt-2 read-only:bg-teal-300"
                        value={otp}
                        onChange={setOtp}
                        autoFocus
                        OTPLength={6}
                        otpType="number"
                        disabled={false}
                        secure
                      />
                      {!resendTimer > 0 ? (
                        <div className="mt-3">
                          <ResendOTP
                            onResendClick={resendOtp}
                            text="Resend OTP"
                            timer={resendTimer}
                            className="!text-[#14756E] font-semibold"
                          />
                        </div>
                      ) : (
                        <div className="mt-3">
                          <ResendOTP
                            onResendClick={resendOtp}
                            text="Resend OTP"
                            timer={resendTimer}
                            disabled={true}
                            className="!text-gray-600 font-semibold"
                          />
                        </div>
                      )}
                    </>
                  )}
                  <button
                    onClick={() => {
                      if (!loading) {
                        !otpSent ? sendOtp() : verifyOtp();
                      }
                    }}
                    disabled={mobile.length !== 10}
                    className="mt-5 tracking-wide font-semibold bg-primary text-gray-100 w-full py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none disabled:bg-gray-300"
                  >
                    <span className="ml-3">
                      {!otpSent
                        ? loadingMessage
                          ? loadingMessage
                          : "Send OTP"
                        : loadingMessage
                        ? loadingMessage
                        : "Verify OTP"}
                    </span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree by bookmysession&apos;s{" "}
                    <Link
                      href="/terms-conditions"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service{" "}
                    </Link>
                    and its {""}
                    <Link
                      href="/privacy-policy"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
