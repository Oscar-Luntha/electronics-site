import Contact from "./ui/sections/contact"
import About from "./ui/sections/about"
import Services from "./ui/sections/services"
import FeaturedProducts from "./ui/sections/featuredProducts"
import Header from "./ui/Header"
export default function Home(){
  return (
    <div className="min-h-screen bg-background">
     <Header/>
     <section className="w-full min-h-[60vh] bg-gray-100 px-6 py-16 text-center">
     <h1 className="text-4xl md:text-7xl font-bold mb-4">Professional Electronics Services</h1>
      <p className="text-base lg:text-xl text-gray-700 mb-6">
        Expert installation, reliable delivery and convenient collection services for all your electronic needs
      </p>
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
        Book a service
        </button>
      </section>
      <FeaturedProducts/>
      <Services/>
      <About/>
      <Contact/>
      <footer className="px-6 py-6 text-center bg-black text-white">
        <p>&copy; {new Date().getFullYear()} TnE-Electronics. All rights reserved.</p>
      </footer>
    </div>
  )
}