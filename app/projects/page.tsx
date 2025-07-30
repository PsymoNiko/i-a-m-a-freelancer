"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  DollarSign,
  MessageCircle,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "E-commerce Website Development",
      client: "TechStart Inc.",
      clientAvatar: "/placeholder.svg?height=40&width=40",
      status: "in-progress",
      priority: "high",
      budget: 2500,
      paid: 1250,
      deadline: "2024-02-15",
      startDate: "2024-01-15",
      progress: 75,
      description: "Full-stack e-commerce platform with payment integration and admin dashboard",
      skills: ["React", "Node.js", "MongoDB", "Stripe"],
      lastActivity: "2 hours ago",
    },
    {
      id: 2,
      title: "Mobile App UI Design",
      client: "Creative Agency",
      clientAvatar: "/placeholder.svg?height=40&width=40",
      status: "completed",
      priority: "medium",
      budget: 1800,
      paid: 1800,
      deadline: "2024-01-30",
      startDate: "2024-01-10",
      progress: 100,
      description: "iOS and Android app interface design with prototyping",
      skills: ["Figma", "UI Design", "Prototyping"],
      lastActivity: "1 week ago",
    },
    {
      id: 3,
      title: "Brand Identity Package",
      client: "StartupXYZ",
      clientAvatar: "/placeholder.svg?height=40&width=40",
      status: "pending",
      priority: "low",
      budget: 1200,
      paid: 0,
      deadline: "2024-02-20",
      startDate: "2024-02-01",
      progress: 25,
      description: "Complete brand identity including logo, business cards, and guidelines",
      skills: ["Branding", "Logo Design", "Print Design"],
      lastActivity: "1 day ago",
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      client: "DataCorp",
      clientAvatar: "/placeholder.svg?height=40&width=40",
      status: "in-progress",
      priority: "high",
      budget: 3200,
      paid: 800,
      deadline: "2024-03-01",
      startDate: "2024-01-20",
      progress: 45,
      description: "Interactive dashboard for business intelligence and reporting",
      skills: ["React", "D3.js", "Python", "SQL"],
      lastActivity: "4 hours ago",
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "on-hold":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-orange-100 text-orange-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const activeProjects = projects.filter((p) => p.status === "in-progress" || p.status === "pending")
  const completedProjects = projects.filter((p) => p.status === "completed")
  const totalEarnings = projects.reduce((sum, p) => sum + p.paid, 0)
  const pendingPayments = projects.reduce((sum, p) => sum + (p.budget - p.paid), 0)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center">
          <Link href="/dashboard" className="flex items-center space-x-2 mr-6">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6" />
            <span className="font-bold text-xl">My Projects</span>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Stats Overview */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeProjects.length}</div>
                <p className="text-xs text-muted-foreground">Currently working on</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{completedProjects.length}</div>
                <p className="text-xs text-muted-foreground">Successfully delivered</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalEarnings.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">From completed projects</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${pendingPayments.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Awaiting payment</p>
              </CardContent>
            </Card>
          </div>

          {/* Projects Tabs */}
          <Tabs defaultValue="active" className="space-y-4">
            <TabsList>
              <TabsTrigger value="active">Active ({activeProjects.length})</TabsTrigger>
              <TabsTrigger value="completed">Completed ({completedProjects.length})</TabsTrigger>
              <TabsTrigger value="all">All Projects ({projects.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-4">
              <div className="grid gap-6">
                {activeProjects.map((project) => (
                  <Card key={project.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={project.clientAvatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {project.client
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{project.title}</CardTitle>
                            <CardDescription className="flex items-center space-x-4 mt-1">
                              <span>{project.client}</span>
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                Due: {new Date(project.deadline).toLocaleDateString()}
                              </span>
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getPriorityColor(project.priority)}>{project.priority}</Badge>
                          <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Budget:</span>
                          <div className="font-semibold">${project.budget.toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Paid:</span>
                          <div className="font-semibold text-green-600">${project.paid.toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Progress:</span>
                          <div className="font-semibold">{project.progress}%</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Last Activity:</span>
                          <div className="font-semibold">{project.lastActivity}</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Message Client
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        <Button size="sm">Update Progress</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              <div className="grid gap-6">
                {completedProjects.map((project) => (
                  <Card key={project.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={project.clientAvatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {project.client
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{project.title}</CardTitle>
                            <CardDescription className="flex items-center space-x-4 mt-1">
                              <span>{project.client}</span>
                              <span className="flex items-center text-green-600">
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Completed
                              </span>
                            </CardDescription>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-green-600">${project.budget.toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">Earned</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          View Project
                        </Button>
                        <Button variant="outline" size="sm">
                          Request Review
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all" className="space-y-4">
              <div className="grid gap-6">
                {projects.map((project) => (
                  <Card key={project.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={project.clientAvatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {project.client
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{project.title}</CardTitle>
                            <CardDescription className="flex items-center space-x-4 mt-1">
                              <span>{project.client}</span>
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {project.status === "completed"
                                  ? "Completed"
                                  : `Due: ${new Date(project.deadline).toLocaleDateString()}`}
                              </span>
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getPriorityColor(project.priority)}>{project.priority}</Badge>
                          <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                          <div className="text-right">
                            <div className="font-semibold">${project.budget.toLocaleString()}</div>
                            <div className="text-sm text-muted-foreground">${project.paid.toLocaleString()} paid</div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {project.status !== "completed" && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
