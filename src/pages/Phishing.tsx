import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingDown, Clock, Shield, Mail, AlertTriangle } from "lucide-react";
import phishingImage from "@/assets/phishing-sim.jpg";

export default function Phishing() {
  const features = [
    {
      icon: Target,
      title: "Adaptive Simulations",
      description: "Campaigns adjust based on user behavior and role, targeting the right scenarios at the right time."
    },
    {
      icon: Shield,
      title: "Safe Landing Pages",
      description: "Users who click receive instant, non-punitive micro-coaching instead of shame."
    },
    {
      icon: TrendingDown,
      title: "Trending Analytics",
      description: "Track click rates, reporting trends, and high-risk cohorts over time."
    },
    {
      icon: Mail,
      title: "Reporting Add-In",
      description: "Outlook/Gmail integration allows users to report suspicious emails with one click."
    },
    {
      icon: Clock,
      title: "Time-to-Report Metrics",
      description: "Measure how quickly employees identify and report phishing attempts."
    },
    {
      icon: AlertTriangle,
      title: "Test Campaign Mode",
      description: "Run pilot campaigns to establish baselines before organization-wide rollout."
    }
  ];

  const kpis = [
    {
      metric: "Phish-Prone Rate",
      description: "Percentage of users who click phishing links",
      target: "< 10%"
    },
    {
      metric: "Time-to-Report",
      description: "Average time to identify and report suspicious emails",
      target: "< 5 min"
    },
    {
      metric: "High-Risk Cohorts",
      description: "Identify departments or roles needing additional training",
      target: "Zero clusters"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1>Adaptive Phishing Simulations</h1>
              <p className="text-xl text-primary-foreground/90">
                Test your team's awareness with realistic, role-based phishing campaigns. 
                Instant coaching, detailed reporting, and measurable risk reduction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/training">View Packages</Link>
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={phishingImage} 
                alt="Phishing simulation and email security" 
                className="rounded-lg shadow-[var(--shadow-lg)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2>How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our phishing simulations combine realism, education, and actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 hover:border-accent transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="bg-muted section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2>Key Performance Indicators</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track what matters most for reducing human risk
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {kpis.map((kpi) => (
              <Card key={kpi.metric}>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl font-bold text-accent">{kpi.target}</div>
                  <h3 className="text-xl">{kpi.metric}</h3>
                  <p className="text-muted-foreground">{kpi.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent/20">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="text-center space-y-4">
                  <h2>Implementation Best Practices</h2>
                  <p className="text-muted-foreground text-lg">
                    Get the most from your phishing simulation program
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Before Launch</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Communicate the "why" to all employees</li>
                      <li>• Add simulation domains to allow-lists</li>
                      <li>• Run test campaign with IT team first</li>
                      <li>• Establish baseline metrics</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Ongoing Management</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Review click rates monthly</li>
                      <li>• Target high-risk cohorts with training</li>
                      <li>• Vary simulation difficulty over time</li>
                      <li>• Celebrate improvements publicly</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6 text-center">
                  <Button variant="accent" size="lg" asChild>
                    <Link to="/contact">Get Implementation Guide</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
