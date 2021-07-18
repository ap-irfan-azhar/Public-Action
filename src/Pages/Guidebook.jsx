import { Helmet } from 'react-helmet'
export default function Guidebook(){
    return(
        <div className="block h-screen w-screen bg-putih text-5xl text-center font-serif">
            <Helmet>
				<title>Guidebook</title>
				<meta name="description" content="Public Action 2021 Guidebook"></meta>
				<meta name="keywords" content="Public Action, UGM, Public policy, public management, competition, guidebook"></meta>
			</Helmet>    
            <iframe
                title="Abstract Guidebook Public Action 2021" 
                src="https://drive.google.com/file/d/1wyn5_ERawyK90Y13EWb7faWZ43ZRDEmA/preview" 
                className="w-screen h-screen"
            />
        </div>
    )
}