import Countdown from "../Components/Countdown/Countdown"

export default function RegistConference() {
    return(
        <div className="overflow-hidden">
            <div className="h-screen bg-gray-900 md:px-16">
                <h1 className="text-center text-4xl font-bold font-serif text-white py-20"> Registration will open in</h1>
                <Countdown 
                    date= "aug 18, 2021 13:00:00"
                />

            </div>

        </div>
    )
}