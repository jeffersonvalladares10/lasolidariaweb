import OrgSignForm from '../../components/forms/OrgSignForm';

function SignupPage() {
    return (
        <>
            <div className="flex flex-col justify-center items-center m-4 gap-3">
                <h3 className="text-rose-400 text-4xl font-extrabold font-['League Spartan']">
                    UNETE
                </h3>
                <p className="text-zinc-700 text-xl text-center font-light font-['Poiret One']">
                    Crea una cuenta para unirte a la plataforma y llevar tu causa a más personas. 
                    Permitenos ayudarte para que sigas ayudando.
                </p>
            </div>
            <OrgSignForm />                    
        </>
    )
}

export default SignupPage