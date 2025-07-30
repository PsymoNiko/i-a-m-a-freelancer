"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Star,
  MapPin,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowLeft,
  MessageCircle,
  Heart,
  Share2,
} from "lucide-react"
import Link from "next/link"

export default function FreelancerPreview() {
  const skills = ["React", "Node.js", "TypeScript", "Python", "AWS", "MongoDB", "GraphQL", "Docker"]
  const portfolio = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["React", "Node.js", "Stripe"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Vue.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["React", "D3.js", "Python"],
    },
  ]

  const reviews = [
    {
      id: 1,
      client: "Sarah Johnson",
      rating: 5,
      comment: "Excellent work! John delivered exactly what we needed on time and within budget.",
      project: "E-commerce Website",
      date: "2 weeks ago",
    },
    {
      id: 2,
      client: "Mike Chen",
      rating: 5,
      comment: "Great communication and technical skills. Would definitely work with again.",
      project: "Mobile App Backend",
      date: "1 month ago",
    },
    {
      id: 3,
      client: "Emily Davis",
      rating: 4,
      comment: "Professional and reliable. Delivered quality work as promised.",
      project: "Website Redesign",
      date: "2 months ago",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center">
          <Link href="/dashboard" className="flex items-center space-x-2 mr-6">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>
          <div className="flex items-center space-x-2 flex-1">
            <span className="font-medium">Profile Preview</span>
            <Badge variant="secondary">Public View</Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button size="sm" asChild>
              <Link href="/order/john-doe">Hire Me</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Header */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <Avatar className="h-32 w-32 mx-auto md:mx-0">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold">John Doe</h1>
                      <p className="text-xl text-muted-foreground">Full Stack Developer</p>
                    </div>
                    <div className="flex items-center justify-center md:justify-end space-x-2 mt-4 md:mt-0">
                      <Button variant="outline" size="sm">
                        <Heart className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                      <Button size="sm">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      San Francisco, CA
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Available
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Usually responds in 2 hours
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="font-medium">4.9</span>
                      <span className="text-muted-foreground ml-1">(28 reviews)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                      <span>28 projects completed</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Experienced full-stack developer with 5+ years of expertise in building scalable web applications.
                    Specialized in React, Node.js, and cloud technologies. Passionate about creating efficient,
                    user-friendly solutions that drive business growth.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing & Availability */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Hourly Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$75/hour</div>
                <p className="text-sm text-muted-foreground">Negotiable for long-term projects</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">Available</div>
                <p className="text-sm text-muted-foreground">30+ hours/week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2 hours</div>
                <p className="text-sm text-muted-foreground">Average response time</p>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Skills & Expertise</CardTitle>
              <CardDescription>Technologies and tools I work with</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Portfolio */}
          <Card>
            <CardHeader>
              <CardTitle>Portfolio</CardTitle>
              <CardDescription>Recent projects and work samples</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {portfolio.map((project) => (
                  <div key={project.id} className="group cursor-pointer">
                    <div className="aspect-video bg-muted rounded-lg mb-3 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h4 className="font-medium mb-1">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card>
            <CardHeader>
              <CardTitle>Client Reviews</CardTitle>
              <CardDescription>What clients say about working with me</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={review.id}>
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>
                          {review.client
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-medium">{review.client}</h4>
                            <p className="text-sm text-muted-foreground">{review.project}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-4 w-4 ${
                                    star <= review.rating ? "fill-primary text-primary" : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                          </div>
                        </div>
                        <p className="text-sm">{review.comment}</p>
                      </div>
                    </div>
                    {index < reviews.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold">Ready to start your project?</h3>
                <p className="text-muted-foreground">Let's discuss your requirements and bring your ideas to life.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/order/john-doe">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Hire Now
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
