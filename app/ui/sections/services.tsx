import { Wrench, Boxes, Truck } from "lucide-react"
export default function Services(){
    return(
        <section className="px-6 py-12 text-center bg-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900">Our Services</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="p-6 rounded-lg shadow-lg hover:shadow-md transition">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-xl text-slate-700 font-semibold mb-2">Installation</h2>
                <p className="text-gray-600">Professional installation of electronics, appliances, and smart home devices</p>
                    <ul className="text-gray-600 list-disc list-inside text-left max-w-xs mx-auto">
                        <li>Smart home installation</li>
                        <li>Appliance installation</li>

                    </ul>
                </div>
                <div className="p-6 rounded-lg shadow-lg hover:shadow-md transition">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-xl text-slate-700 font-semibold mb-2">Delivery</h2>
                <p className="text-gray-600">Fast and secure delivery of electronics to your doorstep</p>
                <ul className="text-gray-600 list-disc list-inside text-left max-w-xs mx-auto">
                    <li>Quick Delivery</li>
                    <li>White glove service</li>
                    <li>Secure packaging</li>
                    <li>Real-time tracking</li>
                </ul>
                </div>
                <div className="p-6 rounded-lg shadow-lg hover:shadow-md transition">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Boxes className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-xl text-slate-700 font-semibold mb-2">Collection</h2>
                <p className="text-gray-600 mb-4">Convenient pickup service for repairs, returns or recycling</p>
                <ul className="text-gray-600 list-disc list-inside text-left max-w-xs mx-auto">
                    <li>Repair collection</li>
                    <li>Return processing</li>
                    <li>E-waste recycling</li>
                    <li>Scheduled pickups</li>
                </ul>
                </div>
            </div>
        </section>


    )
}