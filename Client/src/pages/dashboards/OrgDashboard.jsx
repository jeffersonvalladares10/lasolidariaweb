import { TabView, TabPanel } from 'primereact/tabview';
import OrgInfo from '../../components/dashboard/OrgInfo';
import OrgCampaigns from '../../components/dashboard/OrgCampaigns';
import OrgDonations from '../../components/dashboard/OrgDonations';

function OrgDashboard() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 m-4">
            <div className="flex flex-row gap-2 self-start">
                <i className="pi pi-spin pi-cog" style={{ fontSize: '2rem', color: '#3f3f46'}}></i>
                <h3 className="text-zinc-700 text-xl font-extrabold font-['League Spartan'] uppercase self-start">Administrar Organización</h3>
            </div>
            <div className="flex justify-center items-center m-2">
                <TabView className="flex flex-col justify-center items-center">
                    <TabPanel header="INFORMACION" className="w-full text-rose-400 text-xl font-extrabold font-['League Spartan']">
                        <OrgInfo />
                    </TabPanel>
                    <TabPanel header="CAMPAÑAS" className="w-full text-rose-400 text-xl font-extrabold font-['League Spartan']">
                        <OrgCampaigns />
                    </TabPanel>
                    <TabPanel header="TRANSACCIONES" className="w-full text-rose-400 text-xl font-extrabold font-['League Spartan']">
                        <OrgDonations />
                    </TabPanel>
                </TabView>
            </div>
        </div>
    )
}

export default OrgDashboard