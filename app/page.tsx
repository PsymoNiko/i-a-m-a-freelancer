import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Briefcase, Star, Globe, Shield, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Briefcase className="h-6 w-6" />
              <span className="font-bold text-xl">I Am A Freelancer</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/freelancers" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Browse Talent
              </Link>
              <Link href="/how-it-works" className="transition-colors hover:text-foreground/80 text-foreground/60">
                How it works
              </Link>
              <Link href="/pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Pricing
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  <Star className="w-3 h-3 mr-1" />
                  Trusted by 50,000+ freelancers
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Turn your skills into
                  <span className="text-primary"> success</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Connect with clients worldwide, showcase your expertise, and build a thriving freelance career. Join
                  the platform that puts freelancers first.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="text-base px-8" asChild>
                  <Link href="/auth/signup">
                    Start Freelancing Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8 bg-transparent" asChild>
                  <Link href="/freelancers">Browse Talent</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">Free to join • No setup fees • Get paid securely</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything you need to succeed</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides all the tools and support you need to build and grow your freelance business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Globe className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Global Opportunities</CardTitle>
                  <CardDescription>
                    Access clients from around the world and work on projects that match your skills and interests.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Secure Payments</CardTitle>
                  <CardDescription>
                    Get paid safely and on time with our escrow system and multiple payment options.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Smart Matching</CardTitle>
                  <CardDescription>
                    Our AI-powered system connects you with the right clients based on your skills and preferences.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How it works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started in minutes and begin earning from your skills.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Create Your Profile</h3>
                <p className="text-muted-foreground">
                  Showcase your skills, experience, and portfolio to attract the right clients.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Find Great Projects</h3>
                <p className="text-muted-foreground">
                  Browse opportunities or let clients find you. Apply to projects that match your expertise.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Get Paid</h3>
                <p className="text-muted-foreground">
                  Complete your work, get approved, and receive secure payments directly to your account.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why freelancers choose us</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join thousands of successful freelancers who have built thriving careers on our platform.
                  </p>
                </div>
                <ul className="grid gap-4 py-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>No bidding wars - fair pricing for quality work</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Direct communication with clients</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>24/7 support and dispute resolution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Build long-term client relationships</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/auth/signup">Join as Freelancer</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/freelancers">Browse Talent</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  <Card className="text-center p-4">
                    <CardContent className="p-0">
                      <div className="text-2xl font-bold text-primary">50K+</div>
                      <div className="text-sm text-muted-foreground">Active Freelancers</div>
                    </CardContent>
                  </Card>
                  <Card className="text-center p-4">
                    <CardContent className="p-0">
                      <div className="text-2xl font-bold text-primary">$2M+</div>
                      <div className="text-sm text-muted-foreground">Paid to Freelancers</div>
                    </CardContent>
                  </Card>
                  <Card className="text-center p-4">
                    <CardContent className="p-0">
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </CardContent>
                  </Card>
                  <Card className="text-center p-4">
                    <CardContent className="p-0">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Support Available</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 I Am A Freelancer. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/terms" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-xs hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
