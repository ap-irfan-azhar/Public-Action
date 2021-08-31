import { Helmet } from "react-helmet";
export default function AbstractSubmission() {
  let openRegistDate = new Date(
    new Date("aug 30, 2021 23:59:59").toLocaleString("en-US", {
      timeZone: "utc",
    })
  ).getTime();
  let now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "utc" })
  ).getTime();
  let distance = openRegistDate - now;
  if (distance > 0) {
    return (
      <div>
        <Helmet>
          <title>Abstract Submission</title>
          <meta
            name="description"
            content="ASEAN Innovative Policy Competition 2021 (AIPC) Abstract Submission"
          ></meta>
          <meta
            name="keywords"
            content="Public Action, UGM, Public policy, public management, competition"
          ></meta>
        </Helmet>
        <iframe
          title="Abstract SubmissionForm"
          className="airtable-embed w-screen h-screen border-1"
          src="https://airtable.com/embed/shresndbZETkzqsTw?backgroundColor=orange"
        />
      </div>
    );
  } else {
    return (
      <div className="h-screen bg-putih md:px-16">
        <Helmet>
          <title>AIPC Abstract Submission</title>
          <meta
            name="description"
            content="ASEAN Innovative Policy Competition registration"
          ></meta>
          <meta
            name="keywords"
            content="Public Action, UGM, Public policy, public management, competition, guidebook"
          ></meta>
        </Helmet>
        <h1 className="absolute md:text-7xl text-5xl font-bold font-serif text-ungu-200 inset-y-1/3 w-screen left-0 text-center">
          AIPC Abstract Submission Closed
        </h1>
      </div>
    );
  }
}
