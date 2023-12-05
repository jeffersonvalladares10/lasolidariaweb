import { useRef } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const { user, isAuthenticated, logout } = useAuth0();
    const navigate = useNavigate();


    const menu = useRef(null);
    const items = [
        {
            label: "Dashboard",
            icon: "pi pi-fw pi-user",
            command: () => {
                navigate("/dashboard/user");
            }
        }, 
        {
            label: "Cerrar sesión",
            icon: "pi pi-fw pi-power-off",
            command: () => {
                logout({ logoutParams: { returnTo: window.location.origin } })
            }
        } 
    ]
    return (
        isAuthenticated && (
        <div>
            <Menu model={items} popup ref={menu} breakpoint="767px" />
            <Avatar image={user.picture} size="xlarge" shape="circle" onClick={(e) => menu.current.toggle(e)}/>
        </div>
        )
    )
}

export default Profile