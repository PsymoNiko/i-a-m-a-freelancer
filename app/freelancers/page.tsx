"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Search, Filter, Star, MapPin, Clock, ArrowLeft, Heart, MessageCircle, CheckCircle, Users } from "lucide-react"
import Link from "next/link"

// Mock freelancer data
const freelancers = [
  {
    id: 1,
    name: "John Doe",
    title: "Full Stack Developer",
    avatar: "/placeholder.svg?height=64&width=64",
    rating: 4.9,
    reviews: 28,
    hourlyRate: 75,
    location: "San Francisco, CA",
    responseTime: "2 hours",
    completedProjects: 45,
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    category: "development",
    experience: "expert",
    availability: "available",
    languages: ["English", "Spanish"],
    description: "Experienced full-stack developer specializing in modern web applications with React and Node.js.",
    verified: true,
    topRated: true,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "UI/UX Designer",
    avatar: "/placeholder.svg?height=64&width=64",
    rating: 4.8,
    reviews: 35,
    hourlyRate: 65,
    location: "New York, NY",
    responseTime: "1 hour",
    completedProjects: 52,
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
    category: "design",
    experience: "expert",
    availability: "available",
    languages: ["English"],
    description: "Creative UI/UX designer with expertise in creating intuitive and beautiful user experiences.",
    verified: true,
    topRated: true,
  },
  {
    id: 3,
    name: "Mike Chen",
    title: "Mobile App Developer",
    avatar: "/placeholder.svg?height=64&width=64",
    rating: 4.7,
    reviews: 22,
    hourlyRate: 80,
    location: "Seattle, WA",
    responseTime: "3 hours",
    completedProjects: 31,
    skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
    category: "development",
    experience: "intermediate",
    availability: "busy",
    languages: ["English", "Mandarin"],
    description: "Mobile app developer with 5+ years of experience in cross-platform development.",
    verified: true,
    topRated: false,
  },
  {
    id: 4,
    name: "Emily Davis",
    title: "Content Writer",
    avatar: "/placeholder.svg?height=64&width=64",
    rating: 4.9,
    reviews: 41,
    hourlyRate: 45,
    location: "Austin, TX",
    responseTime: "1 hour",
    completedProjects: 67,
    skills: ["Content Writing", "SEO", "Copywriting", "Blog Writing", "Technical Writing"],
    category: "writing",
    experience: "expert",
    availability: "available",
    languages: ["English"],
    description: "Professional content writer specializing in tech and business content with SEO expertise.",
    verified: true,
    topRated: true,
  },
  {
    id: 5,
    name: "Alex Rodriguez",
    title: "Digital Marketing Specialist",
    avatar: "/placeholder.svg?height=64&width=64",
    rating: 4.6,
    reviews: 19,
    hourlyRate: 55,
    location: "Miami, FL",
    responseTime: "4 hours",
    completedProjects: 28,
    skills: ["Google Ads", "Facebook Ads", "SEO", "Analytics", "Email Marketing"],
    category: "marketing",
    experience: "intermediate",
    availability: "available",
    languages: ["English", "Spanish"],
    description: "Digital marketing expert helping businesses grow their online presence and ROI.",
    verified: false,
    topRated: false,
  },
  {
    id: 6,
    name: "Lisa Wang",
    title: "Data Scientist",
    avatar: "/placeholder.svg?height=64&width=64",
    rating: 4.8,
    reviews: 15,
    hourlyRate: 90,
    location: "Boston, MA",
    responseTime: "2 hours",
    completedProjects: 23,
    skills: ["Python", "Machine Learning", "TensorFlow", "SQL", "Data Visualization"],
    category: "data",
    experience: "expert",
    availability: "available",
    languages: ["English", "Mandarin"],
    description: "Data scientist with expertise in machine learning and predictive analytics.",
    verified: true,
    topRated: true,
  },
  {
    id: 7,
    name: "David Brown",
    title: "DevOps Engineer",
    avatar: "/placeholder.svg?height=64&width=64",
    rating: 4.7,
    reviews: 33,
    hourlyRate: 85,
    location: "Denver, CO",
    responseTime: "3 hours",
    completedProjects: 39,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    category: "development",
    experience: "expert",
    availability: "busy",
    languages: ["English"],
    description: "DevOps engineer specializing in cloud infrastructure and automation.",
    verified: true,
    topRated: false,
  },
  {
    id: 8,
    name: "Jennifer Lee",
    title: "Graphic Designer",
    avatar: "/placeholder.svg?height=64&width=64",
    rating: 4.5,
    reviews: 26,
    hourlyRate: 50,
    location: "Portland, OR",
    responseTime: "2 hours",
    completedProjects: 44,
    skills: ["Adobe Creative Suite", "Branding", "Logo Design", "Print Design", "Illustration"],
    category: "design",
    experience: "intermediate",
    availability: "available",
    languages: ["English"],
    description: "Creative graphic designer with a passion for branding and visual storytelling.",
    verified: true,
    topRated: false,
  },
]

