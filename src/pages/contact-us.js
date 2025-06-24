import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "antd";
import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";
import { postData } from "../../service/ApiCall";

export default function Contact() {
  const [send, setSend] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    postData("/sendEmail", formData)
      .then((response) => {
        console.log("Message sent successfully:", response);
        toast.success("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        setSend(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        toast.error("Failed to send message. Please try again later.");
        setLoading(false);
      });
    // setSend(true)
    // try {
    //   await axios.post(`${process.env.API_BASE_URL}/sendEmail`, formData);
    //   toast.success("Message sent successfully!");
    //   setFormData({ firstName: "", lastName: "", email: "", message: "" });
    //   setLoading(false);
    // } catch (error) {
    //   console.error("Failed to send message:", error);
    //   toast.error("Failed to send message. Please try again later.");
    //   setLoading(false);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Mitr:wght@400&family=Patua+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ysabeau+SC:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="mt-12 lg:container lg:mx-auto lg:py-12 md:py-12 md:px-6 py-2 px-4">
        <div className="text-center">
          <ul className="breadcrumb inline-flex h-8 items-center justify-center space-x-2 rounded-3xl bg-theme-light px-4 py-2">
            <li className="leading-none text-dark">
              <Link className="inline-flex items-center text-primary" href="/">
                <svg
                  className="mr-1.5"
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1769 15.0588H10.3533V9.41178H5.64744V15.0588H2.82391V6.58825H1.88274V16H14.118V6.58825H13.1769V15.0588ZM6.58862 15.0588V10.353H9.41215V15.0588H6.58862ZM15.8084 6.09225L15.2512 6.85178L8.00038 1.52472L0.749559 6.8499L0.192383 6.09131L8.00038 0.357666L15.8084 6.09225Z"
                    fill="black"
                  ></path>
                </svg>
                <span className="text-sm leading-none">Home</span>
              </Link>
            </li>
            <li className="leading-none text-dark">
              <span className="text-sm leading-none">/ Contact</span>
            </li>
          </ul>
        </div>
        <div className=" md:mb-0 mb-8 mt-8  md:text-left text-center">
          <h1 className="text-center text-3xl font-bold">Get in Touch</h1>
          <p className="!mt-4 text-center font-normal text-slate-500 sm:w-2 md:w-auto sm:m-auto">
            If you have any questions, please feel free to contact us, our
            customer service center is working for you 24/7.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-16">
          {send ? (
            <div>
              <div
                className="py-12 bg-gray-700 bg-opacity-30 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 h-full"
                id="modal"
              >
                <div
                  role="alert"
                  className="container mx-auto w-11/12 md:w-2/3 max-w-lg h-full"
                >
                  <div className="relative py-8 px-8 md:px-16 bg-white shadow-md rounded border border-gray-400">
                    <div className="w-full flex justify-center text-green-400 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        width={56}
                        height={56}
                        className="icon icon-tabler icon-tabler-circle-check"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h1 className="text-center text-gray-800 text-lg font-bold tracking-normal capitalize leading-tight mb-4">
                      Message Sent
                    </h1>
                    <p className="mb-5 text-sm text-gray-600 text-center font-normal">
                      Thank you ! For contacting us. We will contact you soon,
                      It may take some time to reach with you.
                    </p>
                    <div className="flex items-center justify-center w-full">
                      <button
                        onClick={() => setSend(false)}
                        className="focus:outline-none transition duration-150 ease-in-out hover:bg-red-100 bg-red-50 rounded text-red-700 px-4 sm:px-8 py-2 text-xs sm:text-sm"
                      >
                        Dismiss
                      </button>
                    </div>
                    <div
                      onClick={() => setSend(false)}
                      className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Close"
                        className="icon icon-tabler icon-tabler-x"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form>
              <div className="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-gray-50 border !border-gray-600 placeholder:text-gray-600 text-gray-900 text-sm rounded-sm focus:ring-indigo-500 block w-full p-2.5"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-gray-50 border !border-gray-600 placeholder:text-gray-600 text-gray-900 text-sm rounded-sm focus:ring-indigo-500 block w-full p-2.5"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              {/* <div className="mb-6">
                <label
                  htmlFor="email"
                  name="lastName" value={formData.lastName} onChange={handleChange}
                  className="block mb-2 text-sm font-medium text-gray-900"
                      >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border !border-gray-600 placeholder:text-gray-600 text-gray-900 text-sm rounded-sm focus:ring-indigo-500 block w-full p-2.5"
                  placeholder="rohan@gmail.com"
                  required
                />
              </div> */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50 border !border-gray-600 placeholder:text-gray-600 text-gray-900 text-sm rounded-sm focus:ring-indigo-500 block w-full p-2.5"
                  placeholder="test@gmail.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="msg"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  id="msg"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={8}
                  className="bg-gray-50 border !border-gray-600 placeholder:text-gray-600 text-gray-900 text-sm rounded-sm focus:ring-indigo-500 block w-full p-2.5"
                  placeholder="Your Message..."
                  required
                />
              </div>
              {loading === true ? (
                <Button
                  type="submit"
                  loading
                  className={`contact-btn text-white bg-primary focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-sm text-sm !h-10 px-5 py-5 text-center w-full disabled:bg-gray-400`}
                >
                  Sending Message
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  className={`contact-btn-no text-white bg-primary focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-sm text-sm !h-10 px-5 py-5 text-center w-full disabled:bg-gray-400`}
                >
                  Send Message
                </Button>
              )}
            </form>
          )}
        </div>

        <div className="container flex flex-col mx-auto bg-white">
          <div className="w-full draggable">
            <div className="container flex flex-col items-center gap-16 mx-auto">
              <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center gap-1 px-8 py-10 bg-white rounded-3xl shadow-main">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        d="M31.9904 13.965L22.4166 4.40166C21.6057 3.60976 20.5294 3.16817 19.4104 3.16817C18.2914 3.16817 17.2151 3.60976 16.4041 4.40166L6.8304 13.9017C6.40502 14.283 6.0629 14.7524 5.82645 15.279C5.58999 15.8056 5.46454 16.3776 5.45831 16.9575V30.5425C5.47456 31.6946 5.93476 32.793 6.73808 33.5973C7.5414 34.4016 8.62236 34.846 9.74415 34.8333H28.9225C30.0443 34.846 31.1252 34.4016 31.9285 33.5973C32.7319 32.793 33.1921 31.6946 33.2083 30.5425V16.9575C33.2071 16.4009 33.0989 15.85 32.8899 15.3365C32.6809 14.823 32.3752 14.3569 31.9904 13.965ZM18.47 6.68166C18.7058 6.46025 19.0138 6.33747 19.3333 6.33747C19.6528 6.33747 19.9608 6.46025 20.1966 6.68166L28.5833 15.0417L20.1504 23.4017C19.9146 23.6231 19.6066 23.7459 19.2871 23.7459C18.9675 23.7459 18.6596 23.6231 18.4237 23.4017L10.0833 15.0417L18.47 6.68166ZM30.125 30.5425C30.1052 30.8533 29.9688 31.144 29.7445 31.3537C29.5203 31.5633 29.2256 31.6755 28.9225 31.6667H9.74415C9.44102 31.6755 9.14636 31.5633 8.9221 31.3537C8.69785 31.144 8.56147 30.8533 8.54165 30.5425V17.9708L14.7854 24.1458L12.2262 26.6792C11.9391 26.9758 11.7779 27.3771 11.7779 27.7954C11.7779 28.2137 11.9391 28.615 12.2262 28.9117C12.3695 29.066 12.5417 29.1891 12.7324 29.2734C12.9232 29.3578 13.1286 29.4017 13.3362 29.4025C13.7332 29.4009 14.1142 29.2421 14.4 28.9592L17.1287 26.2675C17.8065 26.6928 18.5853 26.9179 19.3796 26.9179C20.1738 26.9179 20.9527 26.6928 21.6304 26.2675L24.3591 28.9592C24.6449 29.2421 25.026 29.4009 25.4229 29.4025C25.6306 29.4017 25.8359 29.3578 26.0267 29.2734C26.2174 29.1891 26.3896 29.066 26.5329 28.9117C26.82 28.615 26.9812 28.2137 26.9812 27.7954C26.9812 27.3771 26.82 26.9758 26.5329 26.6792L23.9583 24.1458L30.125 17.9708V30.5425Z"
                        fill="#005153"
                      />
                    </svg>
                  </span>
                  <p className="text-base font-semibold text-dark-grey-900">
                    Email
                  </p>
                  <p className="text-sm leading-7 text-dark-grey-600">
                    Contact us at
                  </p>
                  <a
                    className="text-base font-semibold text-purple-blue-500"
                    href="mailto: support@bookmysession.in"
                  >
                    support@bookmysession.in
                  </a>
                </div>
                <div className="flex flex-col items-center gap-1 px-8 py-10 bg-white rounded-3xl shadow-main">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        d="M30.4237 20.5833C30.0846 20.5833 29.73 20.4725 29.3908 20.3933C28.7045 20.2357 28.0297 20.0294 27.3712 19.7758C26.656 19.5086 25.8699 19.5225 25.164 19.8148C24.4582 20.1071 23.8826 20.6572 23.5479 21.3592L23.2087 22.0875C21.7115 21.2154 20.3283 20.1513 19.0925 18.9208C17.8944 17.6516 16.8583 16.231 16.0092 14.6933L16.7183 14.3608C17.4018 14.0171 17.9374 13.4259 18.222 12.701C18.5067 11.9761 18.5202 11.1687 18.26 10.4342C18.0151 9.7518 17.8143 9.05363 17.6587 8.34417C17.5817 7.99584 17.52 7.63167 17.4737 7.28334C17.2865 6.16807 16.7177 5.1581 15.8698 4.4353C15.0219 3.7125 13.9506 3.32439 12.8487 3.34084H8.20832C7.55657 3.33996 6.91201 3.48056 6.31687 3.75343C5.72174 4.02629 5.18948 4.42526 4.75498 4.92417C4.31148 5.43662 3.98125 6.04161 3.78698 6.69756C3.59271 7.35351 3.53901 8.04489 3.62957 8.72417C4.4676 15.3142 7.39927 21.4362 11.97 26.1408C16.5508 30.8351 22.5117 33.846 28.9283 34.7067C29.1284 34.7224 29.3294 34.7224 29.5296 34.7067C30.6664 34.7084 31.7641 34.28 32.6129 33.5033C33.0987 33.0571 33.4871 32.5105 33.7528 31.8992C34.0185 31.288 34.1554 30.626 34.1546 29.9567V25.2067C34.1463 24.1126 33.7705 23.0551 33.0907 22.2127C32.411 21.3704 31.4689 20.7948 30.4237 20.5833ZM31.1791 30.0833C31.1786 30.3043 31.1331 30.5227 31.0455 30.7245C30.9579 30.9263 30.8301 31.107 30.6704 31.255C30.5014 31.4131 30.3004 31.5306 30.0817 31.5991C29.8631 31.6676 29.6323 31.6852 29.4062 31.6508C23.6532 30.8792 18.3066 28.1865 14.19 23.9875C10.0698 19.756 7.4252 14.2458 6.66665 8.31251C6.63316 8.08028 6.65037 7.84332 6.71702 7.61877C6.78368 7.39422 6.89813 7.1877 7.05207 7.01417C7.19794 6.84816 7.3764 6.71577 7.57569 6.62571C7.77499 6.53565 7.99059 6.48997 8.20832 6.49167H12.8333C13.1897 6.48273 13.5381 6.6009 13.8192 6.82607C14.1002 7.05124 14.2967 7.3695 14.375 7.72667C14.375 8.15417 14.5137 8.59751 14.6062 9.025C14.7844 9.85446 15.0214 10.6694 15.3154 11.4633L13.1571 12.5083C12.7861 12.6832 12.4978 13.0021 12.3554 13.395C12.2012 13.7805 12.2012 14.2129 12.3554 14.5983C14.5742 19.4794 18.3945 23.4029 23.1471 25.6817C23.5224 25.84 23.9434 25.84 24.3187 25.6817C24.7013 25.5354 25.0118 25.2393 25.1821 24.8583L26.1533 22.6417C26.9487 22.9395 27.7624 23.1828 28.5891 23.37C28.99 23.465 29.4217 23.5442 29.8379 23.6075C30.1857 23.6879 30.4956 23.8897 30.7148 24.1784C30.934 24.467 31.0491 24.8248 31.0404 25.1908L31.1791 30.0833ZM22.0833 3.16667C21.7287 3.16667 21.3587 3.16667 21.0042 3.16667C20.5953 3.20237 20.217 3.40341 19.9524 3.72558C19.6879 4.04776 19.5588 4.46466 19.5935 4.88459C19.6283 5.30451 19.824 5.69306 20.1377 5.96476C20.4514 6.23645 20.8574 6.36903 21.2662 6.33334H22.0833C24.5366 6.33334 26.8893 7.33423 28.6241 9.11582C30.3588 10.8974 31.3333 13.3138 31.3333 15.8333C31.3333 16.1183 31.3333 16.3875 31.3333 16.6725C31.2991 17.0902 31.4276 17.5048 31.6906 17.8253C31.9536 18.1459 32.3296 18.3463 32.7362 18.3825H32.8596C33.2455 18.3841 33.618 18.237 33.9034 17.9702C34.1889 17.7035 34.3665 17.3364 34.4012 16.9417C34.4012 16.5775 34.4012 16.1975 34.4012 15.8333C34.4012 12.4767 33.104 9.25725 30.7943 6.88225C28.4847 4.50724 25.3516 3.17087 22.0833 3.16667ZM25.1667 15.8333C25.1667 16.2533 25.3291 16.656 25.6182 16.9529C25.9073 17.2499 26.2994 17.4167 26.7083 17.4167C27.1172 17.4167 27.5093 17.2499 27.7984 16.9529C28.0876 16.656 28.25 16.2533 28.25 15.8333C28.25 14.1536 27.6003 12.5427 26.4438 11.355C25.2873 10.1673 23.7188 9.50001 22.0833 9.50001C21.6744 9.50001 21.2823 9.66682 20.9932 9.96375C20.7041 10.2607 20.5417 10.6634 20.5417 11.0833C20.5417 11.5033 20.7041 11.906 20.9932 12.2029C21.2823 12.4999 21.6744 12.6667 22.0833 12.6667C22.9011 12.6667 23.6853 13.0003 24.2636 13.5942C24.8418 14.188 25.1667 14.9935 25.1667 15.8333Z"
                        fill="#005153"
                      />
                    </svg>
                  </span>
                  <p className="text-base font-semibold text-dark-grey-900">
                    Phone
                  </p>
                  <p className="text-sm leading-7 text-dark-grey-600">
                    Reach out to us by phone
                  </p>
                  <a
                    className="text-base font-semibold text-purple-blue-500"
                    href="tel:+91857-696-9778"
                  >
                    +91 857-696-9778
                  </a>
                </div>
                <div className="flex flex-col items-center gap-1 px-8 py-10 bg-white rounded-3xl shadow-main">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        d="M31.7091 15.2475C31.4927 12.9341 30.6966 10.7177 29.3984 8.81412C28.1003 6.91054 26.3443 5.38464 24.3014 4.38503C22.2585 3.38541 19.9984 2.94614 17.7412 3.10998C15.4839 3.27383 13.3065 4.03522 11.4208 5.32C9.8008 6.43252 8.44083 7.89972 7.43858 9.6162C6.43633 11.3327 5.81667 13.2558 5.62413 15.2475C5.43524 17.2261 5.67758 19.2231 6.33355 21.0936C6.98953 22.9641 8.04269 24.6611 9.41663 26.0617L17.5875 34.4692C17.7308 34.6176 17.9013 34.7354 18.0892 34.8157C18.277 34.8961 18.4785 34.9375 18.682 34.9375C18.8856 34.9375 19.0871 34.8961 19.2749 34.8157C19.4628 34.7354 19.6333 34.6176 19.7766 34.4692L27.9166 26.0617C29.2906 24.6611 30.3437 22.9641 30.9997 21.0936C31.6557 19.2231 31.898 17.2261 31.7091 15.2475ZM25.7583 23.8292L18.6666 31.1125L11.575 23.8292C10.5298 22.7557 9.72928 21.4578 9.23081 20.0288C8.73233 18.5997 8.54834 17.075 8.69204 15.5642C8.83668 14.0301 9.31143 12.5482 10.082 11.2256C10.8525 9.90299 11.8996 8.77278 13.1475 7.91666C14.7831 6.80079 16.703 6.20555 18.6666 6.20555C20.6302 6.20555 22.5502 6.80079 24.1858 7.91666C25.4299 8.76947 26.4747 9.89469 27.245 11.2115C28.0154 12.5283 28.4922 14.0039 28.6412 15.5325C28.7896 17.0484 28.6079 18.5793 28.1093 20.0142C27.6107 21.4491 26.8076 22.7522 25.7583 23.8292ZM18.6666 9.5C17.2945 9.5 15.9532 9.91787 14.8124 10.7008C13.6715 11.4837 12.7823 12.5965 12.2572 13.8984C11.7321 15.2003 11.5947 16.6329 11.8624 18.015C12.1301 19.3971 12.7908 20.6667 13.7611 21.6631C14.7313 22.6596 15.9674 23.3382 17.3132 23.6131C18.6589 23.888 20.0538 23.7469 21.3215 23.2076C22.5892 22.6684 23.6726 21.7551 24.4349 20.5834C25.1972 19.4117 25.6041 18.0342 25.6041 16.625C25.6001 14.7366 24.8678 12.9268 23.5677 11.5915C22.2675 10.2562 20.5053 9.50418 18.6666 9.5ZM18.6666 20.5833C17.9043 20.5833 17.1592 20.3512 16.5254 19.9162C15.8916 19.4813 15.3976 18.8631 15.1058 18.1398C14.8141 17.4165 14.7378 16.6206 14.8865 15.8528C15.0352 15.0849 15.4023 14.3796 15.9413 13.826C16.4803 13.2724 17.1671 12.8955 17.9147 12.7427C18.6623 12.59 19.4373 12.6684 20.1416 12.968C20.8458 13.2676 21.4477 13.7749 21.8712 14.4259C22.2947 15.0768 22.5208 15.8421 22.5208 16.625C22.5208 17.6748 22.1147 18.6816 21.3919 19.424C20.6691 20.1663 19.6888 20.5833 18.6666 20.5833Z"
                        fill="#005153"
                      />
                    </svg>
                  </span>
                  <p className="text-base font-semibold text-dark-grey-900">
                    Location
                  </p>
                  <p className="text-sm leading-7 text-dark-grey-600">
                    Find us at our office
                  </p>
                  <a
                    className="text-center text-base font-semibold text-purple-blue-500"
                    href="https://goo.gl/maps/QcWzYETAh4FS3KTD7"
                  >
                    Indira Nagar Block B, Sector 8, Lucknow, Uttar Pradesh
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
