import { SignedOut, SignedIn} from "@clerk/nextjs";
import UserDisplay from "../userInfo";

import Link from "next/link";
export default function NavBar() {
    return (
      <nav className="flex flex-col-reverse md:flex md:flex-row gap-6">
        <div className="flex flex-col md:flex-row flex-wrap md:items-center gap-3 md:gap-6 text-base md:text-lg text-slate-700 font-medium">
        <a href="#products" className="hover:text-blue-600 transition-colors duration-200">Products</a>
        <a href="#services" className="hover:text-blue-600 transition-colors duration-200">Services</a>
        <a href="#about" className="hover:text-blue-600 transition-colors duration-200">About</a>
        <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contact</a>
        </div>
        
        <SignedOut>
            <Link href='/login' className="md:bg-slate-700 md:text-white md:px-6 md:py-1.5 rounded hover:bg-gray-800 md:transition">
            Signin
            </Link>
        </SignedOut>               
        <SignedIn>
          <div className="flex">
            <div>
              <UserDisplay />
            </div>
          </div>  
        </SignedIn>
      </nav>
    );
  }
  