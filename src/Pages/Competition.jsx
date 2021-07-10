import {Object1, Group2} from "../Ornaments/Ornaments"
import Timeline from '../Components/Homepage/Timeline/TimelineCompetition'
import {LightBulbIcon, AcademicCap, BookOpen } from '../Components/Homepage/icons'
import { Link } from 'react-router-dom'

export default function Competition () {
    return(
        <div className="overflow-hidden">
            <div className="bg-putih overflow-hidden" >
                    <div className="relative md:px-28 px-5 pt-5">
                        <div className="z-10 text-ungu-300">
                            <h1 className="md:text-5xl text-4xl font-bold font-serif text-center my-5">ASEAN Innovative Policy Competition (AIPC)</h1>
                            <p className="text-justify text-lg font-serif">
                                ASEAN Innovative Policy Competition (AIPC) is a competition for undergraduate students across ASEAN to challenge their critical thinking skills regarding several social issues. AIPC also provides exclusive conference and mentorship for the participants. This year, AIPC focuses on the three pillars of ASEAN: Political-Security Community (APC), Economic Community (AEC), and Socio-Cultural Community (ASC) with the topics as follows:
                            </p>
                            <div className="md:flex md:justify-evenly">
                                <div 
                                    className="relative bg-cover mx-auto w-80 h-44 my-5 m-5 border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg mb-12" 
                                    style={{ backgroundImage: `url("https://imgdb.in/iMCx.jpg")` }}>
                                    <p className="absolute text-lg font-semibold md:inset-y-1/3 inset-y-1/2 inset-x-1/4 md:text-lg text-white font-serif font-semibold text-center z-10 mx-2">Fash Fashion</p>
                                    <div
                                        className="bg-ungu-300 absolute top-0 left-0 w-full h-full opacity-30 rounded-lg"
                                    />
                                </div>

                                <div 
                                    className="relative bg-cover mx-auto w-80 h-44 my-5 m-5 border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg" 
                                    style={{ backgroundImage: `url("https://imgdb.in/iMCx.jpg")` }}>
                                    <p className="absolute text-lg font-semibold md:inset-y-1/3 inset-y-1/3 inset-x-1/4 md:text-lg text-white font-serif font-semibold text-center z-10 mx-2">Indigenous People</p>
                                    <div
                                        className="bg-ungu-300 absolute top-0 left-0 w-full h-full opacity-30 rounded-lg"
                                    />
                                </div>
                                <div 
                                    className="relative bg-cover mx-auto w-80 h-44 my-5 m-5 border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg" 
                                    style={{ backgroundImage: `url("https://imgdb.in/iMCx.jpg")` }}>
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
                                    <div className="px-2 py-1 m-3 w-24 text-center rounded shaddow bg-ungu-200 hover:bg-ungu-400 text-lg text-putih hover:text-white inline-block transition duration-500 ease-in-out transform hover:scale-125">
                                        <p>Register</p>
                                    </div>

                                </Link>

                                <Link to="/competition-booklet">
                                    <div className="px-2 py-1 m-3 w-24 text-center rounded shaddow bg-ungu-200 hover:bg-ungu-400 text-lg text-putih hover:text-white inline-block transition duration-500 ease-in-out transform hover:scale-125">
                                        <p>Booklet</p>
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

            <div className="md:h-screen">
                <div className="w-screen h-6 bg-ungu-400"/>
				<div className="md:h-1/2 h-96 flex flex-col bg-putih text-center justify-evenly items-center relative">	
					<p className="text-3xl text-ungu-400 font-bold pb-12"> About Competition </p>
					<p className="text-lg text-ungu-300">ASEAN Innovative Policy Competition (AIPC)</p>
					<p className="md:max-w-xl max-w-sm text-ungu-300 pb-4"> This competition is open for undergraduate students across ASEAN from any major to challenge their critical thinking skills regarding several social issues. This year, we focus on the three pillars of ASEAN, namely: Political-Security Community (APC), Economic Community (AEC), and Socio-Cultural Community (ASC). </p>
            <div className="absolute top-10 md:left-12 z-10 opacity-50">
              <Group2 />
            </div>          
				</div>	
				<div className="h-1/2 flex flex-col justify-evenly items-center">	
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
			</div>
			<div className=" bg-putih">
				<Timeline />
			</div>
        </div>
    )
}