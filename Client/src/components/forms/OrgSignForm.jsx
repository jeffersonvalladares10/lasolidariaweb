import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';
import { createOrg } from '../../services/org.service';

function OrgSignForm() {

    const categories = [
        { name: 'Bienestar Animal' },
        { name: 'Niñez y Juventud' },
        { name: 'Tercera Edad' },
        { name: 'Medio Ambiente' },
        { name: 'Educación' },
        { name: 'Desamparados' },
        { name: 'Salud' }
    ];

    const departments = [
        { name: 'Ahuachapán' },
        { name: 'Sonsonate' },
        { name: 'Santa Ana' },
        { name: 'Chalatenango' },
        { name: 'La Libertad' },
        { name: 'San Salvador' },
        { name: 'Cuscatlán' },
        { name: 'La Paz' },
        { name: 'Cabañas' },
        { name: 'San Vicente' },
        { name: 'Usulután' },
        { name: 'San Miguel' },
        { name: 'Morazán' },
        { name: 'La Unión' }
    ];

    
    const initialFormData = {
        orgName: "",
        orgBirthdate: "",
        category: "",
        department: "",
        orgAddress: "",
        orgPhone: "",
        orgEmail: "",
        orgPassword: "",
        orgLeadName: "",
        orgLeadID: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createOrg(formData);
            setFormData(initialFormData);
        } catch (error) {
            console.log(error.message);
        }
    };
    
    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value,
        });
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <h4 className="text-rose-400 text-lg font-extrabold font-['League Spartan'] uppercase">
                Solicitud de Registro
            </h4>
            <div className="flex-col m-4 gap-3">
                
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex gap-2 justify-center items-center">
                        <InputText 
                        name="orgName"
                        value={formData.orgName}
                        onChange={handleChange}
                        className="w-2/5 text-zinc-700 text-sm font-light font-['Poiret One'] shadow-lg p-2 focus:border-2 border-rose-400" 
                        placeholder="Nombre de la organización"
                        />
                        <Calendar 
                        name="orgBirthdate"
                        value={formData.orgBirthdate}
                        onChange={handleChange}
                        className="w-2/5 text-zinc-700 text-sm font-light font-['Poiret One'] shadow-lg focus:border-2 border-rose-400 p-2 bg-white rounded-lg" 
                        placeholder="Fecha de fundación"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center items-center">
                        <Dropdown 
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        options={categories} optionLabel="name"
                        className="w-2/5 bg-white text-zinc-700 font-['Poiret One'] shadow-lg focus:border-2 border-rose-400" 
                        placeholder="Categoria" 
                        />
                        <Dropdown 
                        name="department" 
                        value={formData.department}
                        onChange={handleChange}
                        options={departments} optionLabel="name"
                        className="w-2/5 bg-white text-zinc-700 font-['Poiret One'] shadow-lg focus:border-2 border-rose-400" 
                        placeholder="Departamento"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center items-center">
                        <InputText 
                        name="orgAddress"
                        value={formData.orgAddress}
                        onChange={handleChange}
                        className="w-2/5 text-zinc-700 text-sm font-light font-['Poiret One'] shadow-lg p-2 focus:border-2 border-rose-400" 
                        placeholder="Dirección"
                        />
                        <InputMask 
                        name="orgPhone"
                        value={formData.orgPhone}
                        onChange={handleChange}
                        mask="(503) 9999-9999" 
                        className="w-2/5 text-zinc-700 text-sm font-light font-['Poiret One'] shadow-lg p-2 focus:border-2 border-rose-400"
                        placeholder="Teléfono" 
                        />
                    </div>

                    <div className="flex gap-2 justify-center items-center">
                        <InputText 
                        name="orgEmail" 
                        value={formData.orgEmail}
                        onChange={handleChange}
                        className="w-2/5 text-zinc-700 text-sm font-light font-['Poiret One'] shadow-lg p-2 focus:border-2 border-rose-400" 
                        placeholder="Correo Electrónico"
                        />
                        <InputText name="orgPassword"
                        type="password" 
                        value={formData.orgPassword}
                        onChange={handleChange}
                        className="w-2/5 text-zinc-700 text-sm font-light font-['Poiret One'] shadow-lg p-2 focus:border-2 border-rose-400" 
                        placeholder="Contraseña"
                        />
                    </div>

                    <div className="flex gap-2 justify-center items-center">
                        <InputText 
                        name="orgLeadName"
                        value={formData.orgLeadName}
                        onChange={handleChange}
                        className="w-2/5 text-zinc-700 text-sm font-light font-['Poiret One'] shadow-lg p-2 focus:border-2 border-rose-400" 
                        placeholder="Nombre del representante"
                        />
                        <InputMask 
                        name="orgLeadID"
                        value={formData.orgLeadID}
                        onChange={handleChange}
                        mask="00000000-0" 
                        className="w-2/5 text-zinc-700 text-sm font-light font-['Poiret One'] shadow-lg p-2 focus:border-2 border-rose-400"
                        placeholder="name del representante"
                        />
                        
                    </div>
                    <Button label="ENVIAR SOLICITUD" type="submit" className="font-['Poiret One'] font-thin text-slate-50 text-sm bg-rose-400 rounded-xl shadow-lg px-4 py-2 m-4" />
                </form>
                
            </div>
        </div>
        
    )
}

export default OrgSignForm