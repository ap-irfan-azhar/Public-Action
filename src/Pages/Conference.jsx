import { Group2, Object1, Object2 } from "../Ornaments/Ornaments";
import { Helmet } from "react-helmet";
import { speakers } from "../Data/aipcConference";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.css";

export default function Conference() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Conferences</title>
        <meta
          name="description"
          content="Public Action Conferences and AIPC Conference"
        ></meta>
        <meta
          name="keywords"
          content="Public Action, UGM, Public policy, public management, conferences"
        ></meta>
      </Helmet>
      <div className="bg-putih">
        <div>
          <div className="hidden md:block absolute -top-20 -right-40">
            <Object1 width="500" />
          </div>
          <div className="absolute md:hidden block -right-20 -top-16 transform -rotate-12 z-0">
            <Object1 width="250" />
          </div>
          <div className="absolute hidden md:block -left-60 -top-20 transform z-0 transform rotate-180">
            <Object1 width="550" />
          </div>
        </div>
        <div className="relative md:px-8 px-4 pt-10 bg-transparant min-h-screen">
          <div className="flex items-center justify-center gap-x-2">
            <Group2 width="40" />
            <h1 className="md:text-7xl text-5xl font-bold font-serif text-ungu-200 text-center relative z-10 align-middle">
              AIPC Conferences
            </h1>
            <Group2 width="40" />
          </div>

          <div>
            <div className="hidden md:flex my-8 justify-center gap-x-4 md:gap-y-8 gap-y-2 flex-wrap py-12">
              {speakers.map((speaker) => (
                <div>
                  <div className="bg-gradient-to-br from-ungu-200 to-oren rounded-t-full md:w-48 w-40 md:h-60 h-52 overflow-hidden mx-auto">
                    <img
                      className="w-full h-full transform "
                      src={`${process.env.PUBLIC_URL}/images/conferences/${speaker.img}`}
                      alt=""
                    />
                  </div>
                  <div className="w-60 min-h-52 flex flex-col items-strech rounded-2xl text-white mx-auto md:text-lg font-serif text-justify">
                    <div className="bg-oren rounded-t-2xl pt-2 px-2">
                      <p
                        className={`text-center font-semibold ${
                          speaker.nama.length < 16
                            ? "md:text-2xl text-xl "
                            : "md:text-xl text-lg"
                        }`}
                      >
                        {speaker.nama}
                      </p>
                      <p className={speaker.jabatan.length > 52 && "text-xs"}>
                        {speaker.jabatan}
                      </p>
                    </div>{" "}
                    <div className="bg-ungu-200 rounded-b-2xl pb-2 px-2">
                      {speaker.tema}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:hidden my-12 md:mx-2 mx-4 flex justify-center gap-x-4 md:gap-y-8 gap-y-2 flex-wrap py-12">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {speakers.map((speaker) => (
                  <SwiperSlide>
                    <div className="bg-gradient-to-br from-ungu-200 to-oren rounded-t-full w-48 h-60 overflow-hidden mx-auto">
                      <img
                        className="w-full h-full transform "
                        src={`${process.env.PUBLIC_URL}/images/conferences/${speaker.img}`}
                        alt=""
                      />
                    </div>
                    <div className="w-60 min-h-52 flex flex-col items-strech rounded-2xl text-white mx-auto md:text-lg font-serif text-justify">
                      <div className="bg-oren rounded-t-2xl pt-2 px-2">
                        <p
                          className={`text-center font-semibold ${
                            speaker.nama.length < 16
                              ? "md:text-2xl text-xl "
                              : "md:text-xl text-lg"
                          }`}
                        >
                          {speaker.nama}
                        </p>
                        <p className={speaker.jabatan.length > 52 && "text-xs"}>
                          {speaker.jabatan}
                        </p>
                      </div>
                      <div className="bg-ungu-200 rounded-b-2xl pb-2 px-2">
                        {speaker.tema}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="bg-ungu-200 md:py-12~ py-6">
          <div className="flex flex-col md:flex-row justify-center gap-y-4 flex-wrap justify-between gap-x-8 md:mx-24 mx-4 bg-biru font-serif">
            <div className="flex md:order-last">
              <div className="self-center -mr-5">
                <div className="text-white text-lg font-serif text-right rounded-tl-xl bg-oren pr-8">
                  <p className="md:-ml-4 -ml-2 bg-oren rounded-tl-2xl">
                    Moderator
                  </p>
                  <p className="text-xl md:-ml-4 -ml-2 bg-oren rounded-bl-2xl">
                    Kintan Adhyna Putri
                  </p>
                </div>
                <div className="bg-white text-gray-700 rounded-bl-full pr-6 pl-2 text-right text-sm">
                  <p>ASEAN Youth Ambassador for Indonesia 2019</p>
                </div>
              </div>

              <div className="bg-gradient-to-tr from-ungu-300 via-ungu-300 to-ungu-100 rounded-full">
                <img
                  className="h-28 w-28 rounded-full"
                  src={`${process.env.PUBLIC_URL}/images/conferences/Kintan Adhyna Putri.png`}
                  alt="Kintan Adhyna Putri"
                />
              </div>
            </div>
            <div className="bg-oren h-20 px-2 py-1 rounded-2xl text-lg text-semibold text-white self-center">
              <p className="h-10 text-center align-middle">
                Saturday, September 11, 2021
              </p>
              <p className="h-10 text-center align-middle">
                9 a.m. to 12 a.m. (GMT+7)
              </p>
            </div>

            <div className="text-white text-lg font-bold self-center">
              <p className="bg-gradient-to-br from-ungu-300 via-ungu-300 to-oren px-4 py-1 rounded-l-full rounded-r-full mb-1 text-center">
                Exclusive for AIPC Registrants
              </p>
              <p className="bg-gradient-to-br from-ungu-300 via-ungu-300 to-oren px-4 py-1 rounded-l-full rounded-r-full mt-1 text-center">
                on Zoom Cloud Meetings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-putih overflow-hidden">
        <div className="relative md:px-32 pt-10 bg-transparant">
          <h1 className="text-7xl font-bold font-serif text-ungu-200 text-center mb-12 relative z-10">
            Public Action Conference
          </h1>

          <div className="pb-20 relative z-10">
            <div className="md:flex items-center md:my-5 md:mt-8 mt-20 mb-20">
              <img
                className="h-48 md:h-60 mx-auto border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg"
                src={`${process.env.PUBLIC_URL}/images/events/event-2.jpeg`}
                alt=""
              />
              <div className=" m-5 text-ungu-300">
                <p className="text-justify font-semibold z-40 text-lg">
                  This conference is the highlight of Public Action 2021. It is
                  open to the public and is targeted to 700 participants. In
                  this conference which theme is “Emphasizing Public Value in
                  Addressing Perpetual Social Issues: A Multidimensional
                  Perspective”, distinguished speakers will deliver materials
                  and will be moderated by a lecturer of the Department of
                  Public Policy and Management.
                </p>
              </div>
            </div>
            <p className="md:text-8xl text-6xl font-serif font-bold text-ungu-300 text-center my-20">
              Coming Soon
            </p>
          </div>

          <div className="absolute md:-top-32 top-44 md:-right-72 -right-96 opacity-75 z-0 transform -rotate-45">
            <Object2 size="1000" />
          </div>
          <div className="hidden md:block absolute -top-12 -left-20 ">
            <Object1 width="500" />
          </div>
          <div className="absolute hidden -right-32 -bottom-16 transform -rotate-12 z-0">
            <Object1 width="500" />
          </div>
          <div className="absolute bg-ungu-300 w-screen h-12 left-0 bottom-0" />
        </div>
      </div>
    </div>
  );
}
