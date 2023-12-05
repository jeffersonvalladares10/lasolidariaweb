import lasolidariaLogo from "../../assets/lasolidariaLogo.png"
import Navigation from "./navigation/Navigation"
import Control from "./access/Control"
import { NavLink } from "react-router-dom"


function Header() {
    return (
        <div className="flex justify-around items-center m-4">
            <NavLink to="/">
                <div className="flex flex-row justify-between items-center gap-2">
                    <img 
                        src={lasolidariaLogo}
                        alt='lasolidariaLogo'
                        className=""
                    />
                    <h1 className="text-zinc-700 text-2xl font-extralight font-['Poiret One']">
                        lasolidaria
                    </h1>
                </div>
            </NavLink>
            
            <Navigation />

            
            <Control />
        </div>
    )
}

export default Header