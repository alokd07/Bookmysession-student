import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebase";
import Fuse from "fuse.js";
import { Modal } from 'antd';
import Footer from "@/components/Footer";

export default function FAQ() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredData, setFilteredData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [openModalId, setOpenModalId] = React.useState(null);
  const [initialSlice, setInitialSlice] = React.useState(12);

  const handleOpen = (index) => {
    setOpen(!open);
    setOpenModalId(index);
  };

  const calculateReadingTime = (word) => {
    const words = word.split(/\s+/);
    const totalWords = words.length;
    const estimatedMinutes = Math.ceil(totalWords / 60);
    return estimatedMinutes;
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const q = query(collection(db, "faq"), where("type", "==", "student"));
      const querySnapshot = await getDocs(q);
      const docData = querySnapshot.docs.map((doc) => doc.data());
      setData(docData);
      setLoading(false);
      sessionStorage.setItem("faq", JSON.stringify(docData));
    };
    if (!sessionStorage.getItem("faq")) {
      fetchData();
    } else {
      setData(JSON.parse(sessionStorage.getItem("faq")));
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData([]);
    } else {
      const fuse = new Fuse(data, {
        keys: ["title", "desc"],
        threshold: 0.3, // Adjust this value for more or less fuzzy matching
      });
      const results = fuse.search(searchTerm);
      setFilteredData(results.map((result) => result.item));
    }
  }, [searchTerm, data]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Modal
        title={data[openModalId]?.title}
        style={{
          top: 20,
        }}
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <p>{data[openModalId]?.desc}</p>
      </Modal>

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Mitr:wght@400&family=Patua+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ysabeau+SC:wght@500&display=swap"
          rel="stylesheet"
        />
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
              <span className="text-sm leading-none">/ FAQs</span>
            </li>
          </ul>
        </div>
        <div className="md:mb-0 mb-8 mt-8 md:text-left text-center">
          <h1 className="text-center text-4xl font-bold">
            Search for Questions
          </h1>
          <p className="!mt-4 text-center font-normal text-slate-500 sm:w-2 md:w-auto sm:m-auto">
            If you don&apos;t find your answer, Please{" "}
            <Link className="text-[#14756E] font-semibold" href="/contact-us">
              contact us or leave a message{" "}
            </Link>
            , We&apos;ll be more than happy to assist you.
          </p>
        </div>
        <div className="relative">
          <form
            className="flex items-center justify-center my-12"
            onSubmit={handleSubmit}
          >
            <div className="relative w-full md:w-4/12">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 rounded-full border border-gray-300 text-gray-900 text-sm focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 p-2.5"
                placeholder="Search Questions..."
                value={searchTerm}
                onChange={handleSearchChange}
                required
              />

              <button
                type="button"
                className="flex absolute inset-y-0 right-0 items-center pr-3"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-black hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
          {filteredData.length > 0 && (
            <div
              className="absolute top-14 left-1/2 bg-white w-full md:w-4/12 rounded-md shadow h-72 overflow-x-hidden overflow-y-scroll search-faq"
              style={{ transform: "translateX(-50%)" }}
            >
              {loading ? (
                <p className="px-4 py-2 text-center my-auto">Loading...</p>
              ) : (
                filteredData.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 border-b border-gray-400"
                  >
                    <h2 className="text-base font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-700 mt-2">{item.desc}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        <h1 className="text-center text-2xl mt-12">
          Or <b className="text-[#14756E]">Browse</b> Categories
        </h1>

        <section className="mt-12">
          <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 xl:grid-cols-12 justify-between py-2 items-center mx-auto gap-6">
            {loading && (
              <>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                  <div className="rounded col-span-3 animate-pulse" key={index}>
                    <div className="w-full h-42 flex flex-col justify-between bg-gray-200 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                      <div>
                        <h4 className="bg-gray-300 h-2 font-bold mb-3">
                          {item.title}
                        </h4>
                        <p className="bg-gray-300 h-1 text-sm mt-6"></p>
                        <p className="bg-gray-300 h-1 text-sm mt-3"></p>
                        <p className="bg-gray-300 h-1 text-sm mt-3"></p>
                        <p className="bg-gray-300 h-1 text-sm mt-3"></p>
                        <p className="bg-gray-300 h-1 text-sm mt-3"></p>
                        <p className="bg-gray-300 h-1 text-sm mt-3"></p>
                        <div className="bg-gray-300 h-3 flex justify-between items-center mt-2">
                          <div className="bg-gray-300 h-3"></div>
                          <div className="bg-gray-300 h-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {data.slice(0, initialSlice).map((item, index) => (
              <div className="rounded col-span-3" key={index}>
                <div className="w-full h-42 flex flex-col justify-between bg-teal-700/5 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                  <div>
                    <h4 className="text-gray-800 font-bold mb-3">
                      {item.title.length > 25
                        ? item.title.substring(0, 25) + "..."
                        : item.title}
                    </h4>
                    <p className="text-gray-800 text-sm">
                      {item.desc.length > 90
                        ? item.desc.substring(0, 90) + "..."
                        : item.desc}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <a
                        className="text-sm font-semibold flex items-center hover:!text-[#14756E] cursor-pointer"
                        onClick={() => handleOpen(index)}
                      >
                        Read More
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          className="ml-2"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
                        </svg>
                      </a>
                      <li className="text-[12px] font-semibold list-none">
                        {calculateReadingTime(item.desc)} Mins read
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {data.length > 12 && (
          <p className="text-center mt-2">
            {initialSlice < data.length ? (
              <button
                onClick={() => setInitialSlice(initialSlice + 12)}
                className="bg-[#14756E] cursor-pointer text-sm px-8 py-2 text-white rounded-full font-semibold"
              >
                Load More
              </button>
            ) : (
              <button
                onClick={() => setInitialSlice(12)}
                className="bg-secondary cursor-pointer text-sm px-8 py-2 text-black rounded-full font-semibold"
              >
                Show Less
              </button>
            )}
          </p>
        )}
      </div>
      <Footer />
    </>
  );
};
