import {LightBulbIcon, AcademicCap, BookOpen } from '../Components/Homepage/icons'
import Countdown from '../Components/Countdown/Countdown'

export default function Homepage () {
    return(
        <div>
		<div className="h-screen bg-putih flex items-center">
			<div className="mx-auto">
				<p className="text-ungu-400 text-6xl md:text-7xl font-serif text-center"> Welcome to </p>	
				<img src={process.env.PUBLIC_URL + 'images/logo-pa-icon.png'} alt="logo public action" className="h-96 mx-auto " />
			</div>
		</div>
		<div className="md:h-screen">
			<div className="h-1/2 bg-ungu-400 my-auto py-5">
				<Countdown />
			</div>
			<div className="md:h-1/2 h-96 bg-putih flex flex-col justify-center items-center font-sans text-center">
				<p className="font-bold text-4xl mb-10 text-ungu-400"> Our Grand Theme </p>
				<p className="text-lg max-w-xl text-ungu-300"> "innovative Youths in Action: Emphasizing Public Value in Addressing Perpetual Social Issues” </p>
			</div>
		</div>
		<div className="md:h-screen">
			<div className="h-96 flex flex-col text-center justify-evenly items-center font-sans">	
				<p className="text-3xl text-ungu-400 font-bold pb-12"> About Competition </p>
				<p className="text-lg text-ungu-300">ASEAN Innovative Policy Competition (AIPC)</p>
				<p className="md:max-w-xl max-w-sm text-ungu-300 pb-4"> This competition is open for undergraduate students across ASEAN from any major to challenge their critical thinking skills regarding several social issues. This year, we focus on the three pillars of ASEAN, namely: Political-Security Community (APC), Economic Community (AEC), and Socio-Cultural Community (ASC). </p>
			</div>	
			<div className="h-1/2 bg-putih flex flex-col justify-evenly items-center">	
				<p className="py-5 text-4xl text-ungu-400 font-bold font-sans"> Objectives </p>
				<div className="grid md:grid-cols-3 grid-cols-1 pb-5 md:pb-10">
					<div className="flex flex-col items-center bg-white shadow max-w-max rounded-lg text-center p-4 m-4">
						<LightBulbIcon />
						<p className="text-ungu-200 max-w-xs"> Giving opportunity for undergraduate students across ASEAN to demonstrate their critical thinking skills </p>
				    	</div>
					<div className="flex flex-col items-center bg-white shadow max-w-max rounded-lg text-center p-4 m-4">
						<AcademicCap />
						<p className="text-ungu-200 max-w-xs"> Building the engagement and solidarity of ASEAN communities towards perpetual social issues </p>
				    	</div>
					<div className="flex flex-col items-center bg-white shadow max-w-max rounded-lg text-center p-4 m-4">
						<BookOpen />
						<p className="text-ungu-200 max-w-xs"> Supporting the new generation of policy makers through mentorship </p>
				    	</div>
				</div>
			</div>	
		</div>
        </div>
    )
}
