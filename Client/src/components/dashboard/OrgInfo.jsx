import { Card } from 'primereact/card';

function OrgInfo() {
    return (
        <div>
            <img src="" alt="" className="w-2 rounded-full border-8 border-slate-50 shadow-lg"/>
            <div className="w-full flex flex-col items-center justify-center gap-4">
                <Card title="Información General" className="w-3/4 text-rose-400 text-base font-extrabold font-['League Spartan'] shadow-xl p-4">            
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Nombre de la organización: {}
                    </p>
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Fecha de fundación: {}
                    </p>
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Departamento: {}
                    </p>
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Categoria: {}
                    </p>
                </Card>
                <Card title="Información de Contacto" className="w-3/4 text-rose-400 text-base font-extrabold font-['League Spartan'] shadow-xl p-4">            
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Correo Electrónico: {}
                    </p>
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Teléfono: {}
                    </p>
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Dirección: {}
                    </p>
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Redes sociales: {}
                    </p>
                </Card>
                <Card title="Constitución y Representación" className="w-3/4 text-rose-400 text-base font-extrabold font-['League Spartan'] shadow-xl p-4">            
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Nombre del Representante: {}
                    </p>
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Documento de Identidad {}
                    </p>
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Fecha de Nacimiento: {}
                    </p>
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Dirección: {}
                    </p>
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Correo Electrónico: {}
                    </p>
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Teléfono: {}
                    </p>
                </Card>
                <Card title="Más información" className="w-3/4 text-rose-400 text-base font-extrabold font-['League Spartan'] shadow-xl p-4">            
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Resumen de la organización: {}
                    </p>
                    <p className="text-zinc-700 text-sm font-light font-['Poiret One']">
                    Misión y Visión: {}
                    </p>
                </Card>
            </div>
        </div>
    )
}

export default OrgInfo