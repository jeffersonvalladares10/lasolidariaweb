import CampItem from "../../components/campaigns/CampItem"
import Footer from "../../components/footer/Footer"

function Campaigns() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center m-4 gap-3">
                <h3 className="text-rose-400 text-4xl font-extrabold font-['League Spartan']">
                    CAMPAÑAS
                </h3>
                <p className="text-zinc-700 text-xl text-center font-light font-['Poiret One']">
                    Apoya a las organizaciones con microdonaciones para sus metas a corto plazo.
                </p>
            </div>
            <div>
                <CampItem />
            </div>
            <Footer />
        </div>
    )
}

export default Campaigns