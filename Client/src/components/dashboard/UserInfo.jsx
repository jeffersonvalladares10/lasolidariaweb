import { Card } from 'primereact/card';
import { useAuth0 } from "@auth0/auth0-react";


function UserInfo() {
    const { user } = useAuth0();

    return (
        <div className="w-full flex flex-col items-center gap-4">
            <img src={user.picture} alt={user.name} className="w-2 rounded-full border-8 border-slate-50 drop-shadow-lg m-4"/>
            <Card title="Información General" className="w-3/4 text-rose-400 font-bold font-['League Spartan'] drop-shadow-2xl p-4 uppercase">            
                <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Nombre: {user.name}
                </p>
                <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Correo Electrónico: {user.email}
                </p>
            </Card>
        </div>
    )
}

export default UserInfo