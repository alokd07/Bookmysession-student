import Image from 'next/image';

export default function Highlights() {
    return (
        <>
            <section className="bg-white">
                <div className="container mx-auto px-6 py-12">
                    <article className='text-3xl font-bold text-center text-gray-800'>How it will <span className='relative text-[#14756E]'>help
                    <svg
                  viewBox="0 0 272 11"
                  focusable="false"
                  className="chakra-icon chakra-icon css-f4w11s"
                >
                  <svg
                    width="242"
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
                    width="242"
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
                </svg></span> you ?</article>
                    <div>
                        <div className="mx-auto sm:text-center md:text-start max-w-5xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl rounded-3xl items-center lg:mx-0 lg:flex lg:max-w-none">
                                <div className="p-8 sm:p-10 lg:flex-auto">
                                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start">1. Search Teacher</h3>
                                    <p className="mt-6 text-base leading-7 !text-secondary text-center md:text-start">View the profiles freely and connect with your fantastic teacher according to your criteria (prices, recommendations, reviews and availibility)</p>
                                </div>
                                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                    <div className="rounded-2xl text-center lg:flex lg:flex-col lg:justify-center">
                                        <div className="mx-auto max-w-md px-8">
                                            <Image
                                                className='h-auto w-auto'
                                                src="/search-teacher.png"
                                                alt="searching teacher"
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block mx-auto max-w-5xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl rounded-3xl items-center lg:mx-0 lg:flex lg:max-w-none">
                                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                    <div className="rounded-2xl text-center lg:flex lg:flex-col lg:justify-center">
                                        <div className="mx-auto max-w-md px-8">
                                            <Image
                                                className='h-auto w-auto'
                                                src="/contact-teacher.png"
                                                alt="contacting teacher"
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 sm:p-10 lg:flex-auto">
                                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start">2. Contact</h3>
                                    <p className="mt-6 text-base leading-7 !text-secondary text-center md:text-start">Choose a best teacher of your favorite subject and schedule a class.</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden mx-auto max-w-5xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl rounded-3xl items-center lg:mx-0 lg:flex lg:max-w-none">
                                <div className="p-8 sm:p-10 lg:flex-auto">
                                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start">2. Contact</h3>
                                    <p className="mt-6 text-base leading-7 !text-secondary text-center md:text-start">Choose a best teacher of your favorite subject and schedule a class. Otherwise we will choose a perfect teacher for you.</p>
                                </div>
                                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                    <div className="rounded-2xl text-center lg:flex lg:flex-col lg:justify-center">
                                        <div className="mx-auto max-w-md px-8">
                                            <Image
                                                className='h-auto w-auto'
                                                src="/contact-teacher.png"
                                                alt="contacting teacher"
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto max-w-5xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl rounded-3xl items-center lg:mx-0 lg:flex lg:max-w-none">
                                <div className="p-8 sm:p-10 lg:flex-auto">
                                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start">3. Get Quality Education</h3>
                                    <p className="mt-6 text-base leading-7 !text-secondary text-center md:text-start">Freely schedule your classes with your teacher at your convenience. Our user-friendly platform allows you to easily coordinate and arrange personalized learning sessions that fit your schedule. </p>
                                </div>
                                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                    <div className="rounded-2xl text-center lg:flex lg:flex-col lg:justify-center">
                                        <div className="mx-auto max-w-md px-8">
                                            <Image
                                                className='h-auto w-auto'
                                                src="/get-education.png"
                                                alt="getting education"
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
