import Foote from "../components/Footer";
import Form1 from "../components/Login/Form1";
import Navbar2 from "../components/Navbar2/Navbar2";

export default function Login () {
    return(
        <div className="bg-[#CACACA] w-screen h-screen">
            <Navbar2/>
            <div className="flex justify-center   ">
                <Form1/>
            </div>
            <Foote/>
        </div>
    )
}