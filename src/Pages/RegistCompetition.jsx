import { Helmet } from "react-helmet";
export default function Registration() {
  let openRegistDate = new Date(
    new Date("aug 28, 2021 23:59:59").toLocaleString("en-US", {
      timeZone: "utc",
    })
  ).getTime();
  let now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "utc" })
  ).getTime();
  let distance = openRegistDate - now;

  if (distance > 0) {
    return (
      <div
        className="relative h-screen z-0"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/svg/floating-cogs.svg)`,
        }}
      >
        <Helmet>
          <title>AIPC Registration</title>
          <meta
            name="description"
            content="ASEAN Innovative Policy Competition registration"
          ></meta>
          <meta
            name="keywords"
            content="Public Action, UGM, Public policy, public management, competition, guidebook"
          ></meta>
        </Helmet>
        <p className="absolute md:text-7xl text-5xl md:tracking-widest font-bold font-serif text-ungu-200 inset-y-1/3 w-screen left-0 text-center">
          Loading...
        </p>
        <iframe
          title="Competition Registration Form"
          className="airtable-embed w-screen h-screen border-1 absolute"
          src="https://airtable.com/embed/shro2LlBCvmh2bcPg?backgroundColor=orange"
        />
      </div>
    );
  } else {
    return (
      <div className="h-screen bg-putih md:px-16">
        <Helmet>
          <title>AIPC Registration</title>
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
          AIPC Registration Closed
        </h1>
      </div>
    );
  }
}
