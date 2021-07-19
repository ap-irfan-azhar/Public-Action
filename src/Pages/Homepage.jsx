import Countdown from '../Components/Countdown/Countdown'
import {partOf, mediaPartners, sponsors} from '../Data/Partners'
import Partner from '../Components/Homepage/Partners/Partner'
import {Object1} from '../Ornaments/Ornaments'
import Event from '../Components/Homepage/Event'
import { Helmet } from 'react-helmet'

export default function Homepage () {
    return(
		<div className="overflow-hidden text-ungu-400 bg-white">
			<Helmet>
				<title>Public Action 2021</title>
				<meta name="description" content="Public Action UGM 2021"></meta>
				<meta name="keywords" content="Public Action, UGM, Public policy, public management"></meta>
			</Helmet>
			<div className="h-screen overflow-hidden bg-putih flex items-center relative">
				<div className="mx-auto z-40 relative z-10">
					<h1 className="text-ungu-200 text-6xl md:text-7xl font-serif font-black text-center"> Welcome to </h1>	
					<img src={process.env.PUBLIC_URL + 'images/logo-pa-icon.png'} alt="logo public action" className="h-96 mx-auto " />
				</div>
				<div style={{backgroundImage: `url(${process.env.PUBLIC_URL}/svg/pattern1.svg)`}} className="absolute z-0 w-full h-full opacity-50"></div>
				<div className="absolute z-10 md:w-80 md:h-80 w-52 h-52 bg-gradient-to-br from-ungu-100 to-ungu-400 rounded-full -top-20 md:-left-12 -left-20" > </div>
				<div className="absolute hidden md:block z-10 md:w-52 md:h-80 w-44 h-64 bg-ungu-200 opacity-75 rounded-full -top-20 -right-16" > </div>
				<div className="absolute hidden md:block z-10 md:w-72 md:h-56 w-56 h-52 bg-ungu-200 opacity-75 py-2 rounded-full md:top-20 -top-10 -right-24" > </div>
				<div className=" md:hidden absolute -bottom-12 -right-36 transform rotate-90">
					<Object1 width="400"/>
				</div>
        
			</div>
			<div>
				<div className="relative h-96 flex flex-col justify-center items-center font-sans text-center bg-contain md:bg-auto bg-opacity-35" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/svg/topography.svg)`}}>
					<p className="font-bold text-4xl mb-10 text-ungu-400 z-20 font-serif"> Our Grand Theme </p>
					<p className="text-lg max-w-xl text-ungu-300 z-20 font-semibold px-2"> "Innovative Youths in Action: Emphasizing Public Value in Addressing Perpetual Social Issues” </p>
					<div className="absolute w-56 h-20 -right-8 top-4 rounded-full py-6 bg-ungu-300 z-0"></div>
					<div className="absolute w-56 h-20 -right-16 top-28 rounded-full py-6 bg-ungu-100 z-0"></div>
				</div>
				<div className="h-1/2 bg-ungu-400 my-auto pt-8 pb-12">
					<h2 className="text-center text-4xl font-bold font-serif text-white pt-4 mb-12 md:mb-0"> Registration for AIPC will be closed in</h2>
					<Countdown
						isDark={true} 
						date="aug 14, 2021 23:59:59"
					/>
				</div>
			</div>
			<div className="bg-ungu-100 justify-center py-5">
				<h2 className="text-4xl text-ungu-400 font-bold text-center mb-5 font-serif">Our Pre-Event Projects </h2>
				<iframe 
					className="mx-auto md:w-3/4 w-full px-4 mb-5"
					title="episode 1" 
					src="https://open.spotify.com/embed/episode/0cyIp7sHbvs22mDpRChfXb" 
					height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media">
				</iframe>

				<iframe 
					className="mx-auto md:w-3/4 w-full px-4 mb-5 shaddown-lg"
					title="episode 2"
					src="https://open.spotify.com/embed/episode/5rejGQ5egtbIj2wdpfyIUj" 
					height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media">

				</iframe>
			</div>
			<div className="py-12 md:px-20 px-8 bg-opacity-50" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/svg/pattern2.svg)`}}>
				<h2 className="text-4xl text-ungu-400 font-serif font-bold text-center my-8">Our Events</h2>
				<div className="md:flex justify-evenly flex-wrap gap-1 text-putih">
					<Event 
						title= "ASEAN Innovative Competition (AIPC)"
						img= "1"
						teksGelap="true"
						to="competition"
					/>
					<Event 
						title= "AIPC Conference & Public Action Conference"
						img= "2"
						to="conferences"
					/>
					<Event 
						title= "Imprisoned Perspective of Local's Creations: A Breakthrough"
						img= "4"
						to="side-events"
					/>
					<Event 
						title= "Hum of The City:  Yogyakarta's Obscured Remedy"
						img= "3"
						teksGelap="true"
						to="side-events"
					/>
					<Event 
						title= "Children's Midsummer Night's Dream"
						img= "5"
						to="side-events"
					/>
				</div>
			</div>


			
			<div className="bg-putih py-16 px-12 md:px-16" id="partners">

				<div className="my-5 md:mx-16 mx-0">
					<p className="text-ungu-400 font-bold text-4xl text-center mb-6 font-serif">Part of</p>
					<div className="flex flex-wrap justify-evenly gap-3 items-center mb-32">
						{partOf.map((partOf) => 
							<Partner 
								name={partOf.name}
								img={partOf.img}
								width={partOf.widht}
								height={partOf.height}
							/>
						)}
					</div>
				</div>
				
				<div className="my-5 md:mx-16">
					<p className="text-ungu-400 font-bold text-4xl text-center mb-6 font-serif">Sponsors</p>
					<div className="flex flex-wrap justify-center gap-3 mb-20">
						{sponsors.map((sponsor) => 
							<Partner 
								name={sponsor.name}
								img={sponsor.img}
								width={sponsor.widht}
								height={sponsor.height}
							/>
						)}
					</div>

				</div>

				<div className="my-5 md:mx-16">
					<p className="text-ungu-400 font-bold text-4xl text-center mb-6 font-serif">Media Partners</p>
					<div className="flex flex-wrap justify-evenly gap-3 align-middle">
						{mediaPartners.map((mediaPartner) => 
							<Partner 
								name={mediaPartner.name}
								img={mediaPartner.img}
								width={mediaPartner.widht}
								height={mediaPartner.height}
								text={mediaPartner.text}
							/>
							)}
					</div>

				</div>
				
				


				
			</div>
    </div>
  )
}