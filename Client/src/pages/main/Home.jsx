import { Button } from "primereact/button"
import homeImg from "../../assets/home.png"
import { NavLink } from "react-router-dom"

function Home() {
    return (
        <div className="w-full flex flex-row justify-evenly items-center gap-2">
            <div className="w-2/5 flex flex-col gap-4">
                <h2 className="text-zinc-700 text-6xl font-extrabold font-['League Spartan']">
                    UNETE Y
                    <br/>
                    <span className="text-yellow-500">
                        SOLIDARIZATE
                    </span>
                    <br/>
                    CON TU
                    <br/>
                    <span className="text-rose-400">
                        COMUNIDAD
                    </span>
                </h2>

                <p className="text-zinc-700 text-xl font-light font-['Poiret One']">
                    Facilitamos el envío y recepción de donaciones para organizaciones benéficas en todo El Salvador.
                </p>

                <div className="flex justify-start">
                    <NavLink to="/about">
                        <Button label="CONOCER MAS" className="font-['Poiret One'] font-thin text-rose-400 text-sm border-1 border-rose-400 rounded-xl shadow-md px-4 py-2" />
                    </NavLink>
                </div>
            </div>
            <div className="w-2/5">
                <img 
                    src={homeImg}
                    alt="Home Image"
                    className="w-full"
                />
            </div>

            
        
        </div>
    )
}

export default Home