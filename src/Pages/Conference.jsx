import {Object2, Object1} from "../Ornaments/Ornaments"

export default function Conference() {
    return(
        <div className="overflow-hidden">
            <div className="bg-putih">
                    <div className="relative md:px-32 pt-10 ">
                        <h1 className="text-5xl font-bold font-serif text-ungu-300 text-center mb-12">Conferences</h1>

                        <div className="pb-20">
                            <div className="md:flex items-center md:my-5 md:mb-8 mb-20">
                                <img className="z-20 h-48 md:h-60 mx-auto border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg" src="https://cdn.pixabay.com/photo/2013/02/20/01/04/meeting-83519_960_720.jpg" alt="" />
                                <div className=" m-5 text-ungu-300">
                                        <p className="text-4xl font-serif font-bold md:text-left text-center">AIPC Conference</p>
                                        <p className="text-justify font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dolor sit amet nibh pellentesque porttitor id rutrum tortor. Ut ut convallis sem, ac scelerisque urna. In ligula leo, luctus sed ligula id, pretium efficitur urna. Pellentesque ex risus, cursus ut neque sed, congue elementum turpis.</p>
                                </div>

                            </div>

                            <div className="md:flex items-center md:my-5 md:mt-8 mt-20 mb-20">
                                <img className="z-20 order-last h-48 md:h-60 mx-auto border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg" src="https://cdn.pixabay.com/photo/2013/02/20/01/04/meeting-83519_960_720.jpg" alt="" />
                                <div className=" m-5 text-ungu-300">
                                        <p className="text-4xl font-serif font-bold md:text-right text-center">Public Action Conference</p>
                                        <p className="text-justify font-semibold ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dolor sit amet nibh pellentesque porttitor id rutrum tortor. Ut ut convallis sem, ac scelerisque urna. In ligula leo, luctus sed ligula id, pretium efficitur urna. Pellentesque ex risus, cursus ut neque sed, congue elementum turpis.</p>
                                </div>

                            </div>
                        </div>


                        <div className="absolute hidden md:block -top-32 -right-72">
                            <Object2 />
                        </div>
                        <div className="hidden md:block absolute -top-12 -left-20">
                            <Object1 />
                        </div>
                        <div className="absolute md:hidden -right-32 -bottom-16 transform -rotate-12 z-0">
                            <Object1 />
                        </div>
                        <div className="absolute bg-ungu-300 w-screen h-12 left-0 bottom-0"/>
                    </div>
            </div>
        </div>
    )
}
