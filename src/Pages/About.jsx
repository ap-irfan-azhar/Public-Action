import {Object1, Group2} from "../Ornaments/Ornaments"

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
                    <p className="my-5 z-20">Public Action is an annual event organized by students of the Department of Public Policy and Management in the Faculty of Social and Political Sciences, Universitas Gadjah Mada. This event is aimed to build awareness toward public issues in engaging ways.</p>
                    <p className="my-5 z-20">The grand theme of Public Action 2021 is “Innovative Youths in Action: Emphasizing Public Value in Addressing Perpetual Social Issues”. The ASEAN communities have been struggling with a myriad of perpetual social issues. The ASEAN Pillars are also derived from the actual problems that are faced by the society and become concerns among ASEAN member states. Hence, policies and projects intended to solve the concerns of these pillars must include public values—philosophy that puts emphasis on the public interest—as the main foundation. Public Action intends to make impacts to society by emphasizing on the public value in every event conducted. </p>
                    <p className="my-5 z-20">ASEAN Innovative Policy Competition (AIPC) is focused on the three pillars of ASEAN: Political-Security Community (APC), Economic Community (AEC), and Socio-Cultural Community (ASC). By involving youths and experts from different countries, we hope to broaden the perspectives in solving the aforementioned issues. Thus, we also intend to involve local communities in Public Action’s side events, such as micro, small and medium enterprises (MSMEs), street performers, and underprivileged children. Public Action is expected to be enjoyed by various groups of people, from the locals to ASEAN communities.</p>
                </div>
                <div className="absolute -right-32 -bottom-28 transform z-0 transform rotate-90">
                    <Object1 />
                </div>



            </div>
        </div>
    )
}