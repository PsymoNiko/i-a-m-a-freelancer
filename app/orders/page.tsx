"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ShoppingCart,
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  ArrowLeft,
  Calendar,
  User,
} from "lucide-react"
import Link from "next/link"

export default function OrderManagement() {
  const [orders, setOrders] = useState([
    {
      id: "ORD-001",
      title: "E-commerce Website Development",
      client: "TechStart Inc.",
      status: "in-progress",
      priority: "high",
      budget: 2500,
      deadline: "2024-02-15",
      progress: 65,
      description: "Full-stack e-commerce platform with payment integration",
    },
    {
      id: "ORD-002",
      title: "Mobile App UI Design",
      client: "Creative Agency",
      status: "pending",
      priority: "medium",
      budget: 1200,
      deadline: "2024-02-20",
      progress: 0,
      description: "iOS and Android app interface design",
    },
    {
      id: "ORD-003",
      title: "Brand Identity Package",
      client: "StartupXYZ",
      status: "completed",
      priority: "low",
      budget: 800,
      deadline: "2024-01-30",
      progress: 100,
      description: "Logo, business cards, and brand guidelines",
    },
  ])

  const [newOrder, setNewOrder] = useState({
    title: "",
    client: "",
    budget: "",
    deadline: "",
    priority: "medium",
    description: "",
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
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

  const handleCreateOrder = () => {
    const order = {
      id: `ORD-${String(orders.length + 1).padStart(3, "0")}`,
      ...newOrder,
      status: "pending",
      progress: 0,
      budget: Number.parseInt(newOrder.budget),
    }
    setOrders([...orders, order])
    setNewOrder({
      title: "",
      client: "",
      budget: "",
      deadline: "",
      priority: "medium",
      description: "",
    })
  }

  const activeOrders = orders.filter((order) => order.status !== "completed")
  const completedOrders = orders.filter((order) => order.status === "completed")
  const totalRevenue = orders
    .filter((order) => order.status === "completed")
    .reduce((sum, order) => sum + order.budget, 0)
  const pendingRevenue = orders
    .filter((order) => order.status !== "completed")
    .reduce((sum, order) => sum + order.budget, 0)

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
            <ShoppingCart className="h-6 w-6" />
            <span className="font-bold text-xl">Order Management</span>
          </div>
          <div className="ml-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Order
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create New Order</DialogTitle>
                  <DialogDescription>Add a new project order to your management system.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Project Title</Label>
                    <Input
                      id="title"
                      value={newOrder.title}
                      onChange={(e) => setNewOrder({ ...newOrder, title: e.target.value })}
                      placeholder="Enter project title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client">Client Name</Label>
                    <Input
                      id="client"
                      value={newOrder.client}
                      onChange={(e) => setNewOrder({ ...newOrder, client: e.target.value })}
                      placeholder="Enter client name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget ($)</Label>
                      <Input
                        id="budget"
                        type="number"
                        value={newOrder.budget}
                        onChange={(e) => setNewOrder({ ...newOrder, budget: e.target.value })}
                        placeholder="0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deadline">Deadline</Label>
                      <Input
                        id="deadline"
                        type="date"
                        value={newOrder.deadline}
                        onChange={(e) => setNewOrder({ ...newOrder, deadline: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select
                      value={newOrder.priority}
                      onValueChange={(value) => setNewOrder({ ...newOrder, priority: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newOrder.description}
                      onChange={(e) => setNewOrder({ ...newOrder, description: e.target.value })}
                      placeholder="Project description..."
                    />
                  </div>
                </div>
                <Button onClick={handleCreateOrder} className="w-full">
                  Create Order
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Stats Overview */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeOrders.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{completedOrders.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Revenue</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${pendingRevenue.toLocaleString()}</div>
              </CardContent>
            </Card>
          </div>

          {/* Orders Tabs */}
          <Tabs defaultValue="active" className="space-y-4">
            <TabsList>
              <TabsTrigger value="active">Active Orders ({activeOrders.length})</TabsTrigger>
              <TabsTrigger value="completed">Completed ({completedOrders.length})</TabsTrigger>
              <TabsTrigger value="all">All Orders ({orders.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-4">
              <div className="grid gap-4">
                {activeOrders.map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{order.title}</CardTitle>
                          <CardDescription className="flex items-center space-x-4 mt-1">
                            <span className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {order.client}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {order.deadline}
                            </span>
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getPriorityColor(order.priority)}>{order.priority}</Badge>
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{order.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-semibold">${order.budget.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Progress: {order.progress}%</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${order.progress}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              <div className="grid gap-4">
                {completedOrders.map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{order.title}</CardTitle>
                          <CardDescription className="flex items-center space-x-4 mt-1">
                            <span className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {order.client}
                            </span>
                            <span className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                              Completed
                            </span>
                          </CardDescription>
                        </div>
                        <div className="text-lg font-semibold text-green-600">${order.budget.toLocaleString()}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{order.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all" className="space-y-4">
              <div className="grid gap-4">
                {orders.map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{order.title}</CardTitle>
                          <CardDescription className="flex items-center space-x-4 mt-1">
                            <span className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {order.client}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {order.deadline}
                            </span>
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getPriorityColor(order.priority)}>{order.priority}</Badge>
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                          <div className="text-lg font-semibold">${order.budget.toLocaleString()}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{order.description}</p>
                      {order.status !== "completed" && (
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${order.progress}%` }}
                          ></div>
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
