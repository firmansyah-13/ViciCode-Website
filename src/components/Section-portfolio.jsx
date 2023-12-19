import Img from './../assets/portofolio.png'

function SectionPortfolio(){
    return (
        <>
        <section className="pt-32 pb-32" id='portfolio-section'>
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 lg:px-24 px-8">
                        <h2 className="text-3xl text-primary drop-shadow-md font-fauna-one leading-snug">I'm Front End Web Developer ,working freelance.</h2>
                        <p className="text-base text-slate-700 leading-7 font-medium py-3 indent-3">saya memulai perjalanan sebagai Front End setelah lulus SMA, tech stack yang sudah saya pelajari dan aplikasikan ke beberapa project saya yaitu HTML, CSS, Javascript, Tailwind & ReactJS.</p>
                        <button type="button" className="py-2">
                            <a href="#portfolio" className="text-base font-semibold py-2 px-4 bg-primary rounded-lg text-teal-50 hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out">My Porfolio</a>
                        </button>
                    </div>
                    <div className="w-full lg:w-1/2 px-8 py-3">
                        <div className=" rounded-xl shadow-lg w-full flex flex-wrap">
                            <img src={Img} alt="portfolio" className='object-contain w-1/2 hover:opacity-80 rounded-lg hover:border-2 hover:border-primary'/>
                            <img src={Img} alt="portfolio" className='object-contain w-1/2 hover:opacity-80 rounded-lg hover:border-2 hover:border-primary'/>
                            <img src={Img} alt="portfolio" className='object-contain w-1/2 hover:opacity-80 rounded-lg hover:border-2 hover:border-primary'/>
                            <img src={Img} alt="portfolio" className='object-contain w-1/2 hover:opacity-80 rounded-lg hover:border-2 hover:border-primary'/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default SectionPortfolio;