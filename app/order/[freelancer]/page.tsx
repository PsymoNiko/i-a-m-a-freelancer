"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, CreditCard, Shield, Clock, CheckCircle, ArrowLeft, Star } from "lucide-react"
import Link from "next/link"

export default function OrderProject() {
  const [projectType, setProjectType] = useState("")
  const [budget, setBudget] = useState("")
  const [timeline, setTimeline] = useState("")
  const [description, setDescription] = useState("")
  const [requirements, setRequirements] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const packages = [
    {
      name: "Basic",
      price: 500,
      delivery: "5 days",
      features: ["Basic website", "Responsive design", "3 pages", "Basic SEO"],
    },
    {
      name: "Standard",
      price: 1200,
      delivery: "10 days",
      features: ["Advanced website", "Custom design", "5 pages", "SEO optimization", "Contact forms"],
      popular: true,
    },
    {
      name: "Premium",
      price: 2500,
      delivery: "15 days",
      features: [
        "Full-stack application",
        "Custom functionality",
        "Unlimited pages",
        "Advanced SEO",
        "Admin panel",
        "3 months support",
      ],
    },
  ]

  const [selectedPackage, setSelectedPackage] = useState("Standard")

  const handleSubmitOrder = () => {
    // Handle order submission
    console.log("Order submitted:", {
      projectType,
      budget,
      timeline,
      description,
      requirements,
      selectedPackage,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center">
          <Link href="/profile/preview" className="flex items-center space-x-2 mr-6">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Profile</span>
          </Link>
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-6 w-6" />
            <span className="font-bold text-xl">Order Project</span>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Order Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                  <CardDescription>Tell us about your project requirements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="project-type">Project Type</Label>
                    <Select value={projectType} onValueChange={setProjectType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Website Development</SelectItem>
                        <SelectItem value="webapp">Web Application</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                        <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                        <SelectItem value="api">API Development</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={budget} onValueChange={setBudget}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                          <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                          <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                          <SelectItem value="5000+">$5,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Select value={timeline} onValueChange={setTimeline}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-week">1 week</SelectItem>
                          <SelectItem value="2-weeks">2 weeks</SelectItem>
                          <SelectItem value="1-month">1 month</SelectItem>
                          <SelectItem value="2-months">2+ months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your project in detail..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements">Specific Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Any specific features, technologies, or requirements..."
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Package Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Choose a Package</CardTitle>
                  <CardDescription>Select the package that best fits your needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {packages.map((pkg) => (
                      <div
                        key={pkg.name}
                        className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
                          selectedPackage === pkg.name
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setSelectedPackage(pkg.name)}
                      >
                        {pkg.popular && (
                          <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
                        )}
                        <div className="text-center mb-4">
                          <h3 className="font-bold text-lg">{pkg.name}</h3>
                          <div className="text-2xl font-bold text-primary">${pkg.price}</div>
                          <p className="text-sm text-muted-foreground">Delivery in {pkg.delivery}</p>
                        </div>
                        <ul className="space-y-2">
                          {pkg.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Submit */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                    <Button
                      onClick={handleSubmitOrder}
                      disabled={!agreedToTerms || !projectType || !description}
                      className="w-full"
                      size="lg"
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Proceed to Payment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Freelancer Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Freelancer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">John Doe</h3>
                      <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                        Rating
                      </span>
                      <span>4.9/5 (28 reviews)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Response Time
                      </span>
                      <span>2 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Completed
                      </span>
                      <span>28 projects</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Package</span>
                      <span className="font-medium">{selectedPackage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price</span>
                      <span className="font-medium">
                        ${packages.find((p) => p.name === selectedPackage)?.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform Fee (5%)</span>
                      <span className="font-medium">
                        ${Math.round((packages.find((p) => p.name === selectedPackage)?.price || 0) * 0.05)}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>
                        $
                        {Math.round(
                          (packages.find((p) => p.name === selectedPackage)?.price || 0) * 1.05,
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Secure Payment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Money-back guarantee
                    </p>
                    <p className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Secure escrow payment
                    </p>
                    <p className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      24/7 customer support
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
