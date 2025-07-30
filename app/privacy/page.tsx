import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2 mr-6">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl">Privacy Policy</span>
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, update your profile,
            or contact us for support.
          </p>

          <h3>Personal Information</h3>
          <ul>
            <li>Name and contact information</li>
            <li>Professional information and skills</li>
            <li>Payment information</li>
            <li>Profile photos and portfolio items</li>
          </ul>

          <h3>Usage Information</h3>
          <ul>
            <li>How you interact with our Platform</li>
            <li>Pages visited and features used</li>
            <li>Search queries and filters applied</li>
            <li>Communication between users</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices and support messages</li>
            <li>Communicate with you about products, services, and events</li>
            <li>Monitor and analyze trends and usage</li>
            <li>Detect, investigate, and prevent fraudulent transactions</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We may share your information in the following situations:</p>
          <ul>
            <li>With other users as part of the Platform's functionality</li>
            <li>With service providers who assist in our operations</li>
            <li>For legal reasons or to protect rights and safety</li>
            <li>In connection with a merger, sale, or acquisition</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and update your personal information</li>
            <li>Delete your account and associated data</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data</li>
            <li>Object to processing of your data</li>
          </ul>

          <h2>6. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to collect and use personal information about you. You can
            control cookies through your browser settings.
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            Our Platform may contain links to third-party websites or services. We are not responsible for the privacy
            practices of these third parties.
          </p>

          <h2>8. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your own. We ensure appropriate
            safeguards are in place for such transfers.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our Platform is not intended for children under 13. We do not knowingly collect personal information from
            children under 13.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            policy on this page.
          </p>

          <h2>11. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <ul>
            <li>Email: privacy@iamafreelancer.com</li>
            <li>Address: 123 Business St, San Francisco, CA 94105</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
