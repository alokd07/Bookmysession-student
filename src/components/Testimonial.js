import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";

export default function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 478,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const data = [
    {
      id: 1,
      image: 'https://live.staticflickr.com/65535/53736252354_fb8005924a_m.jpg',
      name: 'Ajay Dubey',
      city: 'Gorakhpur',
      state: 'Uttar Pradesh',
      desc: 'Parent',
      text: "As a parent, I am incredibly impressed with Bookmysession. Their home tuition services have truly made a positive impact on my child's academic journey. The personalized attention and dedicated tutors have helped my child excel in their studies.",
    },
    {
      id: 2,
      image: 'https://live.staticflickr.com/65535/53602604655_c963ac13b4_s.jpg',
      name: 'Vinod Kumar',
      city: 'Varanasi',
      state: 'Uttar Pradesh',
      desc: 'Parent',
      text: 'Their platform connects me with highly qualified teachers in my area who are not only knowledgeable but also genuinely passionate about teaching. The level of professionalism and dedication displayed by the teachers recommended by Bookmysession is truly commendable.',
    },
    {
      id: 3,
      image: 'https://live.staticflickr.com/65535/53602479899_d5db4bb4aa_m.jpg',
      name: 'Pranav Jaisawal',
      city: 'Varanasi',
      state: 'Uttar Pradesh',
      desc: 'Parent',
      text: 'Thanks to Bookmysession, my child is receiving top-notch education from excellent tutors who cater to their individual learning needs. I highly recommend Bookmysession to any parent looking for a reliable platform to find the perfect teacher for their child!'
    },
    {
      id: 4,
      image: 'https://live.staticflickr.com/65535/53602136936_c52225fd27_n.jpg',
      name: 'Krishna Tiwari',
      city: 'Lucknow',
      state: 'Uttar Pradesh',
      desc: 'Teacher',
      text: 'I have had an amazing experience with Bookmysession. As a teacher looking for students, I was struggling to find a platform that connects me with the right individuals. However, Bookmysession changed everything for me.'
    },
    {
      id: 5,
      image: 'https://live.staticflickr.com/65535/53602348183_a74e8747c0_s.jpg',
      name: 'Ayushi Purwar',
      city: 'Lucknow',
      state: 'Uttar Pradesh',
      desc: 'Teacher',
      text: 'Thanks to Bookmysession, I am now able to connect with motivated students and make a positive impact on their education journey. If you are looking for a platform that connects you with eager learners, I highly recommend giving Bookmysession a try!'
    },
    {
      id: 6,
      image:'https://live.staticflickr.com/65535/53602136961_bf3a82f1a5_s.jpg',
      name: 'Saksham Kapoor',
      city: 'Ambedakar Nagar',
      state: 'Uttar Pradesh',
      desc: 'Teacher',
      text: "Bookmysession's home tuition service has been a lifesaver for my child. The personalized attention and quality teaching have made a significant difference in their academic performance. I can't thank you enough, Bookmysession, for connecting us with such dedicated tutors."
    },
    {
      id: 6,
      image:'https://live.staticflickr.com/65535/53602479884_44f9e43320_n.jpg',
      name: 'Manish Singh',
      city: 'Varanasi',
      state: 'Uttar Pradesh',
      desc: 'Parent',
      text: "I am truly grateful to Bookmysession for providing excellent home tuition for my child. Their dedication and support have greatly improved my kid's academic performance. Thank you for all your hard work and commitment."
    },
    {
      id: 6,
      image:'https://live.staticflickr.com/65535/53602360023_6bf78febd4_m.jpg',
      name: 'Nikhil Yadav',
      city: 'Varanasi',
      state: 'Uttar Pradesh',
      desc: 'Teacher',
      text: 'I am truly grateful for the fantastic home tuition services provided by Bookmysession. Thanks for giving me the opportunity to enhance my skills in the comfort of my own location and choose me to help someone to get bright one.'
    }
  ]
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div className='container mx-auto bg-white'>
        <div className="py-4 sm:py-8">
          <div className="mx-auto px-6 lg:px-8">
            <div className="container md:flex items-center justify-between lg:mx-0">
              <h1 className="text-3xl text-center md:w-[30rem] font-bold tracking-tight text-gray-900 sm:text-3xl">What our <span className='relative text-[#14756E]'>lovely connections
              <svg
                  viewBox="0 0 272 11"
                  focusable="false"
                  className="chakra-icon chakra-icon css-f4w11s !w-[230px]"
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
                  className="chakra-icon chakra-icon css-1trla8u !w-[230px]"
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
                </svg></span> says</h1>
              <p className="mt-2 text-base text-center md:start md:w-96 text-secondary">
                We recently worked with some of our clients to create a few case studies. Here’s what they had to say about us.
              </p>
            </div>
            {/* <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            </div> */}
            <Slider {...settings} className='mt-8'>
              {data.map((item) => {
                return (
                  <div data-value={item.id} key={item.id}>
                    <div className='max-w-xs min-h-[15rem]'>
                      <div className='flex'>
                        <div className='p-2'>
                          {/* <img className='h-16 w-24 rounded-lg' src={item.image} alt={item.name} /> */}
                          <Image
                            className='h-16 w-24 rounded-lg'
                            src={item.image}
                            alt={item.name}
                            width={96}
                            height={64}
                            />
                        </div>
                        <div className='w-full items-center ml-2 bg-teal-50/50 py-1 px-3 rounded-t-xl'>
                          <h2 className='text-base font-semibold'>{item.name}</h2>
                          <p className='text-sm'>{item.desc}, {item.city}, {item.state}</p>
                          <div className='mt-1 gap-0.5 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className='bg-teal-50/50 p-3 rounded-l-xl rounded-b-xl'>
                        <p className='text-sm'>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
