import { MapPin,Phone,Mail } from "lucide-react"
export default function Contact(){
    return (
        <section id="contact" className="px-6 py-12 scroll-mt-64 md:scroll-mt-20 bg-white text-center">
            <h1 className="text-4xl font-bold mb-10 text-gray-900">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="rounded-lg bg-gray-50 p-6 shadow-sm hover:shadow-md transition">
                    <Phone className="w-8 h-8 mx-auto text-blue-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-1">Phone</h2>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div className=" rounded-lg bg-gray-50 p-6 shadow-sm hover:shadow-md transition">
                    <Mail className="w-8 h-8 mx-auto text-blue-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-1">Email</h2>
                    <p className="text-gray-600">info@electrotech.com</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6 shadow-sm hover:shadow-md transition">
                    <MapPin className="w-8 h-8 mx-auto text-blue-600 mb-4" />
                    <h2 className="text-xl font-semibold mb-1">Address</h2>
                    <p className="text-gray-600">123 Tech Street<br />City, State 12345</p>
                    </div>
                </div>
        </section>
    )
}