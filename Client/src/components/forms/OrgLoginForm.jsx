import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { NavLink } from 'react-router-dom';
        
function OrgLoginForm() {
    return (
        <>
            <div className="flex flex-col gap-2 m-2">
                <form className="flex flex-col gap-4">
                    <InputText id="email" className="text-zinc-700 text-sm font-light font-['Poiret One'] shadow-lg p-2 focus:border-2 border-rose-400" placeholder="Correo Electrónico"/>
                    <InputText id="password" type="password" className="text-zinc-700 text-sm font-light font-['Poiret One'] shadow-lg p-2 focus:border-2 border-rose-400" placeholder="Contraseña"/>
                    <Button label="INGRESAR" className="font-['Poiret One'] font-thin text-slate-50 text-sm bg-rose-400 rounded-xl shadow-lg px-4 py-2 m-4" />
                </form>
            </div>

            <div className="flex-col text-center">
                    <Button label="Olvidé mi contraseña" className="font-['Poiret One'] font-thin text-rose-400 text-xl underline my-4" link />
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

export default OrgLoginForm