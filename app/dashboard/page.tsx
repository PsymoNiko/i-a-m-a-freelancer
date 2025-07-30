"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  User,
  Settings,
  BarChart3,
  FileText,
  Star,
  DollarSign,
  TrendingUp,
  Eye,
  Edit,
  Briefcase,
  LogOut,
} from "lucide-react"
import Link from "next/link"

export default function FreelancerDashboard() {
  const [profileViews] = useState(247)
  const [totalEarnings] = useState(12450)
  const [activeProjects] = useState(3)
  const [completedProjects] = useState(28)

  const recentProjects = [
    {
      id: 1,
      title: "E-commerce Website",
      client: "TechStart Inc.",
      status: "in-progress",
      progress: 75,
      budget: 2500,
    },
    {
      id: 2,
      title: "Mobile App Design",
      client: "Creative Agency",
      status: "completed",
      progress: 100,
      budget: 1800,
    },
    {
      id: 3,
      title: "Brand Identity",
      client: "StartupXYZ",
      status: "in-progress",
      progress: 45,
      budget: 1200,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center">
          <div className="flex items-center space-x-2 mr-6">
            <Briefcase className="h-6 w-6" />
            <span className="font-bold text-xl">I Am A Freelancer</span>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
            <Link href="/dashboard" className="text-primary">
              Dashboard
            </Link>
            <Link href="/profile/preview" className="text-muted-foreground hover:text-foreground">
              Preview Profile
            </Link>
            <Link href="/projects" className="text-muted-foreground hover:text-foreground">
              Projects
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Welcome Section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, John!</h1>
              <p className="text-muted-foreground">Here's what's happening with your freelance business</p>
            </div>
            <Button asChild>
              <Link href="/profile/edit">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Link>
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{profileViews}</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalEarnings.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">+8% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeProjects}</div>
                <p className="text-xs text-muted-foreground">2 due this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{completedProjects}</div>
                <p className="text-xs text-muted-foreground">100% success rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="projects">Recent Projects</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="profile">Profile Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Performance</CardTitle>
                    <CardDescription>Your profile metrics this month</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Profile Completeness</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Client Response Rate</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Project Success Rate</span>
                        <span>100%</span>
                      </div>
                      <Progress value={100} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Manage your freelance business</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
                      <Link href="/profile/preview">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview Public Profile
                      </Link>
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
                      <Link href="/profile/edit">
                        <User className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Link>
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Update Portfolio
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      Account Settings
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                  <CardDescription>Your latest project activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentProjects.map((project) => (
                      <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <h4 className="font-medium">{project.title}</h4>
                          <p className="text-sm text-muted-foreground">{project.client}</p>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant={project.status === "completed" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {project.status}
                            </Badge>
                            <span className="text-sm font-medium">${project.budget.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="text-right space-y-1">
                          <div className="text-sm font-medium">{project.progress}%</div>
                          <Progress value={project.progress} className="w-20" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Earnings Overview</CardTitle>
                    <CardDescription>Your income trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>This Month</span>
                        <span className="font-bold">$3,200</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Last Month</span>
                        <span className="font-bold">$2,800</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Average Monthly</span>
                        <span className="font-bold">$2,950</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Client Ratings</CardTitle>
                    <CardDescription>Your reputation score</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="font-bold">4.9/5</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Based on 28 completed projects</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="profile" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>Manage your public profile information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">John Doe</h3>
                      <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                      <Button size="sm" className="mt-2">
                        Change Photo
                      </Button>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <Button className="justify-start bg-transparent" variant="outline">
                      <User className="h-4 w-4 mr-2" />
                      Edit Personal Information
                    </Button>
                    <Button className="justify-start bg-transparent" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Update Skills & Experience
                    </Button>
                    <Button className="justify-start bg-transparent" variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      Privacy Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
