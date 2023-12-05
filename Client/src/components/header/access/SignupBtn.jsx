import { Button } from "primereact/button"
import { NavLink } from "react-router-dom"


function SignupBtn() {
    return (
        <>
            <NavLink to="/signup">
                <Button label="CREAR CUENTA" className="font-['Poiret One'] font-thin text-slate-50 text-sm bg-rose-400 rounded-xl shadow-md px-4 py-2" />
            </NavLink>
        </>
    )
}

export default SignupBtn