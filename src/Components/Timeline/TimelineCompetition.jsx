import TimelineLeft from './TimelineLeft'
import TimelineRight from './TimelineRight'

export default function Timeline(){
    return(
    <div className="container mx-auto pb-14">
        <p className="text-center text-5xl font-bold text-ungu-400 p-12">Timeline</p>
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-gray-100">

          <TimelineLeft 
            date= "19 July - 19 August"
            title= "Call for Abstracts"
          />

          <TimelineRight
            date= "August 20 - 31 "
            title= "Administrative Selection"
          />
          <TimelineLeft
            date= "September 11 "
            title= "AIPC Conference, Announcement of Preliminary Round Winners, and Technical Meeting"
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
            title= "Public Action Conference and Winners Announcement"
          />
        </div>
      </div>
    )
}