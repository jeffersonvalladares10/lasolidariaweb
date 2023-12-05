import { Card } from 'primereact/card';

function OrgDonations() {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Card title="Historial de donaciones" className="w-3/4 text-rose-400 text-base font-extrabold font-['League Spartan'] shadow-xl p-4">            
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    [00-00-00] NOMBRE DE LA CAMPAÑA; NOMBRE DEL USUARIO; MONTO
                    </p>
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    [00-00-00] NOMBRE DE LA CAMPAÑA; NOMBRE DEL USUARIO; MONTO
                    </p>
            </Card>
        </div>
    )
}

export default OrgDonations