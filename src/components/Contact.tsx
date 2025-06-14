
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Camera } from "lucide-react";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // A real form would send this data to a server.
        // For now, we'll just log it and show a confirmation.
        console.log({ name, email, message });
        alert("Thank you for your message!");
        setName('');
        setEmail('');
        setMessage('');
    };

  return (
    <section id="contact" className="py-20 md:py-32 px-8 md:px-12 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-2">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">Ready to collaborate or discuss your next project?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
                <h3 className="text-2xl font-light mb-6">Contact Information</h3>
                <div className="space-y-4">
                    <a href="mailto:tharun.nstn@gmail.com" className="flex items-center gap-4 group">
                        <Mail className="h-6 w-6 text-primary"/>
                        <span className="text-lg group-hover:underline">tharun.nstn@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-4">
                        <MapPin className="h-6 w-6 text-primary"/>
                        <span className="text-lg">Ausburg, Germany</span>
                    </div>
                    <a href="https://www.instagram.com/tharuns_perspective" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                        <Camera className="h-6 w-6 text-primary"/>
                        <span className="text-lg group-hover:underline">@tharuns_perspective</span>
                    </a>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <Textarea placeholder="Message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
