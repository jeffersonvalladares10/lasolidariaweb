import volunteerImg from "../../assets/volunteer.png"
import charityImg from "../../assets/charity.png"
import { Button } from "primereact/button"
import Footer from "../../components/footer/Footer"

function About() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center m-4 gap-3">
                <h3 className="text-rose-400 text-4xl font-extrabold font-['League Spartan']">
                    SOBRE NOSOTROS
                </h3>
                <p className="text-zinc-700 text-xl text-center font-light font-['Poiret One']">
                    Facilitamos el envío y recepción de donaciones para que las organizaciones benéficas sigan adelante con su labor humanitaria gracias a miles de salvadoreños altruistas.
                </p>
            </div>

            <div className="flex flex-row items-center">
                <img
                    src={volunteerImg}
                    alt="Volunteer"
                />
                
                <div className=" flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-zinc-700 text-6xl font-extrabold font-['League Spartan']">
                            00
                        </span>
                        <span className="text-rose-400 text-4xl font-extrabold font-['League Spartan']">
                            ORGANIZACIONES
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-zinc-700 text-6xl font-extrabold font-['League Spartan']">
                            00
                        </span>
                        <span className="text-rose-400 text-4xl font-extrabold font-['League Spartan']">
                            CAMPAÑAS
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-zinc-700 text-6xl font-extrabold font-['League Spartan']">
                            00
                        </span>
                        <span className="text-rose-400 text-4xl font-extrabold font-['League Spartan']">
                            USUARIOS
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-zinc-700 text-6xl font-extrabold font-['League Spartan']">
                            00
                        </span>
                        <span className="text-rose-400 text-4xl font-extrabold font-['League Spartan']">
                            DONACIONES
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-evenly items-center gap-4">
                <div className="w-2/5 flex flex-col items-center gap-2">
                <h4 className="text-rose-400 text-3xl font-extrabold font-['League Spartan'] uppercase">
                    ¿Cómo funciona?
                </h4>

                <p className="text-zinc-700 text-xl text-center font-light font-['Poiret One']">
                    Puedes explorar libremente las campañas de microdonaciones o la información de las organizaciones, pero deberás crear una cuenta dentro de la plataforma para poder interacturar.
                </p>

                <h5 className="text-yellow-500 text-2xl font-extrabold font-['League Spartan'] uppercase">
                    Organizaciones
                </h5>

                <p className="text-zinc-700 text-xl text-center font-light font-['Poiret One']">
                    Tienen un perfil único dentro de la plataforma con información detallada acerca de la organización. Pueden crear y administrar campañas de microdonaciones para conseguir financiamiento para sus actividades. 
                </p>

                <h5 className="text-yellow-500 text-2xl font-extrabold font-['League Spartan'] uppercase">
                    Usuarios
                </h5>

                <p className="text-zinc-700 text-xl text-center font-light font-['Poiret One']">
                    Tienen un perfil único dentro de la plataforma con información básica. Pueden realizar aportes a las campañas de microdonaciones con la información proporcionada o de forma anónima y consultar su historial de donaciones.
                </p>

                </div>

                <img 
                    src={charityImg}
                    alt="Charity"
                />
            </div>

            <div className="flex flex-col">
                <h4 className="text-rose-400 text-4xl font-extrabold font-['League Spartan'] uppercase">
                    Explora y visita los perfiles de las organizaciones.
                </h4>

                {/*CAROUSEL DE CARDS DE ORGANIZACIONES */}

                <Button label="EXPLORAR ORGANIZACIONES" icon="pi-angle-double-right" className="text-yellow-500 text-2xl font-extrabold font-['League Spartan'] uppercase" link/>
            </div>
            <Footer />
        </div>
    )
}

export default About