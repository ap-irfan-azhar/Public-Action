import {Object2, Object1} from "../Ornaments/Ornaments"
import { Helmet } from 'react-helmet'

export default function Conference() {
    return(
        <div className="overflow-hidden">
            <Helmet>
				<title>Conferences</title>
				<meta name="description" content="Public Action Conferences and AIPC Conference"></meta>
				<meta name="keywords" content="Public Action, UGM, Public policy, public management, conferences"></meta>
			</Helmet>
            <div className="bg-putih">
                    <div className="relative md:px-32 pt-10 bg-transparant">
                        <h1 className="text-5xl font-bold font-serif text-ungu-300 text-center mb-12 relative z-10">Conferences</h1>

                        <div className="pb-20 relative z-10">
                            <div className="md:flex items-center md:my-5 md:mt-8 mt-20 mb-20">
                                <img className="h-48 md:h-60 mx-auto border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg" src={`${process.env.PUBLIC_URL}/images/events/event-2.jpeg`} alt="" />
                                <div className=" m-5 text-ungu-300">
                                        <h2 className="text-4xl font-serif font-bold md:text-left text-center">Public Action Conference</h2>
                                        <p className="text-justify font-semibold z-40">This conference is the highlight of Public Action 2021. It is open to the public and is  targeted to 700 participants. In this conference which theme is “Emphasizing Public Value  in Addressing Perpetual Social Issues: A Multidimensional Perspective”, distinguished  speakers will deliver materials and will be moderated by a lecturer of the Department of  Public Policy and Management.</p>
                                </div>
                            </div>

                            <div className="md:flex items-center md:my-5 md:mb-8 mb-20">
                                <img className="order-last h-48 md:h-60 mx-auto border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg" src={`${process.env.PUBLIC_URL}/images/events/event-6.jpeg`} alt="" />
                                <div className=" m-5 text-ungu-300">
                                        <h2 className="text-4xl font-serif font-bold md:text-right text-center">AIPC Conference</h2>
                                        <p className="text-justify font-semibold">AIPC also provides exclusive conference and mentoring for all the competition’s  participants to support them with relevant materials. Hence, the output made by the  participants will be of great quality. Through the conference and mentorship, Public Action  aims to raise awareness on certain issues such as sustainable fashion, indigenous peoples  empowerment, and freedom of speech and expression in the digital era.</p>
                                </div>
                            </div>
                        </div>


                        <div className="absolute md:-top-32 top-44 md:-right-72 -right-96 opacity-75 z-0 transform -rotate-45">
                            <Object2 size="1000"/>
                        </div>
                        <div className="hidden md:block absolute -top-12 -left-20">
                            <Object1 width="500" />
                        </div>
                        <div className="absolute hidden -right-32 -bottom-16 transform -rotate-12 z-0">
                            <Object1 width="500" />
                        </div>
                        <div className="absolute bg-ungu-300 w-screen h-12 left-0 bottom-0"/>
                    </div>
            </div>
        </div>
    )
}
