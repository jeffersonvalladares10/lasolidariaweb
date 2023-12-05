import googleLogo from "../../assets/google.png"
import { useAuth0 } from "@auth0/auth0-react";

function UserLoginForm() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="flex flex-col items-center">
            <p className="text-zinc-700 text-sm text-center font-light font-['Poiret One']">
                ¡Inicia sesión con tu cuenta de Google sin necesidad de registro previo!
            </p>
            <div className="flex justify-center items-center bg-white rounded-full shadow-md py-2 my-4 hover:shadow-2xl cursor-pointer" onClick={() => loginWithRedirect()}>
                <img 
                    src={googleLogo}
                    alt="Google Logo"
                    className="w-2 h-auto"
                />
                <p className="font-['League Spartan'] font-xs font-normal text-zinc-700 uppercase">
                    Continua con Google
                </p>
            </div>
        </div>
    )
}

export default UserLoginForm