import { Phone , Mail, MapPin } from "lucide-react"
export default function Home(){
  return (
    <>
      <section>
        <h1>Professional Electronics Services</h1>
        <p>Expert installation, reliable delivery and convenient collection services for all your electronic needs</p>
        <button>Book a service</button>
      </section>
      <section>
        <h1>Our Services</h1>
      </section>
      <section>
        <h1>About TnE-Electronics</h1>
        <p>With over 10 years of experience in the electronivs industry, we provide reliable and professional services to both residential and commercial clients.
          Our certified technicians ensure quality workmanship and customer satisfaction
        </p>
        <div>
          <div>500+ Happy Customers</div>
          <div>10+ Years Experience</div>
          <div>12 hrs Support available</div>
        </div>
      </section>
      <section>
      <h1>Contact Us</h1>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-blue-600"/>
          <span>Phone : 099-------</span>
        </div>
        <div>
          <Mail className="w-5 h-5 text-blue-600"/>
          <span>Tnelectronis@gmail.com</span>
        </div>
        <div>
          <MapPin className="w-5 h-5 text-blue-600"/>
          <span>Address: ------ </span>
        </div>
      </section>
    </>
  )
}