import CameraImg from "./assets/camera.webp"
import Trimmer from "./assets/philips-s1323-45-s1323-45-original-imafrexdfjz62s4h.webp"
import Printer from "./assets/printer.webp"
import Telivison from "./assets/tv.webp"
import Keyboard from "./assets/keyboard.webp"



export default function Appliances(){
    return(
        <>

        <div className="appliances">
        {/* <h1>sffd</h1> */}

            <div className="best_for_electronics 0  ">
            
                <div className="items-1  item w-72">
                <img src={CameraImg}></img>
                <h3>Explore Camera</h3>
                </div>
                <div className="items-2 item  w-72">
                <img className="h-52   " src={Trimmer}></img>
                <h3>Explore Trimmers</h3>

                </div>
                <div className="items-3 item w-72">
                <img className="flex pt-4" src={Printer}></img>
                <h3>Explore Printers</h3>

                </div>
                <div className="items-4 item w-72">
                <img src={Telivison}></img>
                <h3>Explore Telivison</h3>

                </div>
                <div className="items-5 item w-72">
                <img src={Keyboard}></img>
                <h3>Explore Keyboard</h3>

                </div>
            </div>
        </div>
        </>
    )
}