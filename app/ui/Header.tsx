'use client'
import { Cable,Menu } from "lucide-react"
import NavBar from "./navigation/NavBar"
import { useState } from "react"
export default function Header(){
    const [openMenu, setOpenMenu] = useState(false)
    function handleMenuClick(){
        setOpenMenu(!openMenu)
    }
    return(
        <header className="flex flex-col md:flex-row w-full p-6 gap-10 justify-between sticky top-0 z-50 bg-white shadow mb-20">
           <div className="flex justify-between">
                <div className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
                    <Cable className="w-8 h-8 p-1 bg-blue-700 text-white rounded-sm" />
                    <h1 className="tracking-wide">TnE-Electronics</h1>
                </div>
                <button onClick={handleMenuClick} className="flex md:hidden">
                    <Menu/>
                </button>
             </div>
            <div className={`${openMenu ? "block" : "hidden"} md:flex`}>
                <NavBar/>
            </div>
        </header>
    )
}
