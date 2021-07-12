import TimelineBox from './TimelineBox'
import TimelineLine from './TimelineLine'

export default function TimelineRight(props) {
    return(
        <div className="flex md:contents">
            <TimelineLine />
            <div className="bg-ungu-300 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <TimelineBox 
                date= {props.date}
                title= {props.title}
                desc= {props.desc}
                leftOrRight= "right"
              />
            </div>
          </div>
    )
    
}