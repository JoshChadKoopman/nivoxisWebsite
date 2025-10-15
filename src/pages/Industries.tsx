import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, ShoppingCart, Heart, Briefcase, Landmark } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Building2,
      name: "Financial Services",
      risks: [
        "High-value transactions attract sophisticated phishing attacks",
        "Regulatory scrutiny under FICA and POPIA",
        "Business email compromise targeting wire transfers"
      ],
      recommendation: "Growth or Pro package with enhanced simulations and compliance modules",
      package: "Growth / Pro"
    },
    {
      icon: ShoppingCart,
      name: "Retail & E-Commerce",
      risks: [
        "Payment card data exposure (PCI DSS requirements)",
        "Customer personal information at risk",
        "Seasonal staff turnover requiring continuous training"
      ],
      recommendation: "Starter or Growth with emphasis on PCI compliance awareness",
      package: "Starter / Growth"
    },
    {
      icon: Heart,
      name: "Healthcare",
      risks: [
        "Sensitive patient data (POPIA compliance critical)",
        "Medical identity theft and ransomware targets",
        "Third-party vendor access points"
      ],
      recommendation: "Growth or Pro with healthcare-specific scenarios",
      package: "Growth / Pro"
    },
    {
      icon: Briefcase,
      name: "Professional Services",
      risks: [
        "Client confidentiality and intellectual property",
        "Email-heavy workflows vulnerable to BEC",
        "Remote work expanding attack surface"
      ],
      recommendation: "Growth package with role-based training for partners and staff",
      package: "Growth"
    },
    {
      icon: Landmark,
      name: "Public Sector",
      risks: [
        "Citizen data protection obligations",
        "Government service disruption impacts",
        "Supply chain and contractor security gaps"
      ],
      recommendation: "Pro package with government compliance modules and vendor training",
      package: "Pro"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-muted to-background py-16">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl">
            <h1 className="mb-4">Industries We Serve</h1>
            <p className="text-xl text-muted-foreground">
              Tailored security awareness for South African businesses across sectors. 
              Each industry faces unique risks—our training addresses them directly.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Card 
                key={industry.name}
                className="border-2 hover:border-accent transition-all duration-300"
              >
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="space-y-4">
                      <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center">
                        <industry.icon className="h-8 w-8 text-accent" />
                      </div>
                      <h2 className="text-2xl">{industry.name}</h2>
                      <div className="inline-block bg-muted px-3 py-1 rounded-full text-sm font-semibold">
                        Recommended: {industry.package}
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                          Key Risks
                        </h4>
                        <ul className="space-y-2">
                          {industry.risks.map((risk) => (
                            <li key={risk} className="flex items-start gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                              <span className="text-muted-foreground">{risk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3 pt-4 border-t">
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                          Our Recommendation
                        </h4>
                        <p className="text-foreground">{industry.recommendation}</p>
                      </div>

                      <div className="pt-4">
                        <Button variant="accent" asChild>
                          <Link to="/training">View Packages →</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted section-padding">
        <div className="container mx-auto container-padding">
          <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
            <CardContent className="p-12 text-center space-y-6">
              <h2>Don't See Your Industry?</h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                We customize training for any sector. Let's discuss your specific compliance and risk requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/training">Browse All Packages</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
