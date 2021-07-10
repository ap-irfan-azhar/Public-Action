import {Object1, Group2, Object2} from "../Ornaments/Ornaments"

export default function About () {
    return(
        <div className="overflow-hidden">
            <div className="min-h-screen bg-putih relative">
                <div className="m-auto md:mx-32 mx-4 text-ungu-300 py-10 text-justify text-lg pb-24 md:pb-0">
                    <div className="flex mx-auto justify-left">
                        <Group2 />
                        <h1 className="text-left text-5xl font-bold font-serif mx-4">About</h1>
                        <Group2 />
                    </div>
                    <p className="my-5 z-20"> Public Action is an annual event held by the students of the Department of Public Policy and Management, Faculty of Social and Political Sciences, Universitas Gadjah Mada. The theme for the Public Action 2021 event is “Innovative Youths in Action: Emphasizing Public Value in Addressing Perpetual Social Issues”. Through this theme, we intend to gather youth across ASEAN with diverse cultural backgrounds who are determined to solve a myriad of contemporary issues.</p>
                    <p className="my-5 z-20">The series of Competition Public Action 2021 events consists of two main events, such as ASEAN Innovative Policy Competition, International Public Action Conference, and the side event namely Public Festival. For the ASEAN Innovative Policy Competition, it consists of three main issues: Sustainable Fashion; Indigenous Peoples Empowerment; and Freedom of Speech and Democracy in the Digital Era.</p>
                </div>
                <div className="absolute -right-32 -bottom-28 transform z-0 transform rotate-90">
                    <Object1 />
                </div>
                <div className="absolute hidden md:block -bottom-3/4 -left-60">
                    <Object2 />
                </div>



            </div>
        </div>
    )
}