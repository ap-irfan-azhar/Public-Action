export default function TimelineLine(props) {
    return(
        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-oren pointer-events-none" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-500 shadow" />
        </div>
    )
    
}