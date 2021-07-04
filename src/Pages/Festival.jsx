import {Object1, Object2} from "../Ornaments/Ornaments"

export default function Festival() {
    return(
        <div className="overflow-hidden">
            <div className="bg-cover z-0 relative pt-10 pb-20 md:px-10 px-5" style={{ backgroundImage: `url("https://images.unsplash.com/23/black-white-city.JPG?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80")` }}>
                <h1 className="text-4xl text-ungu-300 text-center font-serif font-bold my-10 z-20">Public Festival</h1>
                <div className="lg:flex lg:justify-evenly z-20">
                    <div className="md:w-1/4 w-3/4 mx-auto mb-12 lg:mb-4">
                        <img className="h-36 mx-auto md:h-44 m-5 border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg" alt="" />
                        <p className="text-2xl text-ungu-300 font-serif font-se,ibold text-left text-justify">Impresioned Prespective of Local's Creations: A Breaktrough</p>
                        <p className="font-semibold text-ungu-300 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dolor sit amet nibh pellentesque porttitor id rutrum tortor. Ut ut convallis sem, ac scelerisque urna. In ligula leo, luctus sed ligula id, pretium efficitur urna. Pellentesque ex risus, cursus ut neque sed, congue elementum turpis.</p>
                    </div>
                    <div className="md:w-1/4 w-3/4 mx-auto mb-12 lg:mb-4">
                        <img className="h-36 mx-auto md:h-44 m-5 border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg" alt="" />
                        <p className="text-2xl text-ungu-300 font-serif font-se,ibold text-left text-justify">Impresioned Prespective of Local's Creations: A Breaktrough</p>
                        <p className="font-semibold text-ungu-300 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dolor sit amet nibh pellentesque porttitor id rutrum tortor. Ut ut convallis sem, ac scelerisque urna. In ligula leo, luctus sed ligula id, pretium efficitur urna. Pellentesque ex risus, cursus ut neque sed, congue elementum turpis.</p>
                    </div>
                    <div className="md:w-1/4 w-3/4 mx-auto mb-12 lg:mb-4">
                        <img className="h-36 mx-auto md:h-44 m-5 border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg" alt="" />
                        <p className="text-2xl text-ungu-300 font-serif font-se,ibold text-left text-justify">Impresioned Prespective of Local's Creations: A Breaktrough</p>
                        <p className="font-semibold text-ungu-300 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dolor sit amet nibh pellentesque porttitor id rutrum tortor. Ut ut convallis sem, ac scelerisque urna. In ligula leo, luctus sed ligula id, pretium efficitur urna. Pellentesque ex risus, cursus ut neque sed, congue elementum turpis.</p>
                    </div>



                </div>
                <div className="absolute -z-10 md:w-60 md:h-60 w-40 h-40 bg-gradient-to-br from-ungu-100 to-ungu-400 rounded-full md:-top-10 -top-8 md:-right-24 -right-20" > </div>
                <div className="absolute -z-10 md:w-24 md:h-24 w-20 h-20 bg-gradient-to-br from-ungu-300 to-ungu-400 rounded-full md:top-10 top-8 md:-left-8 -left-6 transform rotate-45" > </div>
                <div className="absolute -z-10 md:w-10 md:h-10 w-8 h-8 bg-gradient-to-br from-ungu-400 via-ungu-300 to-oren rounded-full inset-y-1/2 right-10 transform -rotate-45 hidden md:block" > </div>
                <div className="absolute md:left-24 left-12 top-28 -z-10">
                    <Object2 />
                </div>
                <div className="absolute -bottom-16 -left-28 -z-10 transform rotate-180">
                    <Object1 />
                </div>
            </div>

        </div>
    )
}
