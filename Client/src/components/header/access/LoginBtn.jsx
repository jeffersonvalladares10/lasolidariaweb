import { Button } from "primereact/button"
import { NavLink } from "react-router-dom"


function LoginBtn() {
    return (
        <>
            <NavLink to="/login">
                <Button label="INICIAR SESION" className="font-['Poiret One'] font-thin text-rose-400 text-sm border-1 border-rose-400 rounded-xl shadow-md px-4 py-2" />
            </NavLink> 
        </>
    )
}

export default LoginBtn