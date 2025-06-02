export default function About(){
    return(
        <section className="px-6 py-12 text-center shadow-sm bg-white">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">About TnE-Electronics</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          With over 10 years of experience in the electronics industry, we provide reliable and professional services to both residential and commercial clients.
          Our certified technicians ensure quality workmanship and customer satisfaction.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-40">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">500+</div>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">10+</div>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">12hr</div>
            <p className="text-gray-600 mt-2">Support Available</p>
          </div>
        </div>
      </section>
    )
}