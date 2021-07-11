import {Link} from 'react-router-dom'
import Countdown from '../Components/Countdown/Countdown'
import {partOf, partners, sponsors} from '../Data/Partners'
import Partner from '../Components/Homepage/Partners/Partner'
import {Object1} from '../Ornaments/Ornaments'

export default function Homepage () {
    return(
		<div className="overflow-hidden text-ungu-400">
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
			<div>
				<div className="relative h-96 flex flex-col justify-center items-center font-sans text-center">
					<p className="font-bold text-4xl mb-10 text-ungu-400 z-20 fonr-serif"> Our Grand Theme </p>
					<p className="text-lg max-w-xl text-ungu-300 z-20"> "Innovative Youths in Action: Emphasizing Public Value in Addressing Perpetual Social Issues” </p>
					<div className="absolute w-56 h-20 -right-8 top-4 rounded-full py-6 bg-ungu-300 z-0"></div>
					<div className="absolute w-56 h-20 -right-16 top-28 rounded-full py-6 bg-ungu-100 z-0"></div>
				</div>
				<div className="h-1/2 bg-ungu-400 my-auto py-8">
					<h2 className="text-center text-4xl font-bold font-serif text-white pt-4"> Registration for AIPC will be open in</h2>
					<Countdown 
						date="jul 18, 2021 13:00:00"
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
			<div className="py-12 md:px-20 px-8">
				<h2 className="text-4xl text-ungu-400 font-serif font-bold text-center my-8">Our Events</h2>
				<div className="md:flex justify-evenly flex-wrap gap-1">
					<Link className="md:w-1/4 w-1/4" to="/events/competition">
						<div 
							className="my-10 h-40 bg-putih rounded text-center bg-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
							style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_960_720.jpg")` }}
						> 
							<div className="text-center font-semibold text-lg py-16">
								ASEAN Innovative Competition (AIPC)
							</div>
						</div>
					</Link>
					<Link className="md:w-1/4 w-1/4" to="/events/conference">
						<div 
							className="my-10 h-40 bg-putih rounded text-center bg-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
							style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg")` }}
						> 
							<div className="text-center font-semibold text-lg py-16 text-putih">
								AIPC Conference, Public Action Conference
							</div>
						</div>
					</Link>
					<Link className="md:w-1/4 w-1/4" to="/events/side-events">
						<div 
							className="my-10 h-40 bg-putih rounded text-center bg-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
							style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2019/06/13/16/06/dance-4271941_960_720.jpg")` }}
						> 
							<div className="text-center font-semibold text-lg py-16">
								Imprisoned Perspective of Local's Creations: A Breakthrough
							</div>
						</div>
					</Link>
					<Link className="md:w-1/4 w-1/4" to="/events/side-events">
						<div 
							className="my-10 h-40 bg-putih rounded text-center bg-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
							style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2019/06/13/16/06/dance-4271941_960_720.jpg")` }}
						> 
							<div className="text-center font-semibold text-lg py-16">
								Hum of The City:  Yogyakarta's Obscured Remedy
							</div>
						</div>
					</Link>
					<Link className="md:w-1/4 w-1/4" to="/events/side-events">
						<div 
							className="my-10 h-40 bg-putih rounded text-center bg-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
							style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2019/06/13/16/06/dance-4271941_960_720.jpg")` }}
						> 
							<div className="text-center font-semibold text-lg py-16">
								Children's Midsummer Night's Dream
							</div>
						</div>
					</Link>
				</div>
			</div>


			
			<div className="bg-putih py-16 px-12 md:px-16" id="partners">
				<p className="text-ungu-400 font-bold text-5xl text-center mb-12 font-serif">Partners</p>

				<p className="text-ungu-400 font-semibold- text-4xl text-center mb-4">Subjudul</p>
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