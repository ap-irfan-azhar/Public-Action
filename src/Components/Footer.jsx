import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return(
        <div className="bg-ungu-400 text-white shadow z-30">
            <div className="container-lg mx-auto my-lg grid lg:grid-cols-4 max-w-screen">

                <img src={process.env.PUBLIC_URL + '/images/logo-pa.png'} className="md:w-24 w-1/6 h-auto m-auto pt-5 md:pt-0" alt="Logo PA" />
                <div className="mx-auto md:my-5 my-2 text-sm w-max md:text-justify text-center">
                    <p className="font-semibold text-lg">Public Action 2021</p>
                    <p>Public Policy and Management</p>
                    <p>Faculty Of Social Political Science</p>
                    <p>Universitas Gadjah Mada</p>
                    <p>Jalan Sosio Yustisia, Bulaksumur, Yogyakarta, 55281</p>
                </div>
                <div className="mx-auto my-5 text-sm w-max text-left">
                    <p className="font-semibold text-lg text-center">Social Media</p>
                    <a  className="text-lg hover:text-ungu-100" href="https://www.instagram.com/publicaction.ugm/"target="_blank"   rel="noreferrer"><p> <FontAwesomeIcon icon={faInstagram} />  publicaction.ugm </p></a>
                    <a  className="text-lg hover:text-ungu-100" href="bit.ly/PAsPodcast"target="_blank"   rel="noreferrer"><p> <FontAwesomeIcon icon={faSpotify} />  Podcast </p></a>
                    <a  className="text-lg hover:text-ungu-100" href="https://www.instagram.com/gamapict/" target="_blank" rel="noreferrer"><p> <FontAwesomeIcon icon={faInstagram} /> gamapict </p></a>
                </div>
                <div className="mx-auto my-5 text-sm w-max pb-5 text-left">
                    <p className="font-semibold text-lg text-center">External Sites</p>
                    <a className="hover:text-ungu-100 " href="https://gamapi.fisipol.ugm.ac.id/" target="_blank" rel="noreferrer"> Gamapi</a>
                    <br />
                    <a className="hover:text-ungu-100" href="https://mkp.fisipol.ugm.ac.id/en/" target="_blank" rel="noreferrer"> Public Policy and Management </a>
                </div>

            </div>
            <p className="w-max mx-auto my-5">&copy; 2021</p>
        </div>
    )
}
