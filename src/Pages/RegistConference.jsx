import { Helmet } from 'react-helmet'
export default function RegistConference() {
    return(
        <div className="h-screen bg-putih md:px-16" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/svg/jigsaw.svg)`}}>
            <Helmet>
				<title>Conferences Registration</title>
				<meta name="description" content="Public Action Conferences and AIPC Conference Registration"></meta>
				<meta name="keywords" content="Public Action, UGM, Public policy, public management, conferences"></meta>
			</Helmet>
            <h1 className="text-center md:text-7xl text-5xl md:tracking-widest text-ungu-200 font-bold font-serif absolute inset-y-1/3 w-screen left-0 text-center"> Coming Soon</h1>
        </div>
    )
}