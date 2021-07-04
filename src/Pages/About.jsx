import {Object1, Group2} from "../Ornaments/Ornaments"

export default function About () {
    return(
        <div className="overflow-hidden">
            <div className="min-h-screen bg-putih relative">
                <div className="m-auto w-3/4 text-ungu-300 py-10 text-justify text-lg">
                    <div className="flex mx-auto justify-center">
                        <Group2 />
                        <h1 className=" text-center text-4xl font-bold font-serif mx-4">About</h1>
                        <Group2 />
                    </div>
                    <p className="my-5 z-20"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl purus, pellentesque eu malesuada eu, maximus maximus mauris. Aliquam eu lacinia mauris. In in ipsum mi. Aenean eu elit et augue tristique lobortis eu in mi. Phasellus feugiat quam eget pretium cursus.</p>
                    <p className="my-5 z-20">Nulla et leo viverra, faucibus libero at, venenatis elit. Nunc efficitur bibendum placerat. Suspendisse vehicula libero ut nisi posuere, at posuere mi imperdiet. Nullam ipsum metus, faucibus a ullamcorper id, bibendum nec est. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    <p className="my-5 z-20">Etiam ac sapien non tellus sodales elementum. Phasellus semper, leo ac imperdiet consectetur, libero neque convallis leo, vel maximus leo ex a orci. Pellentesque vel nunc turpis. Sed mauris leo, venenatis ac tristique vitae, cursus ac purus.</p>
                </div>
                <div className="absolute -right-32 -bottom-28 transform z-0 transform rotate-90">
                    <Object1 />
                </div>



            </div>
        </div>
    )
}