import Countdown from "../Components/Countdown/Countdown";

export default function Registration () {
    let openRegistDate = new Date(new Date("jul 15, 2021 00:00:00").toLocaleString("en-US", {timeZone: "utc"})).getTime();
    let now = new Date(new Date().toLocaleString("en-US", {timeZone: "utc"})).getTime();
    let distance = openRegistDate - now;

    if (distance > 0){
        return(
            <div className="h-screen bg-putih md:px-16">
                <h1 className="text-center text-4xl font-bold font-serif text-ungu-400 mt-20 mb-16">AIPC Registration will be open in</h1>
                <Countdown
                    isDark={false}
                    date= "jul 19, 2021 00:00:00"
                />

            </div>
        )
    } else{
        return(
            <iframe 
                title="Competition Registration Form"
                className="airtable-embed w-screen h-screen border-1" 
                src="https://airtable.com/embed/shro2LlBCvmh2bcPg?backgroundColor=orange" 
            />
        )        
    }
}
