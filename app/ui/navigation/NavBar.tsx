export default function NavBar() {
    return (
      <nav className="flex flex-col md:flex-row flex-wrap md:items-center gap-6 text-base md:text-lg text-slate-700 font-medium">
        <a href="#products" className="hover:text-blue-600 transition-colors duration-200">Products</a>
        <a href="#services" className="hover:text-blue-600 transition-colors duration-200">Services</a>
        <a href="#about" className="hover:text-blue-600 transition-colors duration-200">About</a>
        <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contact</a>
      </nav>
    );
  }
  