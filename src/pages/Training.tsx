import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, X } from "lucide-react";

export default function Training() {
  const tiers = [
    {
      name: "Starter",
      target: "10-50 employees",
      price: "Contact for pricing",
      description: "Essential security awareness for growing teams",
      features: [
        "Quarterly phishing simulations",
        "Monthly micro-lessons (3-5 minutes)",
        "Baseline risk score",
        "Template policies",
        "Basic POPIA module",
        "Core reports",
        "Email support"
      ],
      notIncluded: [
        "Role-based training",
        "Manager dashboards",
        "SSO integration",
        "Custom content"
      ]
    },
    {
      name: "Growth",
      target: "50-200 employees",
      price: "Contact for pricing",
      description: "Advanced training with manager insights",
      featured: true,
      features: [
        "Monthly phishing simulations with targeted kits",
        "Role-based training paths",
        "Just-in-time micro-coaching",
        "Manager roll-up reports",
        "Risk scoring by department",
        "LMS exports",
        "Basic SSO integration",
        "Quarterly executive review"
      ],
      notIncluded: [
        "Weekly simulations",
        "Custom content creation",
        "Dedicated success manager",
        "API access"
      ]
    },
    {
      name: "Pro",
      target: "200+ employees",
      price: "Contact for pricing",
      description: "Enterprise-grade security awareness",
      features: [
        "Weekly adaptive phishing simulations",
        "Advanced reporting & benchmarks",
        "Custom content creation",
        "POPIA + GDPR/PCI/NIST modules",
        "Full API & SSO integration",
        "SIEM export capabilities",
        "Cyber insurance attestation pack",
        "Phishing reporting add-in (Outlook/Gmail)",
        "Dedicated success manager",
        "Change management communications pack"
      ],
      notIncluded: []
    }
  ];

  const addOns = [
    {
      name: "Executive Spear-Phish Simulations",
      description: "Targeted, realistic attacks for senior leadership"
    },
    {
      name: "Incident Tabletop Workshop",
      description: "Interactive scenario-based training session"
    },
    {
      name: "Secure Coding Primer",
      description: "Essential security awareness for development teams"
    },
    {
      name: "Policy & Awareness Campaign Service",
      description: "Custom policy development and rollout support"
    },
    {
      name: "Dark Web Credential Watch",
      description: "Monitor for compromised employee credentials"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-muted to-background py-16">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl">
            <h1 className="mb-4">Training & Packages</h1>
            <p className="text-xl text-muted-foreground">
              Choose the right security awareness program for your organisation. 
              All packages include onboarding, reporting dashboards, policy templates, 
              and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="mb-8 text-center">
            <p className="text-muted-foreground">
              All prices are per user, per month with annual billing. 
              <span className="font-semibold text-foreground"> Volume discounts available.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tiers.map((tier) => (
              <Card 
                key={tier.name}
                className={tier.featured ? "border-accent border-2 shadow-[var(--shadow-accent)] relative" : ""}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{tier.target}</p>
                  <div className="pt-4">
                    <div className="text-3xl font-bold">{tier.price}</div>
                    <p className="text-sm text-muted-foreground mt-1">{tier.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      Included Features
                    </p>
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {tier.notIncluded.length > 0 && (
                    <div className="space-y-3 pt-4 border-t">
                      <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                        Not Included
                      </p>
                      {tier.notIncluded.map((feature) => (
                        <div key={feature} className="flex items-start gap-2 opacity-50">
                          <X className="h-5 w-5 shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button 
                    variant={tier.featured ? "accent" : "outline"} 
                    className="w-full"
                    asChild
                  >
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-muted section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Available Add-Ons</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {addOns.map((addon) => (
                <Card key={addon.name}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{addon.name}</h3>
                    <p className="text-muted-foreground">{addon.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
            <CardContent className="p-12 text-center space-y-6">
              <h2>Not Sure Which Package Is Right?</h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Book a 15-minute consultation to discuss your specific needs and get a custom recommendation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Book Consultation</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/resources">See Sample Content</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
