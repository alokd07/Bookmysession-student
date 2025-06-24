import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="container mx-auto flex items-end w-full bg-white">
        <footer className="w-full pt-4 text-gray-700 bg-teal-50/50 body-font">
          <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
              <Link href="/" className="flex items-center justify-center font-medium text-gray-900 md:justify-start">
                {/* <img className="h-12 w-auto" src={Logo} alt="HomeTute_Logo" /> */}
                <Image
                    className="h-12 w-auto"
                    src="/logo.svg"
                    alt="HomeTute_Logo"
                    width={48}
                    height={48}
                />
              </Link>
              <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/people/Bookmysession/61557649451056"
                    className="text-gray-600 cursor-pointer hover:text-gray-700"
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </Link>
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://x.com/_bookmysession"
                    className="ml-3 text-gray-600 cursor-pointer hover:text-gray-700"
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/_bookmysession"
                    className="ml-3 text-gray-600 cursor-pointer hover:text-gray-700"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/homeetute"
                    className="ml-3 text-gray-600 cursor-pointer hover:text-gray-700"
                  >
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </Link>
                </span>
              </div>
              <div className="mt-2">© Copyright 2023-2024</div>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-semibold tracking-widest text-gray-900 uppercase title-font">
                  About
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <Link
                      href="/about"
                      className="text-gray-600 cursor-pointer hover:text-gray-900"
                    >
                      Company
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      href="/"
                      className="text-gray-600 cursor-pointer hover:text-gray-900"
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      href="/"
                      className="text-gray-600 cursor-pointer hover:text-gray-900"
                    >
                      Blog
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-semibold tracking-widest text-gray-900 uppercase title-font">
                  Support
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <Link
                      href="/contact-us"
                      className="text-gray-600 cursor-pointer hover:text-gray-900"
                    >
                      Contact Support
                    </Link>
                  </li>
                  <li className="mt-3">
                    <a
                      href="https://blog.bookmysession.in"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-gray-600 cursor-pointer hover:text-gray-900"
                    >
                      Help Resources
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      href="https://blog.bookmysession.in"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-gray-600 cursor-pointer hover:text-gray-900"
                    >
                      Release Updates
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-semibold tracking-widest text-gray-900 uppercase title-font">
                  Platform
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <Link
                      href="/privacy-policy"
                      className="text-gray-600 cursor-pointer hover:text-gray-900"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      href="/terms-conditions"
                      className="text-gray-600 cursor-pointer hover:text-gray-900"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      href="/faq"
                      className="text-gray-600 cursor-pointer hover:text-gray-900"
                    >
                      FAQs
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-semibold tracking-widest text-gray-900 uppercase title-font">
                  Contact
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a
                      href="tel:8005116067"
                      className="text-gray-600 cursor-pointer hover:text-gray-900"
                    >
                      +91 800-511-6067
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      href="tel:8576969778"
                      className="text-gray-600 cursor-pointer hover:text-gray-900"
                    >
                      +91 857-696-9778
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      href="mailto:support@bookmysession.in"
                      className="text-gray-600 cursor-pointer hover:text-gray-900"
                    >
                      support@bookmysession.in
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
