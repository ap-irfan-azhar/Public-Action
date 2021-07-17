import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSpotify, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return(
        <div className="bg-ungu-400 text-white shadow z-30">
            <div className="md:container-lg mx-auto my-lg grid lg:grid-cols-4 max-w-screen">

                <img src={process.env.PUBLIC_URL + '/images/logo-pa.png'} className="md:w-40 w-1/6 h-auto m-auto pt-5 md:pt-0" alt="Logo PA" />
                <div className="mx-auto md:my-5 my-2 text-sm w-max md:text-justify text-center">
                    <p className="font-semibold text-lg">Public Action 2021</p>
                    <p>Public Policy and Management</p>
                    <p>Faculty Of Social Political Science</p>
                    <p>Universitas Gadjah Mada</p>
                    <p>Jalan Sosio Yustisia, Bulaksumur, Yogyakarta, 55281</p>
                </div>
                <div className="mx-auto my-5 text-sm w-max text-left">
                    <p className="font-semibold text-lg text-center">Social Media</p>
                    <a  className="hover:text-ungu-100" href="https://www.instagram.com/publicaction.ugm/"target="_blank"   rel="noreferrer"><p> <FontAwesomeIcon icon={faInstagram} />  publicaction.ugm </p></a>
                    <a  className="hover:text-ungu-100" href="https://www.instagram.com/gamapict/" target="_blank" rel="noreferrer"><p> <FontAwesomeIcon icon={faInstagram} /> gamapict </p></a>
                    <a  className="hover:text-ungu-100" href="https://id.linkedin.com/company/public-action-ugm" target="_blank" rel="noreferrer"><p> <FontAwesomeIcon icon={faLinkedinIn} /> Public Action UGM </p></a>
                    <a  className="hover:text-ungu-100" href="https://bit.ly/PAsPodcast"target="_blank"   rel="noreferrer"><p> <FontAwesomeIcon icon={faSpotify} />  Podcast </p></a>
                </div>
                <div className="mx-auto my-5 text-sm w-max pb-5 text-left">
                    <p className="font-semibold text-lg text-center">External Sites</p>
                    <a className="hover:text-ungu-100 my-3 " href="https://gamapi.fisipol.ugm.ac.id/" target="_blank" rel="noreferrer"> Gamapi</a>
                    <br />
                    <a className="hover:text-ungu-100 my-3" href="https://mkp.fisipol.ugm.ac.id/en/" target="_blank" rel="noreferrer"> Public Policy and Management </a>
                    
                    <div className="mx-auto my-5 text-sm w-max pb-5 text-left">
                        <p className="font-semibold text-lg text-center">Contact Us</p>
                        <a href="mailto:publicaction-mkp.fisipol@ugm.ac.id" target="_blank" rel="noreferrer">
                        <p className="hover:text-ungu-100"><FontAwesomeIcon icon={faEnvelope} /> publicaction-mkp.fisipol@ugm.ac.id</p>
                        </a>
                    </div>
                </div>

            </div>
            <a href="mailto:muhammad.irfan.azhar@mail.ugm.ac.id" target="_blank" rel="noreferrer"><p className="w-max mx-auto my-5">&copy; 2021</p></a>
        </div>
    )
}
