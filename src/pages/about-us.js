import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div>
      <section className="mt-12 lg:container lg:mx-auto lg:py-12 md:py-12 md:px-6 py-2 px-4">
        <div className="container mx-auto">
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
                <span className="text-sm leading-none">/ About Us</span>
              </li>
            </ul>
          </div>
          <div className="mx-auto text-center mt-8">
            <h1 className="text-center text-4xl font-bold">Who are we?</h1>
            <p className="!mt-4 text-center font-normal text-slate-500 sm:w-2 md:w-auto sm:m-auto">
              We are a team of talented and well-experienced teachers who are
              dedicated to providing the best tuition services to our clients.
              Our educators bring a wealth of knowledge and expertise in their
              respective fields, ensuring a learning environment that is both
              enriching and transformative.
            </p>
            <div className="mt-11 justify-center sm:flex gap-4">
              <a
                className="inline-block py-2 px-4 bg-[#14756E] rounded-sm text-white hover:bg-[#005153]"
                href="/login"
              >
                <div className="inline-block px-2 font-semibold text-sm rounded-full items-center relative cursor-pointer whitespace-nowrap !text-white">
                  Download Our App
                </div>
              </a>
              <a
                className="inline-block py-2 px-4 border-secondary bg-secondary rounded-sm text-black hover:!bg-amber-400 cursor-pointer hover:text-black"
                href={process.env.WEBSITE_TEACHER}
              >
                <div className="inline-block px-2 font-semibold text-sm rounded-full items-center relative cursor-pointer whitespace-nowrap">
                  Join as a Teacher
                </div>
              </a>
            </div>
          </div>
          <section className="w-full mt-8 bg-white px-10">
            <div className="flex flex-wrap gap-10 w-fit mx-auto lg:py-10 justify-center">
              <div className="border-border px-10 py-10 text-center sm:col-6 lg:col-3 lg:border-r lg:py-0">
                <h2>
                  <span className="count text-3xl font-bold">550</span>{" "}
                  <span className="text-[#A3A1FB]">+</span>
                </h2>
                <p>Home Tutors</p>
              </div>
              <div className="border-border px-10 py-10 text-center sm:col-6 lg:col-3 lg:border-r lg:py-0">
                <h2>
                  <span className="count text-3xl font-bold">800</span>
                  <span className="text-[#5EE2A0]">+</span>
                </h2>
                <p>Services Offered</p>
              </div>
              <div className="border-border px-10 py-10 text-center sm:col-6 lg:col-3 lg:border-r lg:py-0">
                <h2>
                  <span className="count text-3xl font-bold">4</span>{" "}
                  <span className="text-primary">+</span>
                </h2>
                <p>Cities Covered</p>
              </div>
              <div className="px-10 py-10 text-center sm:col-6 lg:col-3 lg:py-0">
                <h2>
                  <span className="count text-3xl font-bold">2000</span>{" "}
                  <span className="text-[#FEC163]">+</span>
                </h2>
                <p>Happy Customers</p>
              </div>
            </div>
          </section>
          {/* <section className="bg-white mt-8 w-full flex justify-center items-center dark:bg-gray-900 p-8">
            <div className="max-w-screen-xl px-4 mx-auto">
            <article className="text-center mb-12 text-2xl font-semibold uppercase">Our Trusted Platforms</article>
              <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                <div className="flex items-center lg:justify-center">
                  <img className="h-9" src={google} alt="google cloud" />
                </div>
                <div className="flex items-center lg:justify-center">
                  <img className="h-9" src={msn} alt="msn" />
                </div>
                <div className="flex items-center lg:justify-center">
                  <img
                    className="h-9 scale-[1.4]"
                    src={adobe}
                    alt="adobe content"
                  />
                </div>
                <div className="flex items-center lg:justify-center">
                  <img className="h-9" src={cloudfare} alt="cloudfare" />
                </div>
                <div className="flex items-center lg:justify-center">
                  <img className="h-9" src={apache} alt="apche" />
                </div>
                <div className="flex items-center lg:justify-center">
                  <img
                    className="h-9 scale-[2]"
                    src={coursera}
                    alt="coursera"
                  />
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </section>

      <section className="section">
        <div className="bg-gradient-to-b from-purple-50 to-pink-50">
          <div className="container mx-auto px-6 py-10 text-center md:px-12 md:py-16">
            <div className="py-6">
              <div className="lg:text-center">
                <h2 className="text-base text-[#14756E] font-semibold trackingWide uppercase">
                  Bookmysession
                </h2>
                <p className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-2xl">
                  A better way to learn
                </p>
                <p className="text-base mt-4 max-w-2xl text-black lg:mx-auto">
                  We offer a wide range of services to help you achieve your
                  goals. Whether you are looking to improve your grades, learn a
                  new skill, or prepare for a standardized test, we have the
                  resources and expertise to help you succeed.
                </p>
              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative bg-white px-12 py-6 rounded-xl">
                    <dt>
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-[#14756E] text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </div>
                      <p className="text-center text-lg mt-4 leading-6 font-semibold text-gray-900">
                        Personalized Learning Experience
                      </p>
                    </dt>
                    <dd className="mt-2 text-center text-base text-gray-600">
                      At Bookmysession, we believe in the power of personalized
                      learning. Our tailored approach ensures that each student
                      receives individualized attention and support, allowing
                      them to learn at their own pace and achieve their academic
                      goals.
                    </dd>
                  </div>

                  <div className="relative bg-white px-12 py-6 rounded-xl">
                    <dt>
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-[#14756E] text-white">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                          />
                        </svg>
                      </div>
                      <p className="text-center text-lg mt-4 leading-6 font-semibold text-gray-900">
                        Qualified and Experienced Tutors
                      </p>
                    </dt>
                    <dd className="mt-2 text-center text-base text-gray-600">
                      TutorsOur team of tutors consists of highly qualified and
                      experienced professionals dedicated to excellence in
                      education. Our tutors provide comprehensive instruction,
                      guidance, and mentorship to help students succeed.
                    </dd>
                  </div>
                  <div className="relative bg-white px-12 py-6 rounded-xl">
                    <dt>
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-[#14756E] text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </div>
                      <p className="text-center text-lg mt-4 leading-6 font-semibold text-gray-900">
                        Convenient and Flexible Scheduling
                      </p>
                    </dt>
                    <dd className="mt-2 text-center text-base text-gray-600">
                      We understand the importance of flexibility in
                      today&apos;s busy world.That&apos;s why we offer
                      convenient scheduling options, allowing students to
                      arrange tutoring sessions at times that suit their
                      schedules. Whether it&apos;s after school, on weekends, or
                      during holidays, we&apos;re here to accommodate your
                      needs.
                    </dd>
                  </div>
                  <div className="relative bg-white px-12 py-6 rounded-xl">
                    <dt>
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-[#14756E] text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                          />
                        </svg>
                      </div>
                      <p className="text-center text-lg mt-4 leading-6 font-semibold text-gray-900">
                        Proven Track Record of Success
                      </p>
                    </dt>
                    <dd className="mt-2 text-center text-base text-gray-600">
                      With a proven track record of success, Bookmysession has
                      helped countless students excel academically and reach
                      their full potential. Our commitment to quality education,
                      personalized attention, and student-centered learning sets
                      us apart as a trusted partner in academic achievement.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase trackingWidest text-[#14756E]">
              How It happened
            </p>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Here&apos; the way we worked with
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-secondary lg:text-xl lg:leading-8">
              We did everything with our core values of quality, honesty, and
              hard work.
            </p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-[#005153] group-bg-[#005153]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-gray-600 group-hover:text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  May 2020
                </h3>
                <h4 className="mt-2 text-base text-secondary">
                  Our journey begins with the launch of Bookmysession the first
                  online platform for home tutors.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-[#005153] group-bg-[#005153]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 group-hover:text-primary"
                >
                  <path
                    d="M2 3L2 21M22 3V21M11.8 20H12.2C13.8802 20 14.7202 20 15.362 19.673C15.9265 19.3854 16.3854 18.9265 16.673 18.362C17 17.7202 17 16.8802 17 15.2V8.8C17 7.11984 17 6.27976 16.673 5.63803C16.3854 5.07354 15.9265 4.6146 15.362 4.32698C14.7202 4 13.8802 4 12.2 4H11.8C10.1198 4 9.27976 4 8.63803 4.32698C8.07354 4.6146 7.6146 5.07354 7.32698 5.63803C7 6.27976 7 7.11984 7 8.8V15.2C7 16.8802 7 17.7202 7.32698 18.362C7.6146 18.9265 8.07354 19.3854 8.63803 19.673C9.27976 20 10.1198 20 11.8 20Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Nov 2020
                </h3>
                <h4 className="mt-2 text-base text-secondary">
                  We launch a campaign and demo to aware everyone with a new
                  tool.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-[#005153] group-bg-[#005153]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 group-hover:text-primary"
                >
                  <path
                    d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 9.79086 17.5228 8 12 8C6.47715 8 2 9.79086 2 12M22 12C22 14.2091 17.5228 16 12 16C6.47715 16 2 14.2091 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  July 2021
                </h3>
                <h4 className="mt-2 text-base text-secondary">
                  We connect with parents across and provide them with better
                  service.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-[#005153] group-bg-[#005153]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 group-hover:text-primary"
                >
                  <path
                    d="M5.50049 10.5L2.00049 7.9999L3.07849 6.92193C3.964 6.03644 4.40676 5.5937 4.9307 5.31387C5.39454 5.06614 5.90267 4.91229 6.42603 4.86114C7.01719 4.80336 7.63117 4.92617 8.85913 5.17177L10.5 5.49997M18.4999 13.5L18.8284 15.1408C19.0742 16.3689 19.1971 16.983 19.1394 17.5743C19.0883 18.0977 18.9344 18.6059 18.6867 19.0699C18.4068 19.5939 17.964 20.0367 17.0783 20.9224L16.0007 22L13.5007 18.5M7 16.9998L8.99985 15M17.0024 8.99951C17.0024 10.1041 16.107 10.9995 15.0024 10.9995C13.8979 10.9995 13.0024 10.1041 13.0024 8.99951C13.0024 7.89494 13.8979 6.99951 15.0024 6.99951C16.107 6.99951 17.0024 7.89494 17.0024 8.99951ZM17.1991 2H16.6503C15.6718 2 15.1826 2 14.7223 2.11053C14.3141 2.20853 13.9239 2.37016 13.566 2.5895C13.1623 2.83689 12.8164 3.18282 12.1246 3.87469L6.99969 9C5.90927 10.0905 5.36406 10.6358 5.07261 11.2239C4.5181 12.343 4.51812 13.6569 5.07268 14.776C5.36415 15.3642 5.90938 15.9094 6.99984 16.9998V16.9998C8.09038 18.0904 8.63565 18.6357 9.22386 18.9271C10.343 19.4817 11.6569 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745C20.8165 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27697C21.9991 8.81664 21.9991 8.32749 21.9991 7.34918V6.8C21.9991 5.11984 21.9991 4.27976 21.6722 3.63803C21.3845 3.07354 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1991 2Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Feb 2022
                </h3>
                <h4 className="mt-2 text-base text-secondary">
                  We launched Bookmysession in three other cities and received a
                  positive response. Now, we are planning to expand it further.
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}