import { Mail, MapPin, Instagram, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-8 md:px-12 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-2" id="contact-title">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">Ready to collaborate or discuss your next project?</p>
        </div>

        <div className="flex justify-center max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-light mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:tharun.nstr@gmail.com" className="flex items-center gap-4 group">
                <Mail className="h-6 w-6 text-primary"/>
                <span className="text-lg group-hover:underline">tharun.nstr@gmail.com</span>
              </a>
              <a href="tel:+491786320705" className="flex items-center gap-4 group">
                <Phone className="h-6 w-6 text-primary"/>
                <span className="text-lg group-hover:underline">+49 1786320705</span>
              </a>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary"/>
                <span className="text-lg">Augsburg, Germany</span>
              </div>
              <a href="https://www.instagram.com/tharuns_perspective" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <Instagram className="h-6 w-6 text-primary"/>
                <span className="text-lg group-hover:underline">@tharuns_perspective</span>
              </a>
              <a href="https://www.linkedin.com/in/tharun-arety/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <Linkedin className="h-6 w-6 text-primary"/>
                <span className="text-lg group-hover:underline">Tharun Arety</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;