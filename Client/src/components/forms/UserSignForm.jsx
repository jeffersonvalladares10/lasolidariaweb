import { Button } from "primereact/button"
import { NavLink } from "react-router-dom"
import googleLogo from "../../assets/google.png"


function UserSignForm() {
    return (
        <>
            <div className="flex justify-center items-center bg-white rounded-full shadow-lg py-2 my-4">
                <img 
                    src={googleLogo}
                    alt="Google Logo"
                    className="w-2 h-auto"
                />
                <p className="font-['Poiret One] font-xs font-light text-zinc-700 uppercase">
                    CREAR CUENTA
                </p>
            </div>

            <div className="flex-col text-center">
                <p className="text-zinc-700 text-base font-light font-['Poiret One']">
                    ¿Aún no tienes una cuenta?
                </p>
                <NavLink to="/signup"> 
                    <Button label="Crea una" className="font-['Poiret One'] font-thin text-rose-400 text-lg underline uppercase" link />
                </NavLink>
            </div>
        </>
    )
}

export default UserSignForm