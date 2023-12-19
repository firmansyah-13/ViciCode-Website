function Navigasi(){
    // Nvabar fixed
        window.onscroll = function() {
            const header = document.querySelector('header');
            const fixedNav = header.offsetTop;

            if (window.scrollY > fixedNav){
                header.classList.add('navbar-fixed');
            } else {
                header.classList.remove('navbar-fixed');
            }
        }


        // hamburger
        
        window.onload = function(){
            const navMenu = document.querySelector('#nav-menu');
            const hamburger = document.querySelector('#hamburger');
            hamburger.addEventListener('click', function(){
                hamburger.classList.toggle('hamburger-active');
                navMenu.classList.toggle('hidden');
            })
    
            navMenu.addEventListener('click', function(){
                hamburger.classList.toggle('hamburger-active');
                navMenu.classList.toggle('hidden');
            })

        }
    return (
        <>
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
            <div className="container">
                <div className="flex justify-between items-center py-4">
                    <div className="px-8 lg:px-14">
                        <a href="#" className="font-bold text-2xl font-fauna-one text-primary hover:opacity-80">ViciCode</a>
                    </div>
                    {/* Navbar */}
                    <div className="flex items-center px-5">
                        <button className="absolute block right-4 lg:hidden" id="hamburger" type="button" name="button">
                            <span className="hamburger-line transition-transform duration-500"></span>
                            <span className="hamburger-line transition-all duration-700"></span>
                            <span className="hamburger-line transition-transform duration-500"></span>
                        </button>
                    </div>
                    {/* Nav-Menu */}
                    <nav id="nav-menu" className="hidden absolute py-2 w-full top-full rounded-lg shadow-lg bg-slate-50 lg:static lg:flex lg:justify-end lg:rounded-none lg:shadow-none lg:bg-slate-100">
                        <ul className="block">
                            <li className="group"><a href="#about" className="text-lg text-dark py-2 px-6 flex font-semibold group-hover:text-primary transition-all duration-500 ease-in-out">About</a></li>
                        </ul>
                        <ul className="block">
                            <li className="group"><a href="#blog" className="text-lg text-dark py-2 px-6 flex font-semibold group-hover:text-primary transition-all duration-500 ease-in-out">Blog</a></li>
                        </ul>
                        <ul className="block">
                            <li className="group"><a href="#portfolio" className="text-lg text-dark py-2 px-6 flex font-semibold group-hover:text-primary transition-all duration-500 ease-in-out">Portfolio</a></li>
                        </ul>
                        <ul className="block">
                            <li className="group"><a href="#contact" className="text-lg text-dark py-2 px-6 pr-8 flex font-semibold group-hover:text-primary transition-all duration-500 ease-in-out">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header> <br />
        </>
        
    )
}



export default Navigasi;