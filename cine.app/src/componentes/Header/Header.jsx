import Navbar from "../Navbar/Navbar"

function Header() {
    return ( 
        <header className="flex justify-between bg-primary-digolinha text-black p-9 font-bold text-xl">
            <span> <h1>GUIDE FITNESS</h1></span>
           
            <Navbar/>
        </header>
     );
}

export default Header;