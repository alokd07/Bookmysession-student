import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useContext } from "react";
import { OpenModalContext } from "./_app";
import Highlights from "@/components/Highlights";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { isModalOpen, setIsModalOpen } = useContext(OpenModalContext);

  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
      <div className="bg-original">
        {/* <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
        <button
          onClick={showModal}
          className="block md:hidden fixed !z-[5] bottom-4 shadow-sm bg-secondary text-black rounded-full font-semibold px-6 py-2 animated-button"
          id="buttom"
        >
          Book Free Demo
        </button>
        <section className="container mx-auto block md:grid grid-cols-2 items-center">
          <div className="mx-3 md:mx-0 col-span-1">
            <h1 className="text-black text-4xl mx-auto w-5/6 md:w-5/6 font-semibold capitalize leading-[1.4] text-center md:text-start">
              Get the best quality education from the comfort of{" "}
              <span className="relative text-primary">
                your Home
                <svg
                  viewBox="0 0 272 11"
                  focusable="false"
                  className="chakra-icon chakra-icon css-f4w11s"
                >
                  <svg
                    width="272"
                    height="11"
                    viewBox="0 0 272 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M268.783 10.4905C165.145 1.45153 48.529 6.72521 3.20693 10.4914C1.83096 10.6057 0.622822 9.58298 0.508481 8.20702C0.394141 6.83105 1.41689 5.62291 2.79286 5.50857C48.2818 1.72852 165.201 -3.56253 269.217 5.50944C270.593 5.6294 271.61 6.84171 271.49 8.2172C271.37 9.59269 270.158 10.6105 268.783 10.4905Z"
                      fill="#14756E"
                    ></path>
                  </svg>
                </svg>
                <svg
                  viewBox="0 0 272 11"
                  focusable="false"
                  className="chakra-icon chakra-icon css-1trla8u"
                >
                  <svg
                    width="272"
                    height="11"
                    viewBox="0 0 272 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M268.783 10.4905C165.145 1.45153 48.529 6.72521 3.20693 10.4914C1.83096 10.6057 0.622822 9.58298 0.508481 8.20702C0.394141 6.83105 1.41689 5.62291 2.79286 5.50857C48.2818 1.72852 165.201 -3.56253 269.217 5.50944C270.593 5.6294 271.61 6.84171 271.49 8.2172C271.37 9.59269 270.158 10.6105 268.783 10.4905Z"
                      fill="#14756E"
                    ></path>
                  </svg>
                </svg>
              </span>
            </h1>
            <div className="mx-auto w-5/6 md:w-5/6 text-base mt-2 text-center md:text-start">
              We provides the best teacher for your child at your city and area,
              who can help to sharp your child.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-6 items-center mt-6 mx-auto w-5/6 md:w-5/6">
              <Link
                href=""
                className="inline-block py-2 px-4 border-primary bg-primary rounded-sm !text-white hover:!bg-[#005153]"
                // onClick={showModal}
              >
                <div className="inline-block capitalize px-2 font-semibold text-[15px] rounded-full items-center relative cursor-pointer whitespace-nowrap">
                  Book free demo
                </div>
              </Link>
              <a
                href={process.env.WEBSITE_TEACHER}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex text-[15px] items-center gap-1 font-semibold text-primary bg-secondary hover:!bg-amber-400 hover:text-black border-2 px-8 py-2.5 border-none rounded-sm"
              >
                Join as Teacher
              </a>
            </div>
          </div>
          <div className="lg:col-span-1 hidden md:block ml-auto mr-8">
            <img
              loading="eager"
              src="/girl.svg"
              alt="girl"
              width={400}
              height={400}
            />
          </div>
        </section>
        {/* Landing Page Ends */}

        {/* Category Search */}
        {/* <section className="container mx-auto category-search pt-24">
            <div className="text-center justify-center items-center">
              <article className="text-3xl mx-auto w-4/6 font-semibold capitalize text-gray-800">
                Browse Teachers by{" "}
                <span className="relative text-primary">
                  subject
                  <svg
                    viewBox="0 0 272 11"
                    focusable="false"
                    className="chakra-icon chakra-icon css-f4w11s"
                  >
                    <svg
                      width="272"
                      height="11"
                      viewBox="0 0 272 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M268.783 10.4905C165.145 1.45153 48.529 6.72521 3.20693 10.4914C1.83096 10.6057 0.622822 9.58298 0.508481 8.20702C0.394141 6.83105 1.41689 5.62291 2.79286 5.50857C48.2818 1.72852 165.201 -3.56253 269.217 5.50944C270.593 5.6294 271.61 6.84171 271.49 8.2172C271.37 9.59269 270.158 10.6105 268.783 10.4905Z"
                        fill="#14756E"
                      ></path>
                    </svg>
                  </svg>
                  <svg
                    viewBox="0 0 272 11"
                    focusable="false"
                    className="chakra-icon chakra-icon css-1trla8u"
                  >
                    <svg
                      width="272"
                      height="11"
                      viewBox="0 0 272 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M268.783 10.4905C165.145 1.45153 48.529 6.72521 3.20693 10.4914C1.83096 10.6057 0.622822 9.58298 0.508481 8.20702C0.394141 6.83105 1.41689 5.62291 2.79286 5.50857C48.2818 1.72852 165.201 -3.56253 269.217 5.50944C270.593 5.6294 271.61 6.84171 271.49 8.2172C271.37 9.59269 270.158 10.6105 268.783 10.4905Z"
                        fill="#14756E"
                      ></path>
                    </svg>
                  </svg>
                </span>
              </article>
              <div className="flex flex-wrap justify-center px-16 md:px-0 md:w-1/2 mx-auto mt-2 text-base">
                Choose a subject to find top teachers in your locality.
              </div>
              <div className="container-xl mt-4">
                <Browse />
                <button>
                  <Link
                    href="/browse/All"
                    className="inline-block py-1.5 px-12 -mt-6 bg-primary rounded-md text-white hover:bg-[#005153]"
                  >
                    View All
                  </Link>
                </button>
              </div>
            </div>
          </section> */}

        <div className="">
          <section className="mx-auto container py-20 ">
            <div className="flex justify-center items-center flex-col">
              <div className="lg:text-6xl md:text-5xl text-4xl font-black text-center text-gray-800">
                <article
                  className="text-3xl mx-auto font-semibold capitalize"
                  style={{ fontFamily: "mitr" }}
                >
                  What make us{" "}
                  <span className="relative text-primary">
                    different
                    <svg
                      viewBox="0 0 272 11"
                      focusable="false"
                      className="chakra-icon chakra-icon css-f4w11s"
                    >
                      <svg
                        width="272"
                        height="11"
                        viewBox="0 0 272 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M268.783 10.4905C165.145 1.45153 48.529 6.72521 3.20693 10.4914C1.83096 10.6057 0.622822 9.58298 0.508481 8.20702C0.394141 6.83105 1.41689 5.62291 2.79286 5.50857C48.2818 1.72852 165.201 -3.56253 269.217 5.50944C270.593 5.6294 271.61 6.84171 271.49 8.2172C271.37 9.59269 270.158 10.6105 268.783 10.4905Z"
                          fill="#14756E"
                        ></path>
                      </svg>
                    </svg>
                    <svg
                      viewBox="0 0 272 11"
                      focusable="false"
                      className="chakra-icon chakra-icon css-1trla8u"
                    >
                      <svg
                        width="272"
                        height="11"
                        viewBox="0 0 272 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M268.783 10.4905C165.145 1.45153 48.529 6.72521 3.20693 10.4914C1.83096 10.6057 0.622822 9.58298 0.508481 8.20702C0.394141 6.83105 1.41689 5.62291 2.79286 5.50857C48.2818 1.72852 165.201 -3.56253 269.217 5.50944C270.593 5.6294 271.61 6.84171 271.49 8.2172C271.37 9.59269 270.158 10.6105 268.783 10.4905Z"
                          fill="#14756E"
                        ></path>
                      </svg>
                    </svg>
                  </span>{" "}
                  ?
                </article>
              </div>
              <div className="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
                <div className="py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                  <div className="mb-6">
                    <svg
                      width={32}
                      height={32}
                      style={{ transform: "scale(1.5)" }}
                      fill="#14756E"
                      viewBox="0 0 256 256"
                      id="Flat"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#14756E"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M192,80v96H104a32,32,0,1,0-32-32H64V80Z"
                          opacity="0.2"
                        ></path>{" "}
                        <path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V200.001A15.99912,15.99912,0,0,0,40.001,216l13.38965-.00146a7.99978,7.99978,0,0,0,7.2246-4.5669,48.02362,48.02362,0,0,1,86.76954,0,7.99952,7.99952,0,0,0,7.22558,4.5669L216,216a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216,40ZM80,144a24,24,0,1,1,24,24A24.0275,24.0275,0,0,1,80,144Zm136,56-56.56641-.00146a64.38465,64.38465,0,0,0-28.83593-26.15693,39.99991,39.99991,0,1,0-53.19532.00019,64.3882,64.3882,0,0,0-28.83593,26.15771L40,200.001V56H216ZM56,96V80a8.00008,8.00008,0,0,1,8-8H192a8.00008,8.00008,0,0,1,8,8v96a8.00008,8.00008,0,0,1-8,8H176a8,8,0,0,1,0-16h8V88H72v8a8,8,0,0,1-16,0Z"></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <div className="text-gray-800 text-2xl font-semibold text-center">
                    <h2>Best Tutor</h2>
                  </div>
                  <div className="!text-secondary mt-2 text-lg text-center ">
                    <p className="text-base">
                      We have best teachers and best part is that you can select
                      them easily.
                    </p>
                  </div>
                </div>
                <div className="py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                  <div className="mb-6">
                    <svg
                      width={32}
                      height={32}
                      style={{ transform: "scale(2)" }}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          opacity="0.5"
                          d="M4.72718 2.73332C5.03258 2.42535 5.46135 2.22456 6.27103 2.11478C7.10452 2.00177 8.2092 2 9.7931 2H14.2069C15.7908 2 16.8955 2.00177 17.729 2.11478C18.5387 2.22456 18.9674 2.42535 19.2728 2.73332C19.5782 3.0413 19.7773 3.47368 19.8862 4.2902C19.9982 5.13073 20 6.24474 20 7.84202L20 18H7.42598C6.34236 18 5.96352 18.0057 5.67321 18.0681C5.15982 18.1785 4.71351 18.4151 4.38811 18.7347C4.27837 18.8425 4.22351 18.8964 4.09696 19.2397C4.02435 19.4367 4 19.5687 4 19.7003V7.84202C4 6.24474 4.00176 5.13073 4.11382 4.2902C4.22268 3.47368 4.42179 3.0413 4.72718 2.73332Z"
                          fill="#14756E"
                        ></path>{" "}
                        <path
                          d="M20 18H7.42598C6.34236 18 5.96352 18.0057 5.67321 18.0681C5.15982 18.1785 4.71351 18.4151 4.38811 18.7347C4.27837 18.8425 4.22351 18.8964 4.09696 19.2397C3.97041 19.5831 3.99045 19.7288 4.03053 20.02C4.03761 20.0714 4.04522 20.1216 4.05343 20.1706C4.16271 20.8228 4.36259 21.1682 4.66916 21.4142C4.97573 21.6602 5.40616 21.8206 6.21896 21.9083C7.05566 21.9986 8.1646 22 9.75461 22H14.1854C15.7754 22 16.8844 21.9986 17.7211 21.9083C18.5339 21.8206 18.9643 21.6602 19.2709 21.4142C19.4705 21.254 19.6249 21.0517 19.7385 20.75H8C7.58579 20.75 7.25 20.4142 7.25 20C7.25 19.5858 7.58579 19.25 8 19.25H19.9754C19.9926 18.8868 19.9982 18.4741 20 18Z"
                          fill="#14756E"
                        ></path>{" "}
                        <path
                          d="M7.25 7C7.25 6.58579 7.58579 6.25 8 6.25H16C16.4142 6.25 16.75 6.58579 16.75 7C16.75 7.41421 16.4142 7.75 16 7.75H8C7.58579 7.75 7.25 7.41421 7.25 7Z"
                          fill="#14756E"
                        ></path>{" "}
                        <path
                          d="M8 9.75C7.58579 9.75 7.25 10.0858 7.25 10.5C7.25 10.9142 7.58579 11.25 8 11.25H13C13.4142 11.25 13.75 10.9142 13.75 10.5C13.75 10.0858 13.4142 9.75 13 9.75H8Z"
                          fill="#14756E"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <div className="text-gray-800 text-2xl font-semibold text-center">
                    <h2>Best Curriculam</h2>
                  </div>
                  <div className="!text-secondary mt-2 text-lg text-center">
                    <p className="text-base">
                      There are many courses and subject available for offline
                      support that can help you to learn.
                    </p>
                  </div>
                </div>
                <div className="py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                  <div className="mb-6">
                    <svg
                      width={36}
                      height={36}
                      style={{ transform: "scale(2)" }}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M5 9V6.8c0-.44.36-.8.8-.8h16.4c.44 0 .8.36.8.8v8.4c0 .44-.36.8-.8.8H20"
                          stroke="#14756E"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M19.2 9H2.8a.8.8 0 0 0-.8.8v8.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V9.8a.8.8 0 0 0-.8-.8Z"
                          fill="#14756E"
                          fillOpacity=".16"
                          stroke="#14756E"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M11 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                          stroke="#14756E"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="text-gray-800 text-2xl font-semibold text-center">
                    <h2>Best Price</h2>
                  </div>
                  <div className="!text-secondary mt-2 text-lg text-center">
                    <p className="text-base">
                      Choose a perfect teacher who can fullfill your budget.
                    </p>
                  </div>
                </div>
                <div className="py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                  <div className="mb-6">
                    <svg
                      width={32}
                      height={32}
                      style={{ transform: "scale(2)" }}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          opacity="0.4"
                          d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z"
                          fill="#14756E"
                        ></path>{" "}
                        <path
                          d="M10.3802 14.5099H7.70023C7.26023 14.5099 6.85023 14.2999 6.59023 13.9399C6.34023 13.5999 6.28022 13.18 6.40022 12.78C6.75022 11.71 7.61022 11.1299 8.37022 10.6099C9.17022 10.0699 9.62022 9.72996 9.62022 9.14996C9.62022 8.62996 9.20022 8.20996 8.68022 8.20996C8.16022 8.20996 7.74023 8.62996 7.74023 9.14996C7.74023 9.55996 7.40023 9.89996 6.99023 9.89996C6.58023 9.89996 6.24023 9.55996 6.24023 9.14996C6.24023 7.80996 7.33022 6.70996 8.68022 6.70996C10.0302 6.70996 11.1202 7.79996 11.1202 9.14996C11.1202 10.56 10.0602 11.2799 9.21024 11.8599C8.68024 12.2199 8.18022 12.5599 7.93022 13.0099H10.3702C10.7802 13.0099 11.1202 13.3499 11.1202 13.7599C11.1202 14.1699 10.7902 14.5099 10.3802 14.5099Z"
                          fill="#14756E"
                        ></path>{" "}
                        <path
                          d="M16.0408 14.5099C15.6308 14.5099 15.2908 14.1699 15.2908 13.7599V13.0699H13.3309C13.3309 13.0699 13.3309 13.0699 13.3209 13.0699C12.8309 13.0699 12.3809 12.81 12.1309 12.39C11.8809 11.96 11.8809 11.4299 12.1309 11.0099C12.8109 9.83995 13.6009 8.50991 14.3209 7.34991C14.6409 6.83991 15.2509 6.60996 15.8209 6.76996C16.3909 6.93996 16.7909 7.45993 16.7809 8.05993V11.58H17.0009C17.4109 11.58 17.7509 11.92 17.7509 12.33C17.7509 12.74 17.4109 13.08 17.0009 13.08H16.7908V13.77C16.7908 14.18 16.4608 14.5099 16.0408 14.5099ZM15.2908 8.63995C14.7008 9.59995 14.0908 10.6299 13.5408 11.5699H15.2908V8.63995Z"
                          fill="#14756E"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <div className="text-gray-800 text-2xl font-semibold text-center">
                    <h2>Best Support</h2>
                  </div>
                  <div className="!text-secondary mt-2 text-lg text-center">
                    <p className="text-base">
                      We are always here to help you with any kind of work.
                    </p>
                  </div>
                </div>
                <div className="py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                  <div className="mb-6">
                    <svg
                      width={32}
                      height={32}
                      style={{ transform: "scale(2)" }}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          opacity="0.1"
                          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          fill="#14756E"
                        ></path>{" "}
                        <path
                          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="#14756E"
                          strokeWidth="2"
                        ></path>{" "}
                        <path
                          d="M9 10L15 10"
                          stroke="#14756E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M9 14L15 14"
                          stroke="#14756E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <div className="text-gray-800 text-2xl font-semibold text-center">
                    <h2>Best Opportunity</h2>
                  </div>
                  <div className="!text-secondary mt-2 text-lg text-center">
                    <p className="text-base">
                      Make your child&apos;s future bright and give them a
                      chance to stay on the top.
                    </p>
                  </div>
                </div>
                <div className="py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                  <div className="mb-6">
                    <svg
                      width={32}
                      height={32}
                      style={{ transform: "scale(1.7)" }}
                      viewBox="-102.4 -102.4 1228.80 1228.80"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#14756E"
                      transform="rotate(0)"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill="#14756E"
                          d="M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"
                        ></path>
                        <path
                          fill="#14756E"
                          d="m220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="text-gray-800 text-2xl font-semibold text-center">
                    <h2>Best Guidance</h2>
                  </div>
                  <div className="!text-secondary mt-2 text-lg text-center">
                    <p className="text-base">
                      We have talented and educated teachers in your city and
                      area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Highlights />
          <Testimonial />
          <Footer />
      </div>
  );
}
