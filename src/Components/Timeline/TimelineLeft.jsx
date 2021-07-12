import TimelineBox from './TimelineBox'
import TimelineLine from './TimelineLine'

export default function TimelineLeft(props) {
    return(
        <div className="flex flex-row-reverse md:contents">
            <div className="bg-ungu-200 col-start-1 col-end-5 p-4 rounded-xl my-4 md:ml-auto md:mr-0 mr-auto shadow-md">
            <TimelineBox 
                date= {props.date}
                title= {props.title}
                desc= {props.desc}
                leftOrRight = "left"
              />
            </div>
            <TimelineLine />
        </div>
    )
    
}