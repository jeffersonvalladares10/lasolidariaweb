import { TabView, TabPanel } from 'primereact/tabview';
import OrgLoginForm from '../../components/forms/OrgLoginForm';
import UserLoginForm from '../../components/forms/UserLoginForm';

function LoginPage() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center m-4 gap-3">
                <h3 className="text-rose-400 text-4xl font-extrabold font-['League Spartan']">
                    INICIAR SESION
                </h3>
                <p className="text-zinc-700 text-xl text-center font-light font-['Poiret One']">
                    Ingresa a tu cuenta para interactuar dentro del sitio
                </p>
            </div>

            <div className="flex justify-center items-center m-2">
                <TabView className="flex flex-col justify-center items-center">
                    <TabPanel header="ORGANIZACION" className="w-full text-rose-400 text-xl font-extrabold font-['League Spartan']">
                        <OrgLoginForm />                    
                    </TabPanel>
                    <TabPanel header="PARTICULAR" className="w-full text-rose-400 text-xl font-extrabold font-['League Spartan']">
                        <UserLoginForm />
                    </TabPanel>
                </TabView>
            </div>
        
        </div>
    )
}

export default LoginPage