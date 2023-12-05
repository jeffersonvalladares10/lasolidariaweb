import { Card } from 'primereact/card';

function UserDonations() {
    return (
        <div className="w-full flex flex-col items-center">
            <Card title="Historial de donaciones" className="w-3/4 text-rose-400 font-bold font-['League Spartan'] drop-shadow-2xl p-4 uppercase">            
                <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    [00-00-00] NOMBRE DE LA CAMPAÑA; ORGANIZACION; MONTO
                </p>
                <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    [00-00-00] NOMBRE DE LA CAMPAÑA; ORGANIZACION; MONTO
                </p>
            </Card>
        </div>
    )
}

export default UserDonations