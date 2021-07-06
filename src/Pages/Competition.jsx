import {Object2, Object1} from "../Ornaments/Ornaments"

export default function Competition () {
    return(
        <div className="overflow-hidden">
            <div className="h-screen bg-putih bg-opacity-10 bg-cover" style={{ backgroundImage: `url("https://images.unsplash.com/23/black-white-city.JPG?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80")` }}>
                    <div className="h-screen relative z-0 md:px-32 pt-10 flex flex-col md:flex-row items-center">
                        <img className="z-20 h-48 md:h-60 m-5 border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg" alt="" />
                        <div className="z-20 m-5 text-ungu-300">
                                <p className="text-4xl font-serif font-bold">ASEAN Innovative Policy Competition (AIPC)</p>
                                <p className="font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dolor sit amet nibh pellentesque porttitor id rutrum tortor. Ut ut convallis sem, ac scelerisque urna. In ligula leo, luctus sed ligula id, pretium efficitur urna. Pellentesque ex risus, cursus ut neque sed, congue elementum turpis.</p>
                        </div>
                        <div className="absolute hidden md:block -top-32 -left-72 z-0">
                            <Object2 />
                        </div>
                        <div className="z-0 hidden md:block absolute -top-12 -right-20">
                            <Object1 />
                        </div>
                        <div className="absolute -right-32 -bottom-16 transform -rotate-12 z-10">
                            <Object1 />
                        </div>
                        <div className="absolute bg-ungu-200 w-screen h-12 left-0 bottom-0"/>
                        <div className="absolute bg-putih bg-opacity-50 top-0 left-0 w-full h-full -z-20"></div>
                    </div>
            </div>
        </div>
    )
}