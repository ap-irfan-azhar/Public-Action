import {Object1} from "../Ornaments/Ornaments"
import Timeline from '../Components/Timeline/TimelineCompetition'
import {LightBulbIcon, AcademicCap, BookOpen } from '../Components/Homepage/icons'
import { Link } from 'react-router-dom'
import MentorBox from '../Components/Homepage/Mentors/MentorBox'
import {mentors as mentorList} from '../Data/Mentors'


export default function Competition () {
    return(
        <div className="overflow-hidden">
            <div className="bg-putih overflow-hidden" >
                    <div className="relative md:px-28 px-5 pt-5">
                        <div className="z-10 text-ungu-300">
                            <h1 className="md:text-5xl text-4xl font-bold font-serif text-center my-5">ASEAN Innovative Policy Competition (AIPC)</h1>
                            <p className="text-justify text-lg font-serif">
                            ASEAN Innovative Policy Competition (AIPC) is a competition held for undergraduate students across ASEAN to challenge their critical thinking skills regarding several social issues. AIPC provides exclusive conference for all the registrants and exclusive mentorship for the selected participants. This year, AIPC focuses on the three pillars of ASEAN: Political-Security Community (APC), Economic Community (AEC), and Socio-Cultural Community (ASC) with the topics as follows:
                            </p>
                            <div className="md:flex md:justify-evenly">
                                <div 
                                    className="relative bg-cover mx-auto w-80 h-44 my-5 m-5 border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg mb-12" 
                                    style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/competitions/comp-1.jpeg')` }}>
                                    <p className="absolute text-lg font-semibold md:inset-y-1/3 inset-y-1/2 inset-x-1/4 md:text-lg text-white font-serif font-semibold text-center z-10 mx-2">Fash Fashion</p>
                                    <div
                                        className="bg-ungu-300 absolute top-0 left-0 w-full h-full opacity-30 rounded-lg"
                                    />
                                </div>

                                <div 
                                    className="relative bg-cover mx-auto w-80 h-44 my-5 m-5 border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg" 
                                    style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/competitions/comp-2.jpeg')` }}>
                                    <p className="absolute text-lg font-semibold md:inset-y-1/3 inset-y-1/3 inset-x-1/4 md:text-lg text-white font-serif font-semibold text-center z-10 mx-2">Indigenous People</p>
                                    <div
                                        className="bg-ungu-300 absolute top-0 left-0 w-full h-full opacity-30 rounded-lg"
                                    />
                                </div>
                                <div 
                                    className="relative bg-cover mx-auto w-80 h-44 my-5 m-5 border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg" 
                                    style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/competitions/comp-3.jpeg')` }}>
                                    <p className="absolute md:inset-y-1/3 inset-y-1/3 inset-x-1/5 md:text-lg text-white font-serif font-semibold text-center z-10 mx-2">Freedom of speech and democracy in the digital era</p>
                                    <div
                                        className="bg-ungu-300 absolute top-0 left-0 w-full h-full opacity-30 rounded-lg"
                                    />
                                </div>
                            </div>
                            <p className="text-justify font-serif text-lg">
                            by involving youths and experts from different countrie, we hope to broaden the perspectives regarding the aforementioned issues
                            </p>

                            <div className="flex justify-center mb-12">
                                <Link to="/registration/competition">
                                    <div className="px-2 py-1 m-3 w-32 text-center rounded shaddow bg-ungu-200 hover:bg-ungu-400 text-lg text-putih hover:text-white inline-block transition duration-500 ease-in-out transform hover:scale-125">
                                        <p>Register</p>
                                    </div>

                                </Link>

                                <Link to="/guidebook">
                                    <div className="px-2 py-1 m-3 w-32 text-center rounded shaddow bg-ungu-200 hover:bg-ungu-400 text-lg text-putih hover:text-white inline-block transition duration-500 ease-in-out transform hover:scale-125">
                                        <p>Guidebook</p>
                                    </div>
                                </Link>

                            </div>
                                <div className="hidden md:block absolute -top-12 -left-44 transform -rotate-90">
                                        <Object1 />
                                </div>
                                <div className="absolute -right-32 -bottom-16 transform -rotate-12 hidden md:block">
                                        <Object1 />
                                </div>
                            </div>


                    </div>
                    
            </div>


            <div className="w-screen h-6 bg-ungu-400"/>
            <div className="flex flex-col justify-evenly items-center py-5">	
                <p className="py-5 text-4xl text-ungu-400 font-bold font-sans"> Objectives </p>
                <div className="grid md:grid-cols-3 grid-cols-1 pb-5 md:pb-10">
                    <div className="flex flex-col items-center bg-putih shadow max-w-max rounded-lg text-center p-4 m-4">
                        <LightBulbIcon />
                        <p className="text-ungu-200 max-w-xs"> Giving opportunity for undergraduate students across ASEAN to demonstrate their critical thinking skills </p>
                    </div>
                    <div className="flex flex-col items-center bg-putih shadow max-w-max rounded-lg text-center p-4 m-4">
                        <AcademicCap />
                        <p className="text-ungu-200 max-w-xs"> Building the engagement and solidarity of ASEAN communities towards perpetual social issues </p>
                    </div>
                    <div className="flex flex-col items-center bg-putih shadow max-w-max rounded-lg text-center p-4 m-4">
                        <BookOpen />
                        <p className="text-ungu-200 max-w-xs"> Supporting the new generation of policy makers through mentorship </p>
                    </div>
                </div>
            </div>	

			<div className=" bg-putih">
				<Timeline />
			</div>

            <div className="bg-oren py-16 px-12 md:px-16" id="mentors">
                <p className="text-white font-bold text-5xl text-center mb-12 font-serif"> Mentors</p>
                <div className="container mx-auto grid md:grid-cols-3 gap-4">
                    {mentorList.map( (mentor) =>
                        <MentorBox
                            name={mentor.name}
                            img={mentor.img}
                            desc1={mentor.desc1}
                            desc2={mentor.desc2}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}