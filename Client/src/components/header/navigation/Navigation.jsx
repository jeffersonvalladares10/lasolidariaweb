import { Button } from "primereact/button"
import { NavLink } from "react-router-dom"

function Navigation() {
    return (
        <>
            <nav>
                <ul className="flex flex-row justify-center items-center gap-6">
                    <li>
                        <NavLink to="/campaigns">
                            <Button label="CAMPAÑAS" className="text-zinc-500 text-base" link />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/organizations">
                            <Button label="ORGANIZACIONES" className="text-zinc-500 text-base" link />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            <Button label="SOBRE NOSOTROS" className="text-zinc-500 text-base" link />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation