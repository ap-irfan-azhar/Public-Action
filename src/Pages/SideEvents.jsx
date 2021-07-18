import {Object1} from "../Ornaments/Ornaments"
import SideEvent from "../Components/Events/SideEvent"
import { Helmet } from 'react-helmet'

export default function SideEvents() {
    return(
        <div className="overflow-hidden">
            <Helmet>
				<title>Side Events</title>
				<meta name="description" content="Side Events of Public Action 2021"></meta>
				<meta name="keywords" content="Public Action, UGM, Public policy, public management, competition"></meta>
			</Helmet>
            <div className="bg-putih z-0 relative md:pt-5 pt-16 pb-28 md:px-10 px-5 min-h-screen">
                <h1 className="text-5xl text-ungu-300 text-center font-serif font-bold py-5 z-20">Side Events</h1>
                <div className="lg:flex lg:justify-evenly z-20">
                    <SideEvent 
                        title="Impresioned Prespective of Local's Creations: A Breaktrough"
                        img="1"
                    />                 

                    <SideEvent 
                        title="Hum of The City: Yogyakarta’s Obscured Remedy"
                        img="2"
                    />

                    <SideEvent 
                        title="Children’s Midsummer Night’s Dream"
                        img="3"
                    />

                </div>
                <p className="text-ungu-300 text-7xl md:tracking-widest my-12 text-center font-serif font-semibold">Coming Soon</p>
                <div className="absolute -z-10 md:w-60 md:h-60 w-40 h-40 bg-gradient-to-br from-ungu-100 to-ungu-400 rounded-full md:-top-10 top-28 md:-right-24 -right-20" > </div>
                <div className="absolute -z-10 md:w-24 md:h-24 w-20 h-20 bg-gradient-to-br from-ungu-300 to-ungu-400 rounded-full md:top-10 top-4 md:-left-8 -left-6 transform rotate-45" > </div>
                <div className="absolute -z-10 md:w-10 md:h-10 w-8 h-8 bg-gradient-to-br from-ungu-400 via-ungu-300 to-oren rounded-full inset-y-1/2 right-10 transform -rotate-45 hidden md:block" > </div>
                <div className="absolute -bottom-16 -left-32 -z-10 transform rotate-12">
                    <Object1 width="450" />
                </div>
                <div className="absolute bg-putih bg-opacity-50 top-0 left-0 w-full h-full -z-20"></div>
            </div>

        </div>
    )
}
