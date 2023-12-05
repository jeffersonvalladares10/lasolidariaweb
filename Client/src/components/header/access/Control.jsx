import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile"
import LoginBtn from "./LoginBtn"
import SignupBtn from "./SignupBtn"

function Control() {
    const { isAuthenticated } = useAuth0();

    
    if (isAuthenticated){
        return <Profile />
    } else{    
    return <div className="flex flex-row justify-between items-center gap-2">
            <LoginBtn />
            <SignupBtn />
        </div>
    } 

}

export default Control;