import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  UserPlus,
  Search,
  MessageCircle,
  FileText,
  CreditCard,
  CheckCircle,
  Star,
  Shield,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function HowItWorks() {
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
            <span className="font-bold text-xl">How It Works</span>
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">How I Am A Freelancer Works</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with talented freelancers or find your next project in just a few simple steps
            </p>
          </div>

          {/* For Clients */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">For Clients</h2>
              <p className="text-muted-foreground">Find and hire the perfect freelancer for your project</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>1. Browse & Search</CardTitle>
                  <CardDescription>
                    Browse our curated list of freelancers or search by skills, location, and budget
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>2. Connect & Discuss</CardTitle>
                  <CardDescription>
                    Message freelancers directly to discuss your project requirements and timeline
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CreditCard className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>3. Hire & Pay Securely</CardTitle>
                  <CardDescription>
                    Hire your chosen freelancer and pay securely through our escrow system
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* For Freelancers */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">For Freelancers</h2>
              <p className="text-muted-foreground">Build your freelance career and find great clients</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <UserPlus className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>1. Create Your Profile</CardTitle>
                  <CardDescription>
                    Build a compelling profile showcasing your skills, experience, and portfolio
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>2. Get Discovered</CardTitle>
                  <CardDescription>
                    Clients will find you through search or you can apply to posted projects
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>3. Complete & Get Paid</CardTitle>
                  <CardDescription>Deliver great work, build your reputation, and get paid on time</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Features */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform</h2>
              <p className="text-muted-foreground">Built with freelancers and clients in mind</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Secure Payments</CardTitle>
                  <CardDescription>
                    All payments are protected by our escrow system. Money is only released when work is completed.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Star className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Quality Assurance</CardTitle>
                  <CardDescription>
                    Our rating system and verification process ensures you work with top-quality professionals.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>24/7 Support</CardTitle>
                  <CardDescription>
                    Our support team is available around the clock to help resolve any issues.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <MessageCircle className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Direct Communication</CardTitle>
                  <CardDescription>
                    Communicate directly with freelancers without any middleman interference.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Project Management</CardTitle>
                  <CardDescription>
                    Built-in tools to track progress, manage deadlines, and collaborate effectively.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Satisfaction Guarantee</CardTitle>
                  <CardDescription>
                    If you're not satisfied with the work, we'll help you find a solution or provide a refund.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-6 bg-muted/50 rounded-lg p-12">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of successful freelancers and clients who have found success on our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/auth/signup">Join as Freelancer</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/freelancers">Find Freelancers</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
