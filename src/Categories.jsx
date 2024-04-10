
import Hero from "./assets/hero.webp"

export default function Categories(){
    return(
        
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <div className="categories flex py-4 px-4 gap-20 pl-44  ">
            <div className="grocery cursor-pointer">
            <span className="material-symbols-outlined cursor-pointer">shopping_basket</span>
            <p>grocery</p>
            </div>
            <div className="mobile cursor-pointer">
            <span className="material-symbols-outlined cursor-pointer">smartphone</span>
            <p>mobile</p>
            </div>
            <div className="Fashion cursor-pointer">
            <span className="material-symbols-outlined cursor-pointer">apparel</span>
            <p>Fashion</p>
            </div>
            <div className="Electronics cursor-pointer">
            <span className="material-symbols-outlined cursor-pointer">mobile_friendly</span>
            <p>Electronics</p>
            </div>
            <div className="Appliances cursor-pointer">
            <span className="material-symbols-outlined cursor-pointer" >devices</span>
            <p>Appliances</p>
            </div>
            <div className="Travel cursor-pointer">
            <span className="material-symbols-outlined cursor-pointer">emoji_transportation</span>
            <p>Travel</p>
            </div>
            <div className="Two_wheelers cursor-pointer">
            <span className="material-symbols-outlined cursor-pointer">two_wheeler</span>
            <p>Two wheelers</p>
            </div>
            <div className="Toys cursor-pointer">
            <span className="material-symbols-outlined">smart_toy</span>
            <p>Toys</p>
            </div>
        </div>

        <div>
        <img src={Hero}></img>
        </div>
        </>
    )
}