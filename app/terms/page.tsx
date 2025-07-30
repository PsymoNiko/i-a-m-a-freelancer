import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
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
            <span className="font-bold text-xl">Terms of Service</span>
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
          <h1>Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using I Am A Freelancer ("the Platform"), you accept and agree to be bound by the terms and
            provision of this agreement.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily use the Platform for personal, non-commercial transitory viewing only.
            This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>modify or copy the materials</li>
            <li>use the materials for any commercial purpose or for any public display</li>
            <li>attempt to reverse engineer any software contained on the Platform</li>
            <li>remove any copyright or other proprietary notations from the materials</li>
          </ul>

          <h2>3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at
            all times. You are responsible for safeguarding the password and for all activities that occur under your
            account.
          </p>

          <h2>4. Freelancer Services</h2>
          <p>
            Freelancers are independent contractors and not employees of I Am A Freelancer. The Platform serves as a
            marketplace to connect freelancers with clients but does not employ freelancers directly.
          </p>

          <h2>5. Payment Terms</h2>
          <p>
            All payments are processed through our secure payment system. Platform fees apply as outlined in our pricing
            structure. Refunds are subject to our refund policy.
          </p>

          <h2>6. Prohibited Uses</h2>
          <p>You may not use our Platform:</p>
          <ul>
            <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
            <li>
              To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances
            </li>
            <li>
              To infringe upon or violate our intellectual property rights or the intellectual property rights of others
            </li>
            <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
            <li>To submit false or misleading information</li>
          </ul>

          <h2>7. Content</h2>
          <p>
            Our Platform allows you to post, link, store, share and otherwise make available certain information, text,
            graphics, videos, or other material. You are responsible for the content that you post to the Platform.
          </p>

          <h2>8. Privacy Policy</h2>
          <p>
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
            Platform, to understand our practices.
          </p>

          <h2>9. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason
            whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2>10. Disclaimer</h2>
          <p>
            The information on this Platform is provided on an 'as is' basis. To the fullest extent permitted by law,
            this Company excludes all representations, warranties, conditions and terms.
          </p>

          <h2>11. Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <ul>
            <li>Email: legal@iamafreelancer.com</li>
            <li>Address: 123 Business St, San Francisco, CA 94105</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
