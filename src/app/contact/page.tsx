import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  // Basic form submission handler (client-side for now, could be a server action)
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Add form submission logic here, e.g., send to an API endpoint or use a service
    alert('Thank you for your message! We will get back to you soon.');
    (event.target as HTMLFormElement).reset();
  }

  return (
    <div className="space-y-12">
      <SectionTitle
        title="Get In Touch"
        subtitle="Have questions, suggestions, or just want to say hello? We'd love to hear from you!"
      />

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
            <CardDescription>Reach out to us through any of the following channels.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email Us</h3>
                <a href="mailto:info@wanderlustmyanmar.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@wanderlustmyanmar.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Call Us</h3>
                <p className="text-muted-foreground">+95 9 123 456 789</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Our Office</h3>
                <p className="text-muted-foreground">123 Wanderlust Street, Yangon, Myanmar</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="font-semibold">Full Name</Label>
                <Input type="text" id="name" name="name" required className="mt-1" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="email" className="font-semibold">Email Address</Label>
                <Input type="email" id="email" name="email" required className="mt-1" placeholder="you@example.com" />
              </div>
              <div>
                <Label htmlFor="subject" className="font-semibold">Subject</Label>
                <Input type="text" id="subject" name="subject" required className="mt-1" placeholder="Inquiry about Bagan tours" />
              </div>
              <div>
                <Label htmlFor="message" className="font-semibold">Your Message</Label>
                <Textarea id="message" name="message" rows={5} required className="mt-1" placeholder="Tell us more..." />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="mr-2 h-5 w-5" /> Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
