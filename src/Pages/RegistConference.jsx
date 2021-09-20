import { Helmet } from 'react-helmet'
export default function RegistConference() {
    return(
        <div className="h-screen bg-putih" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/svg/jigsaw.svg)`}}>
            <Helmet>
				<title>Conferences Registration</title>
				<meta name="description" content="Public Action Conferences and AIPC Conference Registration"></meta>
				<meta name="keywords" content="Public Action, UGM, Public policy, public management, conferences"></meta>
			</Helmet>
            <iframe title="conference registration form" src="https://docs.google.com/forms/d/e/1FAIpQLScsqeMumYHate9ldJ3gyQqN-r2SKfY-cGzHqVCp7oZEX59YgA/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    )
}