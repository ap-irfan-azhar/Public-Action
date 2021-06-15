import TimelineLeft from './TimelineLeft'
import TimelineRight from './TimelineRight'

export default function Timeline(){
    return(
    <div className="container mx-auto pb-14">
        <p className="text-center text-5xl font-bold text-ungu-400 p-12">Timeline</p>
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-gray-100">

          <TimelineLeft 
            date= "18 Sep 2020"
            title= "Ulang Tahun Irfan"
            desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
          
          <TimelineRight 
            date= "18 Sep 2020"
            title= "Ulang Tahun Irfan"
            desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />

          <TimelineLeft 
            date= "18 Sep 2020"
            title= "Ulang Tahun Irfan"
            desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
          
          <TimelineRight 
            date= "18 Sep 2020"
            title= "Ulang Tahun Irfan"
            desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />

        </div>
      </div>
    )
}