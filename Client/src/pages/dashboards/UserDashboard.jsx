import { useAuth0 } from "@auth0/auth0-react";
import UserInfo from "../../components/dashboard/UserInfo";
import UserDonations from "../../components/dashboard/UserDonations";

const Profile = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
        <div className="flex flex-col items-center justify-center gap-4 m-4 p-4">
            <div className="flex flex-row gap-2 self-start">
                <i className="pi pi-spin pi-cog" style={{ fontSize: '2rem', color: '#3f3f46'}}></i>
                <h3 className="text-zinc-700 text-xl font-extrabold font-['League Spartan'] uppercase self-start">Administrar Usuario</h3>
            </div>
            <div className="w-full flex flex-col gap-6">
            <UserInfo />
            <UserDonations />
            </div>
        </div>
        )
    );
};

export default Profile;