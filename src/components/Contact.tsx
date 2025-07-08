
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-8 md:px-12 bg-black opacity-0 animate-fade-in-up">
      <div className="container mx-auto">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl font-light mb-2 opacity-0 animate-fade-in-up" id="contact-title">Connect with Tharun</h2>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-in-up animation-delay-200">Let's Collaborate or Create</p>
          <p className="text-sm text-muted-foreground mt-2 opacity-0 animate-fade-in-up animation-delay-400">Feel free to reach out for professional inquiries, collaborations, or simply to connect!</p>
        </div>

        <div className="flex justify-center max-w-4xl mx-auto opacity-0 animate-scale-in animation-delay-600">
            <div>
                <h3 className="text-2xl font-light mb-6">Get In Touch</h3>
                <div className="space-y-4">
                    <a href="mailto:tharun.nstr@gmail.com" className="flex items-center gap-4 group hover:scale-105 transition-all duration-300 p-2 rounded-lg hover:bg-secondary/20">
                        <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300"/>
                        <span className="text-lg group-hover:underline group-hover:text-primary transition-colors duration-300">tharun.nstr@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-4 hover:scale-105 transition-all duration-300 p-2 rounded-lg hover:bg-secondary/20">
                        <Mail className="h-6 w-6 text-primary hover:scale-110 transition-transform duration-300"/>
                        <span className="text-lg">+49 1786320705</span>
                    </div>
                    <div className="flex items-center gap-4 hover:scale-105 transition-all duration-300 p-2 rounded-lg hover:bg-secondary/20">
                        <MapPin className="h-6 w-6 text-primary hover:scale-110 transition-transform duration-300"/>
                        <span className="text-lg">Augsburg, Germany</span>
                    </div>
                    <a href="https://www.instagram.com/tharuns_perspective" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group hover:scale-105 transition-all duration-300 p-2 rounded-lg hover:bg-secondary/20">
                        <Instagram className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300"/>
                        <span className="text-lg group-hover:underline group-hover:text-primary transition-colors duration-300">@tharuns_perspective</span>
                    </a>
                    <a href="https://www.linkedin.com/in/tharun-arety/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group hover:scale-105 transition-all duration-300 p-2 rounded-lg hover:bg-secondary/20">
                        <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300"/>
                        <span className="text-lg group-hover:underline group-hover:text-primary transition-colors duration-300">Tharun Arety</span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
