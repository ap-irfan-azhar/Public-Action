import { Helmet } from 'react-helmet'
export default function Guidebook(){
    return(
        <div className="block h-screen w-screen bg-putih text-5xl text-center font-serif">
            <Helmet>
				<title>Guidebook</title>
				<meta name="description" content="Public Action 2021 Guidebook"></meta>
				<meta name="keywords" content="Public Action, UGM, Public policy, public management, competition, guidebook"></meta>
			</Helmet>    
            <p className="py-40">
                Nanti Booklet lomba di-<i>embed</i> di laman ini
            </p>
        </div>
    )
}