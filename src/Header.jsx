import { TbBolt } from "react-icons/tb";


function Header(){
    return(
        <header>
            <section className="w-full h-20 p-4 gap-2.5 bg-slate-600 flex justify-around text-center" >
                <div>
                    <a className="text-3xl font-bold cursor-pointer" href="main.jsx"><strong className="text-blue"><TbBolt className="float-left mt-1"/>Cars</strong>Spot</a>
                </div>
                <div className=" flex gap-6 text-center mt-3">
                    <a className="cursor-pointer">Galeria zdjęć</a>
                    <a className="cursor-pointer">FaQ</a>
                </div>
                <div>
                    <button className="bg-blue text-white h-12 rounded-lg py-3 px-6 hover:bg-blueh duration-500" >Zadzwoń do nas</button>
                </div>
            </section>
        </header>
    )
}

export default Header