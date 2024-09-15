function Hero1(){
    return(
        <section className="w-max h-825 py-32 px-0 gap-12">
            <div className="flex flex-col w-1200 h-80 gap-12 pl-32">
                <div className="h-40 font-normal text-7xl uppercase leading-84 w-1120 gap-8">
                    sprzedajemy samochody <br />z europy
                </div>
                <div className="w-602 h-12 font-normal text-base leading-6">
                    Kup komfortowy pojazd, aby każda podróż <br /> była wyjątkowym przeżyciem.
                </div>
                <div className=" flex gap-2">
                    <button className="bg-blue text-white border rounded-lg py-3 px-6 hover:bg-white hover:text-blue hover:border-solid hover:border-blue hover:border duration-500">Zobacz zdjęcia</button>
                    <button className="bg-white text-blue rounded-lg py-3 px-6 border-solid border-blue border hover:bg-blue hover:text-white hover:border-white duration-500">zadzwoń do nas</button>
                </div>
            </div>
            <img src="src\assets\Hero.png" className="right-0 absolute drop-shadow-2xl z-10"></img>
        </section>
    )
}
export default Hero1