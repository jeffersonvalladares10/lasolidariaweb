import Footer from "../../components/footer/Footer"
import OrgItem from "../../components/organizations/OrgItem"
/*
import { useEffect, useState } from "react";

import OrgList from "../../components/organizations/OrgList"

function Organizations() {

    const [orgs, setOrgs] = useState([]);

    const getData = async () => {
        //const orgs = await getAllOrgs();
        setOrgs(orgs);
    }

    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, ([]));
    
    return (
        <div>
            <div className="flex flex-col justify-center items-center m-4 gap-3">
                <h3 className="text-rose-400 text-4xl font-extrabold font-['League Spartan']">
                    ORGANIZACIONES
                </h3>
                <p className="text-zinc-700 text-xl text-center font-light font-['Poiret One']">
                    Descubre la maravillosa labor que desarrollan las organizaciones benéficas.
                </p>
            </div>
            
            <OrgList orgs={orgs}/>

            <Footer />
        </div>
    )
}*/


function Organizations() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center m-4 gap-3">
                <h3 className="text-rose-400 text-4xl font-extrabold font-['League Spartan']">
                    ORGANIZACIONES
                </h3>
                <p className="text-zinc-700 text-xl text-center font-light font-['Poiret One']">
                    Descubre la maravillosa labor que desarrollan las organizaciones benéficas.
                </p>
                <div className="flex flex-row gap-4">
                    <OrgItem />
                    <OrgItem />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Organizations
