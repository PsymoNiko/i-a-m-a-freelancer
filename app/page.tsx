import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Briefcase, Star, Globe, Shield, Zap, FileText, GitFork, ShoppingCart } from "lucide-react"
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
              <Link href="/resume-review" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Resume Review
              </Link>
              <Link href="/enhanced-review" className="transition-colors hover:text-foreground/80 text-foreground/60">
                AI Review
              </Link>
              <Link href="/orders" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Orders
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm">Sign Up</Button>
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
                  Complete Freelancer Toolkit
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Perfect your profile,
                  <span className="text-primary"> manage your projects</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Get expert resume reviews, AI-powered suggestions, and streamlined order management all in one
                  platform.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full max-w-4xl">
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <FileText className="h-12 w-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Resume Review</CardTitle>
                    <CardDescription>Get professional feedback on your resume</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button asChild className="w-full">
                      <Link href="/resume-review">Start Review</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <GitFork className="h-12 w-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">AI-Enhanced Review</CardTitle>
                    <CardDescription>Advanced AI analysis with personalized tips</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button asChild className="w-full">
                      <Link href="/enhanced-review">Try AI Review</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Order Management</CardTitle>
                    <CardDescription>Track and manage your freelance projects</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button asChild className="w-full">
                      <Link href="/orders">Manage Orders</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything you need in one place</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From perfecting your professional profile to managing client relationships, we've got you covered.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Globe className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Professional Review System</CardTitle>
                  <CardDescription>
                    Get detailed feedback from industry experts on your resume, portfolio, and professional
                    presentation.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>AI-Powered Insights</CardTitle>
                  <CardDescription>
                    Advanced AI analysis provides personalized recommendations to optimize your profile for success.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Dynamic Order Processing</CardTitle>
                  <CardDescription>
                    Streamlined project management with real-time updates, milestone tracking, and secure payments.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to elevate your freelance career?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of successful freelancers using our comprehensive toolkit.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="text-base px-8">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8 bg-transparent">
                  View Demo
                </Button>
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
        </nav>
      </footer>
    </div>
  )
}