export default function BrowseFreelancers() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedExperience, setSelectedExperience] = useState("all")
  const [selectedAvailability, setSelectedAvailability] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [showTopRated, setShowTopRated] = useState(false)
  const [showVerified, setShowVerified] = useState(false)
  const [sortBy, setSortBy] = useState("rating")

  // Get all unique skills for filter
  const allSkills = useMemo(() => {
    const skills = new Set<string>()
    freelancers.forEach((freelancer) => {
      freelancer.skills.forEach((skill) => skills.add(skill))
    })
    return Array.from(skills).sort()
  }, [])

  // Filter and sort freelancers
  const filteredFreelancers = useMemo(() => {
    const filtered = freelancers.filter((freelancer) => {
      // Search query
      if (
        searchQuery &&
        !freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !freelancer.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !freelancer.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      ) {
        return false
      }

      // Category filter
      if (selectedCategory !== "all" && freelancer.category !== selectedCategory) {
        return false
      }

      // Experience filter
      if (selectedExperience !== "all" && freelancer.experience !== selectedExperience) {
        return false
      }

      // Availability filter
      if (selectedAvailability !== "all" && freelancer.availability !== selectedAvailability) {
        return false
      }

      // Price range filter
      if (freelancer.hourlyRate < priceRange[0] || freelancer.hourlyRate > priceRange[1]) {
        return false
      }

      // Skills filter
      if (selectedSkills.length > 0 && !selectedSkills.some((skill) => freelancer.skills.includes(skill))) {
        return false
      }

      // Top rated filter
      if (showTopRated && !freelancer.topRated) {
        return false
      }

      // Verified filter
      if (showVerified && !freelancer.verified) {
        return false
      }

      return true
    })

    // Sort freelancers
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "price-low":
          return a.hourlyRate - b.hourlyRate
        case "price-high":
          return b.hourlyRate - a.hourlyRate
        case "reviews":
          return b.reviews - a.reviews
        case "projects":
          return b.completedProjects - a.completedProjects
        default:
          return 0
      }
    })

    return filtered
  }, [
    searchQuery,
    selectedCategory,
    selectedExperience,
    selectedAvailability,
    priceRange,
    selectedSkills,
    showTopRated,
    showVerified,
    sortBy,
  ])

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedExperience("all")
    setSelectedAvailability("all")
    setPriceRange([0, 100])
    setSelectedSkills([])
    setShowTopRated(false)
    setShowVerified(false)
    setSortBy("rating")
  }

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
            <Users className="h-6 w-6" />
            <span className="font-bold text-xl">Browse Freelancers</span>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Filter className="h-5 w-5 mr-2" />
                      Filters
                    </CardTitle>
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Search */}
                  <div className="space-y-2">
                    <Label>Search</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search freelancers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Category */}
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="writing">Writing</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="data">Data Science</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Experience Level */}
                  <div className="space-y-2">
                    <Label>Experience Level</Label>
                    <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Availability */}
                  <div className="space-y-2">
                    <Label>Availability</Label>
                    <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="available">Available</SelectItem>
                        <SelectItem value="busy">Busy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <Label>
                      Hourly Rate (${priceRange[0]} - ${priceRange[1]})
                    </Label>
                    <Slider value={priceRange} onValueChange={setPriceRange} max={150} step={5} className="w-full" />
                  </div>

                  <Separator />

                  {/* Special Filters */}
                  <div className="space-y-3">
                    <Label>Special Filters</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="top-rated" checked={showTopRated} onCheckedChange={setShowTopRated} />
                      <Label htmlFor="top-rated" className="text-sm">
                        Top Rated
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="verified" checked={showVerified} onCheckedChange={setShowVerified} />
                      <Label htmlFor="verified" className="text-sm">
                        Verified
                      </Label>
                    </div>
                  </div>

                  <Separator />

                  {/* Skills */}
                  <div className="space-y-2">
                    <Label>Skills</Label>
                    <div className="max-h-48 overflow-y-auto space-y-2">
                      {allSkills.map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <Checkbox
                            id={skill}
                            checked={selectedSkills.includes(skill)}
                            onCheckedChange={() => toggleSkill(skill)}
                          />
                          <Label htmlFor={skill} className="text-sm">
                            {skill}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Results Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold">
                    {filteredFreelancers.length} Freelancer{filteredFreelancers.length !== 1 ? "s" : ""} Found
                  </h1>
                  <p className="text-muted-foreground">Find the perfect freelancer for your project</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="sort" className="text-sm">
                    Sort by:
                  </Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="reviews">Most Reviews</SelectItem>
                      <SelectItem value="projects">Most Projects</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Freelancer Cards */}
              <div className="grid gap-6">
                {filteredFreelancers.map((freelancer) => (
                  <Card key={freelancer.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Avatar and Basic Info */}
                        <div className="flex items-start space-x-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={freelancer.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {freelancer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="text-xl font-semibold">{freelancer.name}</h3>
                              {freelancer.verified && <CheckCircle className="h-5 w-5 text-green-600" />}
                              {freelancer.topRated && (
                                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                  <Star className="h-3 w-3 mr-1" />
                                  Top Rated
                                </Badge>
                              )}
                            </div>
                            <p className="text-lg text-muted-foreground mb-2">{freelancer.title}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                                <span className="font-medium">{freelancer.rating}</span>
                                <span className="ml-1">({freelancer.reviews} reviews)</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {freelancer.location}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {freelancer.responseTime}
                              </div>
                            </div>
                            <p className="text-sm mb-4">{freelancer.description}</p>
                          </div>
                        </div>

                        {/* Skills and Actions */}
                        <div className="md:w-80 space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {freelancer.skills.slice(0, 5).map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {freelancer.skills.length > 5 && (
                              <Badge variant="outline" className="text-xs">
                                +{freelancer.skills.length - 5} more
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="text-right">
                              <div className="text-2xl font-bold">${freelancer.hourlyRate}/hr</div>
                              <div className="text-sm text-muted-foreground">
                                {freelancer.completedProjects} projects completed
                              </div>
                            </div>
                            <Badge
                              variant={freelancer.availability === "available" ? "default" : "secondary"}
                              className={freelancer.availability === "available" ? "bg-green-100 text-green-800" : ""}
                            >
                              {freelancer.availability}
                            </Badge>
                          </div>

                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                              <Heart className="h-4 w-4 mr-2" />
                              Save
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Message
                            </Button>
                            <Button size="sm" className="flex-1" asChild>
                              <Link href={`/order/${freelancer.name.toLowerCase().replace(" ", "-")}`}>Hire Now</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* No Results */}
              {filteredFreelancers.length === 0 && (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Users className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">No freelancers found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your filters or search terms to find more freelancers.
                    </p>
                    <Button onClick={clearFilters}>Clear All Filters</Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
