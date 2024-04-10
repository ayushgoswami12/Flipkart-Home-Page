import Offer1 from "./assets/offer1.webp";
import Offer2 from "./assets/offer2.webp";
import Offer3 from "./assets/offer3.webp";
import Offer4 from "./assets/offer4.webp";
import Offer5 from "./assets/offer5.webp";
import Offer6 from "./assets/offer6.webp";

export default function Offers(){
    return(
        <>
            <div className="offers flex flex-wrap  m-w-72">
                <div  className=" h-auto offer">
                    <img className="" src={Offer1}></img>
                </div>
                <div className="offer">
                    <img src={Offer2}></img>
                </div>
                <div className="offer">
                    <img src={Offer3}></img>
                </div>
                <div className="offer">
                    <img src={Offer4}></img>
                </div>
                <div className="offer" >
                    <img src={Offer5}></img>
                </div>
                <div className="offer">
                    <img src={Offer6}></img>
                </div>



            </div>
        </>
    )
}