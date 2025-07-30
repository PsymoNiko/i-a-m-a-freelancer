"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GitFork, Sparkles, Target, TrendingUp, ArrowLeft, Brain, Zap } from "lucide-react"
import Link from "next/link"

export default function EnhancedReview() {
  const [resumeText, setResumeText] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [aiAnalysis, setAiAnalysis] = useState<any>(null)

  const handleAIAnalyze = async () => {
    setIsAnalyzing(true)
    // Simulate AI analysis
    setTimeout(() => {
      setAiAnalysis({
        overallScore: 85,
        atsScore: 92,
        readabilityScore: 78,
        keywordDensity: 85,
        aiInsights: [
          "Your resume shows strong technical expertise but could benefit from more leadership examples",
          "Consider adding metrics to quantify your impact in previous roles",
          "Your skills section is well-optimized for ATS systems",
        ],
        industryComparison: {
          yourScore: 85,
          industryAverage: 72,
          topPercentile: 95,
        },
        optimizations: [
          {
            section: "Professional Summary",
            current: "Experienced developer with 5 years...",
            suggested:
              "Results-driven Full Stack Developer with 5+ years of experience delivering scalable web applications that increased user engagement by 40%...",
            impact: "+15% ATS compatibility",
          },
          {
            section: "Work Experience",
            current: "Developed web applications",
            suggested:
              "Architected and developed 12+ responsive web applications using React and Node.js, resulting in 25% faster load times and 30% improved user retention",
            impact: "+20% impact score",
          },
        ],
        careerPath: [
          { role: "Senior Developer", probability: 85, timeframe: "6-12 months" },
          { role: "Tech Lead", probability: 70, timeframe: "12-18 months" },
          { role: "Engineering Manager", probability: 55, timeframe: "18-24 months" },
        ],
      })
      setIsAnalyzing(false)
    }, 4000)
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
            <GitFork className="h-6 w-6" />
            <span className="font-bold text-xl">AI-Enhanced Review</span>
            <Badge variant="secondary" className="ml-2">
              <Sparkles className="h-3 w-3 mr-1" />
              AI Powered
            </Badge>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">AI-Enhanced Resume Analysis</h1>
            <p className="text-muted-foreground">
              Advanced AI analysis with personalized career insights and optimization recommendations
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Input Section */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 mr-2" />
                  AI Analysis
                </CardTitle>
                <CardDescription>Upload your resume for advanced AI-powered insights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Paste your resume content here..."
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  className="min-h-[200px]"
                />
                <Button onClick={handleAIAnalyze} disabled={!resumeText || isAnalyzing} className="w-full">
                  <Zap className="h-4 w-4 mr-2" />
                  {isAnalyzing ? "AI Analyzing..." : "Start AI Analysis"}
                </Button>
              </CardContent>
            </Card>

            {/* Results Section */}
            <div className="lg:col-span-2">
              {isAnalyzing && (
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="animate-pulse flex items-center justify-center mb-4">
                          <Brain className="h-8 w-8 text-primary mr-2" />
                          <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                        <p>AI is analyzing your resume...</p>
                        <p className="text-sm text-muted-foreground mt-2">This may take a few moments</p>
                      </div>
                      <Progress value={66} className="w-full" />
                    </div>
                  </CardContent>
                </Card>
              )}

              {aiAnalysis && (
                <Tabs defaultValue="overview" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="optimization">Optimize</TabsTrigger>
                    <TabsTrigger value="insights">Insights</TabsTrigger>
                    <TabsTrigger value="career">Career Path</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Overall Score</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-primary">{aiAnalysis.overallScore}/100</div>
                          <Progress value={aiAnalysis.overallScore} className="mt-2" />
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">ATS Compatibility</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-green-600">{aiAnalysis.atsScore}/100</div>
                          <Progress value={aiAnalysis.atsScore} className="mt-2" />
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Readability</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-blue-600">{aiAnalysis.readabilityScore}/100</div>
                          <Progress value={aiAnalysis.readabilityScore} className="mt-2" />
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Industry Comparison</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span>Your Score</span>
                            <Badge variant="default">{aiAnalysis.industryComparison.yourScore}</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Industry Average</span>
                            <Badge variant="secondary">{aiAnalysis.industryComparison.industryAverage}</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Top 10%</span>
                            <Badge variant="outline">{aiAnalysis.industryComparison.topPercentile}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="optimization" className="space-y-4">
                    {aiAnalysis.optimizations.map((opt: any, index: number) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="text-lg">{opt.section}</CardTitle>
                          <Badge variant="secondary" className="w-fit">
                            {opt.impact}
                          </Badge>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-medium text-red-600 mb-2">Current:</h4>
                            <p className="text-sm bg-red-50 p-3 rounded border-l-4 border-red-200">{opt.current}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-green-600 mb-2">Suggested:</h4>
                            <p className="text-sm bg-green-50 p-3 rounded border-l-4 border-green-200">
                              {opt.suggested}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="insights" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Target className="h-5 w-5 mr-2" />
                          AI Insights
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {aiAnalysis.aiInsights.map((insight: string, index: number) => (
                            <li key={index} className="flex items-start space-x-2">
                              <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{insight}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="career" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <TrendingUp className="h-5 w-5 mr-2" />
                          Career Progression Forecast
                        </CardTitle>
                        <CardDescription>AI-predicted career opportunities based on your profile</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {aiAnalysis.careerPath.map((path: any, index: number) => (
                            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                              <div>
                                <h4 className="font-medium">{path.role}</h4>
                                <p className="text-sm text-muted-foreground">{path.timeframe}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-primary">{path.probability}%</div>
                                <div className="text-xs text-muted-foreground">Match</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              )}

              {!aiAnalysis && !isAnalyzing && (
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center text-muted-foreground py-12">
                      <Brain className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <h3 className="text-lg font-medium mb-2">AI-Powered Analysis Ready</h3>
                      <p>Upload your resume to get advanced AI insights and personalized recommendations</p>
                    </div>
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
