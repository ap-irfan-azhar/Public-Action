import { Helmet } from "react-helmet"
export default function AbstractSubmission () {
    return(
        <div>
            <Helmet>
				<title>Abstract Submission</title>
				<meta name="description" content="ASEAN Innovative Policy Competition 2021 (AIPC) Abstract Submission"></meta>
				<meta name="keywords" content="Public Action, UGM, Public policy, public management, competition"></meta>
			</Helmet>
            <iframe 
                title="Abstract SubmissionForm"
                className="airtable-embed w-screen h-screen border-1" 
                src="https://airtable.com/embed/shresndbZETkzqsTw?backgroundColor=orange" 
            />
        </div>
    )
}
