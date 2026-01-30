import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    value: "ujjalchatterjee08@gmail.com",
    href: "mailto:ujjalchatterjee08@gmail.com",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    value: "+91 7059377035",
    href: "tel:+917059377035",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location",
    value: "West Bengal, Kolkata",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/UjjalCha1",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://linkedin.com/in/ujjalkrchatterjee",
  },
];

export function ContactSection() {
  return (
    <Section id="contact">
      <SectionTitle
        title="Get In Touch"
        subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
      />
      {/* <div className="mb-8 ">
        <h4 className="text-lg font-medium mb-3">Find me on</h4> */}
      <div className="flex gap-3 justify-center mb-12">
        {socialLinks.map((link) => (
          <Button
            key={link.name}
            variant="outline"
            size="icon"
            className="rounded-full hover-scale"
            asChild
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          </Button>
        ))}
      </div>
      {/* </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>

          <div className="grid gap-6 mb-8">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border border-border bg-card">
                <CardContent className="flex items-center p-4">
                  <div className="mr-4 text-primary">{item.icon}</div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* <div>
          <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
          <ContactForm />
        </div> */}
      </div>
    </Section>
  );
}
