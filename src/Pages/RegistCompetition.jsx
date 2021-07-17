export default function Registration () {
    let openRegistDate = new Date(new Date("aug 19, 2021 23:59:59").toLocaleString("en-US", {timeZone: "utc"})).getTime();
    let now = new Date(new Date().toLocaleString("en-US", {timeZone: "utc"})).getTime();
    let distance = openRegistDate - now;

    if (distance > 0){
        return(
            <div className="relative h-screen z-0" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/svg/floating-cogs.svg)`}}>
                <h1 className="absolute md:text-7xl text-5xl font-bold font-serif text-ungu-200 inset-y-1/3 w-screen left-0 text-center">Loading...</h1>
                <iframe 
                    title="Competition Registration Form"
                    className="airtable-embed w-screen h-screen border-1 absolute" 
                    src="https://airtable.com/embed/shro2LlBCvmh2bcPg?backgroundColor=orange" 
                />

            </div>
        )
    } else{
        return(
            <div className="h-screen bg-putih md:px-16">
                <h1 className="absolute md:text-7xl text-5xl font-bold font-serif text-ungu-200 inset-y-1/3 w-screen left-0 text-center">AIPC Registration Closed</h1>
            </div>
        )        
    }
}
