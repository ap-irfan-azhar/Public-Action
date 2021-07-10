export default function SideEvent(props) {
    return(
        <div className="md:w-80 w-96 mx-auto mb-12 lg:mb-4">
        <div 
            className="relative bg-cover md:h-44 h-52 my-5 m-5 border-r-4 border-b-4 border-ungu-300 rounded-2xl shadow-lg" 
            style={{ backgroundImage: `url("https://imgdb.in/iMBs.jpg")` }}>
            <p className="absolute top-16 text-lg text-white font-serif font-semibold text-center z-10 mx-2">{props.title}</p>
            <div
                className="bg-ungu-300 absolute top-0 left-0 w-full h-full opacity-30 rounded-lg"
            />
        </div>
        <p className="font-semibold text-ungu-300 text-justify">{props.desc}</p>
       
    </div>
    )    
}