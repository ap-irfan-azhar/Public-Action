import TimelineLeft from './TimelineLeft'
import TimelineRight from './TimelineRight'

export default function Timeline(){
    return(
    <div className="container mx-auto pb-14">
        <p className="text-center text-5xl font-bold text-ungu-400 p-12">Timeline</p>
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-gray-100">

          <TimelineLeft 
            date= "July 14 - August 14"
            title= "Call for Abstracts"
          />

          <TimelineRight
            date= "August 15 - 31 "
            title= "Administrative Selection"
          />
          <TimelineLeft
            date= "September 11 "
            title= "Announcement of Preliminary Round Winners"
          />
          <TimelineRight
            date= "September 11"
            title= "Re-registration Period & Technical Meeting"
          />
          <TimelineLeft
            date= "September 11"
            title= "AIPC Conference"
          />
          <TimelineRight
            date= "September 13 - 27"
            title= "Mentoring Period"
          />
          <TimelineLeft
            date= "September 30"
            title= "Full Paper Submission Deadline"
          />
          <TimelineRight
            date= "October 2"
            title= "Pitching"
          />
          <TimelineLeft
            date= "October 9"
            title= "Public Action Conference"
          />
          <TimelineRight
            date= "October 9"
            title= "Winner Announcement"
          />
        </div>
      </div>
    )
}