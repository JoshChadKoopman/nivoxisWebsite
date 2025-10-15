import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Measurable Outcomes",
      description: "We believe in data-driven security awareness. Every campaign, lesson, and simulation is tracked and measured."
    },
    {
      icon: Users,
      title: "Human-Centric Approach",
      description: "Security awareness isn't about blame—it's about empowerment. We focus on positive reinforcement and practical skills."
    },
    {
      icon: Award,
      title: "Local Expertise",
      description: "Based in South Africa, we understand the unique compliance landscape and business challenges facing local organisations."
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Cybersecurity evolves constantly. Our training content and simulations adapt to emerging threats and tactics."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1>About Nivoxis</h1>
            <p className="text-xl text-primary-foreground/90">
              We're on a mission to reduce human risk in South African organisations through 
              measurable, engaging security awareness training.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2>Our Mission</h2>
              <p className="text-xl text-muted-foreground">
                Too many organisations treat security awareness as a compliance checkbox. 
                We're changing that.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground">
                Nivoxis was founded on a simple principle: employees aren't the weakest link—they're 
                your first line of defence. When properly trained and continuously engaged, your team 
                becomes your strongest security asset.
              </p>
              <p className="text-muted-foreground">
                We combine proven educational techniques with the latest threat intelligence to deliver 
                security awareness that's practical, measurable, and actually engaging. No boring 
                hour-long videos. No annual tick-box exercises. Just bite-sized, role-relevant training 
                that builds lasting behavioral change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2>Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-8 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership (Placeholder) */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2>Leadership Team</h2>
              <p className="text-xl text-muted-foreground">
                Experienced security professionals dedicated to reducing cyber risk
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-24 h-24 rounded-full bg-muted mx-auto" />
                    <div>
                      <h4 className="font-semibold">Leadership Member</h4>
                      <p className="text-sm text-muted-foreground">Position</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Brief bio highlighting expertise in cybersecurity, training, or compliance.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="bg-muted section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2>Partnerships & Certifications</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We collaborate with leading security vendors and maintain industry certifications
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-32 h-16 bg-card rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Partner Logo</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
            <CardContent className="p-12 text-center space-y-6">
              <h2>Work With Us</h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Join hundreds of South African organisations building security-aware cultures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/training">View Packages</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
