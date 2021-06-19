export default function TimelineBox(props) {
    return(
        <div>
            <p className={`font-semibold text-xl mb-2 ${props.leftOrRight === "left" && "md:text-right"}`}>{props.date}</p>
            <p className={`leading-tight text-justify font-bold text-2xl mb-1 ${props.leftOrRight === "left" && "md:text-right"}`}>{props.title}</p>
            <p className="leading-tight text-justify"></p>
        </div>
    )
    
}