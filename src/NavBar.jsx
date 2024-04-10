import Logo from "./assets/fkheaderlogo_exploreplus-44005d.svg"
export default function NavBar(){
    return(
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
         <header className="text-gray-600 body-font w-100">
            <div className="container ml-auto flex flex-wrap p-5 flex-col md:flex-row space-x-9 items-center  border-2">
                <a className="flex title-font font-medium items-center cursor-pointer mb-4 ml-16 md:mb-0">
                    
                <img src={Logo}></img>
                </a>
                {/* <div id="header" className=""> */}
                <div id="box" className="items-center ml-2 flex">

                <div id="search" className="flex rounded-xl">
                <span id="search_button" className="material-symbols-outlined cursor-pointer   rounded-md  m-1">search</span>
                <input id="input_search" type="text" className=" w-80 h-10 border-2 p-2 rounded-md border-gray-400  text-black ml-4 placeholder:text-gray-600" placeholder=" Products , Brands and More " />
                </div>
                </div>
                {/* </div> */}

                <div className=" flex justify-end ">

                <div className="flex  justify-end">
                <span className="material-symbols-outlined cursor-pointer"> account_circle</span>
                <p className="cursor-pointer">Profile </p>
                </div>
                    
                <div className="flex pl-3 justify-end  ml-5">
                <span className="material-symbols-outlined cursor-pointer">shopping_cart</span>
                <p className="cursor-pointer">Cart</p>
                </div>
                </div>
                


            </div>
        </header>
   
        </>
    )
}