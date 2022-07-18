import { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
// function NavLink({to, children}) {
//     return <a href={to} className={`mx-4`}>
//         {children}
//     </a>
// }

function MobileNav({open, setOpen}) {
    
    const router = useRouter();
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-black transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-black h-20">
                <a href="https://ilufa.co.id" className="flex items-center">
                    <img src="/assets/icon/logo_2.png" className="mr-3 h-9 sm:h-10" alt="ilufa 168 Logo" />
                </a>
            </div>

            <div className="flex flex-col ml-4 mr-4 text-xl text-white">
                <Link href="/">
                    <a className={router.pathname == "/" ? " active font-medium text-orange-400 pb-0.5 my-4" : "hover:text-orange-400 my-4"} onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        Beranda
                    </a>
                </Link>
                <Link href="/product">
                    <a className={router.pathname == "/product" ? " active font-medium text-orange-400 pb-0.5 my-4" : "hover:text-orange-400 my-4"} onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        Produk
                    </a>
                </Link>
                <Link href="/blog">
                    <a className={router.pathname == "/blog" ? " active font-medium text-orange-400 pb-0.5 my-4" : "hover:text-orange-400 my-4"} onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        Blog
                    </a>
                </Link>
                <Link href="/about">
                    <a className={router.pathname == "/about" ? " active font-medium text-orange-400 pb-0.5 my-4" : "hover:text-orange-400 my-4"} onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Tentang Kami
                    </a>
                </Link>
                <Link href="/employee">
                    <a className={router.pathname == "/employee" ? " active font-medium text-orange-400 pb-0.5 my-4" : "hover:text-orange-400 my-4"} onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Karir
                    </a>
                </Link>
            </div>  
        </div>
    )
}

export default function Navbar() {
    const router = useRouter();
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-black px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                
            <a href="https://ilufa.co.id" className="flex items-center">
                <img src="/assets/icon/logo_2.png" className="mr-3 h-9 sm:h-10" alt="ilufa 168 Logo" />
            </a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <ul className="flex text-white">
                        <li>
                            <Link href="/">
                            <a className={router.pathname == "/" ? "active border-b-2 border-orange-600 pb-0.5 mx-4" : "hover:text-orange-400 mx-4"}>Beranda</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/product">
                            <a className={router.pathname == "/product" ? "active border-b-2 border-orange-600 pb-0.5 mx-4" : "hover:text-orange-400 mx-4"}>Produk</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                            <a className={router.pathname == "/blog" ? "active border-b-2 border-orange-600 pb-0.5 mx-4" : "hover:text-orange-400 mx-4"}>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                            <a className={router.pathname == "/about" ? "active border-b-2 border-orange-600 pb-0.5 mx-4" : "hover:text-orange-400 mx-4"}>Tentang Kami</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/employee">
                            <a className={router.pathname == "/employee" ? "active border-b-2 border-orange-600 pb-0.5 mx-4" : "hover:text-orange-400 mx-4"}>Karir</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}