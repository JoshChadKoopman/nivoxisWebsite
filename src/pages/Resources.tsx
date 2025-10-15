import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Download, BookOpen, Shield, TrendingUp, Lock } from "lucide-react";
import { toast } from "sonner";

export default function Resources() {
  const [downloadForm, setDownloadForm] = useState({ name: "", email: "", company: "" });

  const blogPosts = [
    {
      title: "The Rising Threat of AI-Powered Phishing in South Africa",
      excerpt: "How generative AI is making phishing more convincing and what your team needs to know.",
      category: "Trends",
      readTime: "5 min read"
    },
    {
      title: "POPIA Compliance: Beyond the Checklist",
      excerpt: "Building a sustainable culture of data protection in your organisation.",
      category: "Compliance",
      readTime: "7 min read"
    },
    {
      title: "Email Hygiene Best Practices for Remote Teams",
      excerpt: "Essential habits to protect your business communications from compromise.",
      category: "Best Practices",
      readTime: "4 min read"
    },
    {
      title: "Understanding Business Email Compromise (BEC)",
      excerpt: "Real-world BEC scenarios and how to spot sophisticated wire transfer scams.",
      category: "Threats",
      readTime: "6 min read"
    },
    {
      title: "Passwordless Authentication: Is It Right for Your Business?",
      excerpt: "Exploring modern authentication methods and their security implications.",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      title: "Remote Work Security: Closing the Gaps",
      excerpt: "Practical steps to secure distributed teams and home office environments.",
      category: "Best Practices",
      readTime: "6 min read"
    }
  ];

  const downloads = [
    {
      icon: FileText,
      title: "Sample Training Plan",
      description: "12-month security awareness roadmap with monthly themes and measurable KPIs.",
      fileType: "PDF"
    },
    {
      icon: Shield,
      title: "Phishing Response Playbook",
      description: "Step-by-step incident response guide for suspected phishing attacks.",
      fileType: "PDF"
    },
    {
      icon: BookOpen,
      title: "POPIA Quick-Start Guide",
      description: "Plain-language overview of POPIA requirements and implementation steps.",
      fileType: "PDF"
    }
  ];

  const handleDownload = (title: string) => {
    if (!downloadForm.name || !downloadForm.email) {
      toast.error("Please fill in your name and email to download");
      return;
    }

    // In production, this would trigger actual download
    toast.success(`Thank you! Downloading ${title}...`);
    setDownloadForm({ name: "", email: "", company: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-muted to-background py-16">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl">
            <h1 className="mb-4">Resources & Insights</h1>
            <p className="text-xl text-muted-foreground">
              Expert guidance on cybersecurity awareness, POPIA compliance, and building 
              resilient security cultures in South African organisations.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <h2 className="mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.title} className="hover:shadow-[var(--shadow-md)] transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-accent">{post.category}</span>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Center */}
      <section className="bg-muted section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Download Centre</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Download Form */}
              <Card>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl">Get Your Free Resources</h3>
                    <p className="text-muted-foreground">
                      Enter your details to access our library of security awareness guides and templates.
                    </p>
                  </div>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={downloadForm.name}
                        onChange={(e) => setDownloadForm({ ...downloadForm, name: e.target.value })}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={downloadForm.email}
                        onChange={(e) => setDownloadForm({ ...downloadForm, email: e.target.value })}
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={downloadForm.company}
                        onChange={(e) => setDownloadForm({ ...downloadForm, company: e.target.value })}
                        placeholder="Your organisation"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We respect your privacy. Your information will only be used to send you the requested resources.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Available Downloads */}
              <div className="space-y-6">
                {downloads.map((download) => (
                  <Card key={download.title} className="hover:shadow-[var(--shadow-md)] transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <download.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between gap-4">
                            <h4 className="font-semibold">{download.title}</h4>
                            <span className="text-xs bg-muted px-2 py-1 rounded">{download.fileType}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{download.description}</p>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleDownload(download.title)}
                            className="p-0 h-auto"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
            <CardContent className="p-12 text-center space-y-6">
              <h2>Ready to Strengthen Your Security Culture?</h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Start with a free consultation to discuss your specific training needs.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
