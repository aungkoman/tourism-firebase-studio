import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfServicePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <SectionTitle
        title="Terms of Service"
        subtitle="Please read these terms carefully before using Wanderlust Myanmar."
      />

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">1. Acceptance of Terms</CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/80 leading-relaxed">
          <p>By accessing or using the Wanderlust Myanmar website and its services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, do not use the Service.</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">2. Use of the Service</CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/80 leading-relaxed space-y-3">
          <p>Wanderlust Myanmar provides information about travel in Myanmar, including an AI-powered trip planner. You agree to use the Service only for lawful purposes and in accordance with these Terms.</p>
          <p>You are responsible for any content you submit to the Service, including itinerary preferences and any communications.</p>
          <p>The AI Trip Planner provides suggestions based on the information you provide. Wanderlust Myanmar is not responsible for the accuracy, completeness, or suitability of any AI-generated itineraries. You should always verify critical information independently.</p>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">3. Intellectual Property</CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/80 leading-relaxed">
          <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Wanderlust Myanmar and its licensors. The Service is protected by copyright, trademark, and other laws of both Myanmar and foreign countries.</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">4. Disclaimer of Warranties</CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/80 leading-relaxed">
          <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Wanderlust Myanmar makes no warranties, expressed or implied, regarding the accuracy, reliability, or availability of the Service or its content. Your use of the Service is at your sole risk.</p>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">5. Limitation of Liability</CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/80 leading-relaxed">
          <p>In no event shall Wanderlust Myanmar, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">6. Changes to Terms</CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/80 leading-relaxed">
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">7. Governing Law</CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/80 leading-relaxed">
          <p>These Terms shall be governed and construed in accordance with the laws of Myanmar, without regard to its conflict of law provisions.</p>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">8. Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/80 leading-relaxed">
          <p>If you have any questions about these Terms, please contact us at <a href="mailto:legal@wanderlustmyanmar.com" className="text-accent hover:underline">legal@wanderlustmyanmar.com</a>.</p>
          <p className="mt-2">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </CardContent>
      </Card>
    </div>
  );
}
