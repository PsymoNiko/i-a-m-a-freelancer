import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Check, Star, Zap, Crown } from "lucide-react"
import Link from "next/link"

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for getting started",
      icon: Star,
      features: [
        "Create freelancer profile",
        "Apply to unlimited projects",
        "Basic portfolio showcase",
        "Standard support",
        "5% platform fee on earnings",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For serious freelancers",
      icon: Zap,
      features: [
        "Everything in Basic",
        "Featured profile placement",
        "Advanced portfolio tools",
        "Priority support",
        "3% platform fee on earnings",
        "Custom profile URL",
        "Analytics dashboard",
      ],
      cta: "Start Pro Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "/month",
      description: "For agencies and teams",
      icon: Crown,
      features: [
        "Everything in Pro",
        "Team collaboration tools",
        "White-label solutions",
        "Dedicated account manager",
        "1% platform fee on earnings",
        "Custom integrations",
        "Advanced reporting",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const clientFeatures = [
    "Post unlimited projects",
    "Access to all freelancers",
    "Secure payment system",
    "Project management tools",
    "24/7 customer support",
    "Dispute resolution service",
  ]

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
            <span className="font-bold text-xl">Pricing</span>
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for you. No hidden fees, no surprises.
            </p>
          </div>

          {/* Freelancer Plans */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">For Freelancers</h2>
              <p className="text-muted-foreground">Grow your freelance business with our flexible plans</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {plans.map((plan) => {
                const Icon = plan.icon
                return (
                  <Card key={plan.name} className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
                    )}
                    <CardHeader className="text-center">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="pt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                        <Link href="/auth/signup">{plan.cta}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          {/* Client Pricing */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">For Clients</h2>
              <p className="text-muted-foreground">Hire freelancers with confidence</p>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Always Free for Clients</CardTitle>
                <CardDescription>No subscription fees, no hidden costs. Only pay for the work you get.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  {clientFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/auth/signup">Start Hiring Today</Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* FAQ */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do platform fees work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Platform fees are deducted from freelancer earnings based on their plan. Clients never pay platform
                    fees.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I change plans anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is there a free trial?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pro and Enterprise plans come with a 14-day free trial. No credit card required.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We accept all major credit cards, PayPal, and bank transfers for subscription payments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center space-y-6 bg-muted/50 rounded-lg p-12">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of freelancers and clients who trust our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/auth/signup">Start Free Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/freelancers">Browse Freelancers</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
