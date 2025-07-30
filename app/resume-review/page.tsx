"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { FileText, Upload, CheckCircle, AlertCircle, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResumeReview() {
  const [resumeText, setResumeText] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<any>(null)

  const handleAnalyze = async () => {
    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setAnalysis({
        score: 78,
        strengths: [
          "Strong technical skills section",
          "Clear work experience descriptions",
          "Good use of action verbs",
        ],
        improvements: [
          "Add quantifiable achievements",
          "Include more relevant keywords",
          "Improve formatting consistency",
        ],
        suggestions: [
          "Consider adding a professional summary",
          "Highlight specific project outcomes",
          "Use bullet points for better readability",
        ],
      })
      setIsAnalyzing(false)
    }, 3000)
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
            <FileText className="h-6 w-6" />
            <span className="font-bold text-xl">Resume Review</span>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Professional Resume Review</h1>
            <p className="text-muted-foreground">
              Get expert feedback on your resume to improve your chances of landing your dream job
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Input Section */}
            <Card>
              <CardHeader>
                <CardTitle>Upload Your Resume</CardTitle>
                <CardDescription>Paste your resume text or upload a file for analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume Content</Label>
                  <Textarea
                    id="resume"
                    placeholder="Paste your resume content here..."
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    className="min-h-[300px]"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload File
                  </Button>
                  <Button onClick={handleAnalyze} disabled={!resumeText || isAnalyzing} className="flex-1">
                    {isAnalyzing ? "Analyzing..." : "Analyze Resume"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card>
              <CardHeader>
                <CardTitle>Analysis Results</CardTitle>
                <CardDescription>Professional feedback and recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                {isAnalyzing && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                      <p>Analyzing your resume...</p>
                    </div>
                    <Progress value={33} className="w-full" />
                  </div>
                )}

                {analysis && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">{analysis.score}/100</div>
                      <p className="text-muted-foreground">Overall Score</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-green-600 mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Strengths
                        </h3>
                        <ul className="space-y-1">
                          {analysis.strengths.map((strength: string, index: number) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              • {strength}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-orange-600 mb-2 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-2" />
                          Areas for Improvement
                        </h3>
                        <ul className="space-y-1">
                          {analysis.improvements.map((improvement: string, index: number) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              • {improvement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-blue-600 mb-2 flex items-center">
                          <Star className="h-4 w-4 mr-2" />
                          Suggestions
                        </h3>
                        <ul className="space-y-1">
                          {analysis.suggestions.map((suggestion: string, index: number) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              • {suggestion}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <Link href="/enhanced-review">Try AI Review</Link>
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        Download Report
                      </Button>
                    </div>
                  </div>
                )}

                {!analysis && !isAnalyzing && (
                  <div className="text-center text-muted-foreground py-8">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Upload your resume to get started with the analysis</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
