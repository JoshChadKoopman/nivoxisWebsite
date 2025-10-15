import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    employees: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // In production, this would submit to a backend
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({
      name: "",
      company: "",
      employees: "",
      email: "",
      phone: "",
      interest: "",
      message: ""
    });
  };

  const whatsappNumber = "27824643384";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%2C%20I'm%20interested%20in%20Nivoxis%20security%20awareness%20training`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-muted to-background py-16">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl">
            <h1 className="mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Ready to reduce your human risk? Contact us for pricing, a demo, 
              or to book a 15-minute consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a 
                        href="tel:+27824643384" 
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        +27 82 464 3384
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a 
                        href="mailto:info@nivoixstraining.com" 
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        info@nivoixstraining.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        South Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">WhatsApp</h4>
                      <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Book a 15-min Consult</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Schedule a quick call to discuss your security awareness needs.
                  </p>
                  <Button variant="accent" className="w-full" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      View Calendar
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Calendar link placeholder
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your organisation"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="employees">Number of Employees</Label>
                      <Select value={formData.employees} onValueChange={(value) => setFormData({ ...formData, employees: value })}>
                        <SelectTrigger id="employees">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10-50">10-50 employees</SelectItem>
                          <SelectItem value="50-200">50-200 employees</SelectItem>
                          <SelectItem value="200-500">200-500 employees</SelectItem>
                          <SelectItem value="500+">500+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@company.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+27 XX XXX XXXX"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest">Area of Interest</Label>
                      <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                        <SelectTrigger id="interest">
                          <SelectValue placeholder="What are you interested in?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="training">Training Packages</SelectItem>
                          <SelectItem value="phishing">Phishing Simulations</SelectItem>
                          <SelectItem value="compliance">POPIA Compliance</SelectItem>
                          <SelectItem value="demo">Product Demo</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your security awareness needs..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" variant="accent" size="lg" className="w-full">
                      Send Message
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We typically respond within 24 hours
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="bg-muted py-12">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-2">Prefer to chat immediately?</h3>
              <p className="text-muted-foreground">Connect with us on WhatsApp for quick questions</p>
            </div>
            <Button variant="accent" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
