import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function CampItem() {
    return (
        <div className="card flex justify-content-center gap-2">
            <Card className="md:w-25rem text-center">
                <div className="flex flex-col justify-center items-center gap-2">
                    <h5 className="text-center text-rose-500 text-xl font-extrabold font-['League Spartan'] uppercase">
                        Titulo de la Campaña
                    </h5>
                    <h6 className="text-center text-zinc-700 text-sm font-extralight font-['Poiret One'] uppercase">
                        Organizacion que realiza la campaña
                    </h6>
                    <p className="text-sm m-0 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                </div>
                <div className="m-4">
                    <img 
                        src="https://elcomercio.pe/resizer/iuI1V_mqM0XyL251ylWAhcGKo7E=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/6U66GVWNJBE3TLOFUBPIGOH6OE.jpg"
                    />
                </div>
                <div className="flex flex-row justify-evenly items-center gap-2 m-2">
                    <div className="flex flex-row justify-center items-center gap-2 m-2">
                        <svg width="23" height="27" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2013 4.33063L17.0547 8.5973H28.2333V21.3973H21.0653L20.212 17.1306H4.76667V4.33063H16.2013ZM19.7 0.0639648H0.5V36.3306H4.76667V21.3973H16.7133L17.5667 25.664H32.5V4.33063H20.5533L19.7 0.0639648Z" fill="#DE596A"/>
                        </svg>
                        <p className="text-zinc-700 text-xl text-center font-light font-['Poiret One']">
                            $$
                        </p>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-2">
                        <i className="pi pi-spin pi-spinner" style={{ fontSize: '1.5rem' }}></i>
                        <p>Completado: 25%</p>
                    </div>
                </div>
                
                <div className="w-full flex flex-row justify-evenly items-center gap-2">
                    <Button label="$1" className="w-1/4 font-['Poiret One'] font-thin text-slate-50 text-sm bg-rose-400 rounded-xl shadow-md px-4 py-2" />
                    <Button label="$3" className="w-1/4 font-['Poiret One'] font-thin text-slate-50 text-sm bg-rose-400 rounded-xl shadow-md px-4 py-2" />
                    <Button label="$5" className="w-1/4 font-['Poiret One'] font-thin text-slate-50 text-sm bg-rose-400 rounded-xl shadow-md px-4 py-2" />
                </div>
            </Card>
        </div>
    )
}

export default CampItem