import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
        

function OrgItem() {
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <>
            <Button label="VER MAS" className="font-['Poiret One'] font-thin text-slate-50 text-sm bg-rose-400 rounded-xl shadow-md px-4 py-2" />
        </>
    );

    return (
        <div className="card flex justify-content-center p-4 m-4">
            <Card title="NOMBRE DE LA ORGANIZACION" subTitle="REPRESENTANTE DE LA ORGANIZACION" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
    )
}

export default OrgItem