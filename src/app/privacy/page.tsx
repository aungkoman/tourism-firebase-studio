import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <SectionTitle
        title="Privacy Policy"
        subtitle="Your privacy is important to us. This policy explains how we collect, use, and protect your personal information."
      />

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">1. Information We Collect</CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/80 leading-relaxed space-y-3">
          <p>We collect information you provide directly to us, such as when you create an account, use our trip planner, subscribe to our newsletter, or contact us for support.</p>
          <p>This information may include your name, email address, travel preferences, and any other details you choose to provide.</p>
          <p>We may also automatically collect certain information when you visit our website, such as your IP address, browser type, operating system, and browsing behavior.</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">2. How We Use Your Information</CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/80 leading-relaxed">
          <ul className="list-disc list-inside space-y-2">
            <li>To provide, maintain, and improve our services, including the AI Trip Planner.</li>
            <li>To personalize your experience on our website.</li>
            <li>To communicate with you, including responding to your inquiries and sending you updates or promotional materials (if you opt-in).</li>
            <li>To analyze website usage and trends to enhance user experience.</li>
            <li>To protect the security and integrity of our website and users.</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">3. Information Sharing</CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/80 leading-relaxed">
          <p>We do not sell your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and providing services, under strict confidentiality agreements. We may also share information if required by law or to protect our rights.</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">4. Your Choices</CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/80 leading-relaxed">
          <p>You can update your account information and preferences at any time. You may also unsubscribe from our marketing communications by following the instructions in those emails.</p>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">5. Data Security</CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/80 leading-relaxed">
          <p>We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">6. Changes to This Policy</CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/80 leading-relaxed">
          <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website. Your continued use of our services after such changes constitutes your acceptance of the new policy.</p>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">7. Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/80 leading-relaxed">
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@wanderlustmyanmar.com" className="text-accent hover:underline">privacy@wanderlustmyanmar.com</a>.</p>
          <p className="mt-2">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </CardContent>
      </Card>
    </div>
  );
}
