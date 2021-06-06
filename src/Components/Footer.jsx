export default function Footer() {
    return(
        <div className="bg-blue-900 text-white shadow">
            <div className="md:flex md:justicy-around">
                <img src={process.env.PUBLIC_URL + 'images/logo-pa.png'} className="md:w-1/12 w-1/6 h-auto m-auto pt-5 md:pt-0" alt="Logo PA" />
                <div className="mx-auto my-5 text-sm w-max pb-5 md:pb-0 align-center">
                    <p>Public Action 2021</p>
                    <p>Manajemen dan Kebijakan Publik</p>
                    <p>Fisipol UGM</p>
                    <p>Jalan Sosio Yustisia, Bulaksumur, Yogyakarta, 55281</p>
                </div>

            </div>
            <p className="w-max mx-auto my-5">Copyright &copy; 2021</p>
        </div>
    )
}