import {Object2, Object1} from "../Ornaments/Ornaments"

export default function Conference() {
    return(
        <div className="overflow-hidden">
            <div className="bg-putih">
                    <div className="relative md:px-32 pt-10 bg-transparant">
                        <h1 className="text-5xl font-bold font-serif text-ungu-300 text-center mb-12 relative z-10">Conferences</h1>

                        <div className="pb-20 relative z-10">
                            <div className="md:flex items-center md:my-5 md:mb-8 mb-20">
                                <img className="h-48 md:h-60 mx-auto border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg" src={`${process.env.PUBLIC_URL}/images/events/event-6.jpeg`} alt="" />
                                <div className=" m-5 text-ungu-300">
                                        <p className="text-4xl font-serif font-bold md:text-left text-center">AIPC Conference</p>
                                        <p className="text-justify font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dolor sit amet nibh pellentesque porttitor id rutrum tortor. Ut ut convallis sem, ac scelerisque urna. In ligula leo, luctus sed ligula id, pretium efficitur urna. Pellentesque ex risus, cursus ut neque sed, congue elementum turpis.</p>
                                </div>

                            </div>

                            <div className="md:flex items-center md:my-5 md:mt-8 mt-20 mb-20">
                                <img className="order-last h-48 md:h-60 mx-auto border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg" src={`${process.env.PUBLIC_URL}/images/events/event-2.jpeg`} alt="" />
                                <div className=" m-5 text-ungu-300">
                                        <p className="text-4xl font-serif font-bold md:text-right text-center">Public Action Conference</p>
                                        <p className="text-justify font-semibold z-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dolor sit amet nibh pellentesque porttitor id rutrum tortor. Ut ut convallis sem, ac scelerisque urna. In ligula leo, luctus sed ligula id, pretium efficitur urna. Pellentesque ex risus, cursus ut neque sed, congue elementum turpis.</p>
                                </div>

                            </div>
                        </div>


                        <div className="absolute md:-top-32 top-44 md:-right-72 -right-96 opacity-75 z-0 transform -rotate-45">
                            <Object2 size="1000"/>
                        </div>
                        <div className="hidden md:block absolute -top-12 -left-20">
                            <Object1 width="500" />
                        </div>
                        <div className="absolute hidden -right-32 -bottom-16 transform -rotate-12 z-0">
                            <Object1 width="500" />
                        </div>
                        <div className="absolute bg-ungu-300 w-screen h-12 left-0 bottom-0"/>
                    </div>
            </div>
        </div>
    )
}
