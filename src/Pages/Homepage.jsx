 import {LightBulbIcon, AcademicCap, BookOpen } from '../Components/Homepage/icons'
import Countdown from '../Components/Countdown/Countdown'
import Timeline from '../Components/Homepage/Timeline/Timeline'
import MentorBox from '../Components/Homepage/Mentors/MentorBox'
import {mentors as mentorList} from '../Data/Mentors'
import {partOf, partners, sponsors} from '../Data/Partners'
import Partner from '../Components/Homepage/Partners/Partner'
import {Object1, Group2} from '../Ornaments/Ornaments'

export default function Homepage () {
    return(
		<div className="overflow-hidden">
			<div className="h-screen bg-putih flex items-center relative">
				<div className="mx-auto z-40">
					<p className="text-ungu-400 text-6xl md:text-7xl font-serif text-center"> Welcome to </p>	
					<img src={process.env.PUBLIC_URL + 'images/logo-pa-icon.png'} alt="logo public action" className="h-96 mx-auto " />
				</div>
				<div style={{backgroundImage: `url(${process.env.PUBLIC_URL}/svg/pattern1.svg)`}} className="absolute z-0 w-full h-full opacity-50"></div>
				<div className="absolute z-10 md:w-80 md:h-80 w-52 h-52 bg-gradient-to-br from-ungu-100 to-ungu-400 rounded-full -top-20 md:-left-12 -left-20" > </div>
				<div className="absolute hidden md:block z-10 md:w-52 md:h-80 w-44 h-64 bg-ungu-200 opacity-75 rounded-full -top-20 -right-16" > </div>
				<div className="absolute hidden md:block z-10 md:w-72 md:h-56 w-56 h-52 bg-ungu-200 opacity-75 py-2 rounded-full md:top-20 -top-10 -right-24" > </div>
				<div className=" md:hidden absolute -top-16 -right-32 text-ungu-400">
				<Object1 />
				</div>
        
			</div>
			<div className="md:h-screen">
				<div className="h-1/2 bg-ungu-400 my-auto py-5">
					<Countdown 
						date="jul 18, 2021 13:00:00"
					/>
				</div>
				<div className="relative md:h-1/2 h-96 flex flex-col justify-center items-center font-sans text-center">
					<p className="font-bold text-4xl mb-10 text-ungu-400 z-20"> Our Grand Theme </p>
					<p className="text-lg max-w-xl text-ungu-300 z-20"> "innovative Youths in Action: Emphasizing Public Value in Addressing Perpetual Social Issues” </p>
					<div className="absolute w-56 h-20 -right-8 top-4 rounded-full py-6 bg-ungu-300 z-0"></div>
					<div className="absolute w-56 h-20 -right-16 top-28 rounded-full py-6 bg-ungu-100 z-0"></div>
				</div>
			</div>
			<div className="md:h-screen">
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
			<div className="bg-oren py-16 px-12 md:px-16" id="mentors">
				<p className="text-white font-bold text-5xl text-center mb-12"> Mentors</p>
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
			
			<div className="bg-putih py-16 px-12 md:px-16" id="partners">
				<p className="text-ungu-400 font-bold text-5xl text-center mb-12">Partners</p>

				<p className="text-ungu-400 font-semibold- text-4xl text-center mb-4">sub judul</p>
				<div className="container mx-auto grid md:grid-cols-4 grid-cols-2 gap-4 items-center content-center mb-20">
					{partOf.map((partOf) => 
						<Partner 
							name={partOf.name}
							img={partOf.img}
							size_sm="36"
							size_md="60"
						/>
					)}
				</div>

				<p className="text-ungu-400 font-semibold- text-4xl text-center mb-4">Partners</p>
				<div className="container mx-auto grid md:grid-cols-5 grid-cols-3 gap-4 items-center content-center mb-20">
					{partners.map((partners) => 
						<Partner 
							name={partners.name}
							img={partners.img}
							size_sm="24"
							size_md="40"
						/>
					)}
				</div>

				<p className="text-ungu-400 font-semibold- text-4xl text-center mb-4">Sponsors</p>
				<div className="container mx-auto grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 items-center content-center">
					{sponsors.map((sponsors) => 
						<Partner 
							name={sponsors.name}
							img={sponsors.img}
							size_sm={40}
							size_md={48}
						/>
					)}
				</div>
				
			</div>
    </div>
  )
}