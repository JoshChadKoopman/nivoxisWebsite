import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileText, CheckCircle2, Globe } from "lucide-react";
import complianceImage from "@/assets/compliance.jpg";

export default function Compliance() {
  const popiaPoints = [
    {
      condition: "Condition 7",
      title: "Security Safeguards",
      description: "Organisations must secure personal information against unauthorised access, loss, or damage through appropriate technical and organisational measures.",
      howWeHelp: "Our training provides demonstrable organisational safeguards and creates audit-ready documentation of security awareness efforts."
    }
  ];

  const frameworks = [
    {
      name: "NIST Cybersecurity Framework",
      icon: Shield,
      coverage: "Supports PR.AT (Awareness & Training) category with measurable training outcomes and employee awareness metrics."
    },
    {
      name: "ISO 27001",
      icon: FileText,
      coverage: "Aligns with A.7.2.2 (Information Security Awareness) and provides evidence for certification audits."
    },
    {
      name: "PCI DSS",
      icon: CheckCircle2,
      coverage: "Addresses Requirement 12.6 (Security Awareness Program) with formal training documentation and testing."
    },
    {
      name: "GDPR",
      icon: Globe,
      coverage: "Supports Article 32 (Security of Processing) through staff awareness and capability building."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1>POPIA Compliance & Beyond</h1>
              <p className="text-xl text-primary-foreground/90">
                Meet your POPIA Condition 7 requirements while aligning with global security frameworks. 
                Demonstrable training records for auditors and regulators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Discuss Requirements</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/resources">Download Matrix</Link>
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={complianceImage} 
                alt="Compliance and security framework illustration" 
                className="rounded-lg shadow-[var(--shadow-lg)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* POPIA Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2>Understanding POPIA Requirements</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The Protection of Personal Information Act requires organisations to implement 
              appropriate security safeguards
            </p>
          </div>

          {popiaPoints.map((point) => (
            <Card key={point.condition} className="border-2 border-accent/20 mb-8">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                      <Shield className="h-4 w-4" />
                      {point.condition}
                    </div>
                    <h3 className="text-2xl">{point.title}</h3>
                    <p className="text-muted-foreground text-lg">
                      {point.description}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">How Our Training Helps</h4>
                    <p className="text-muted-foreground">
                      {point.howWeHelp}
                    </p>
                    <div className="space-y-3 pt-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">Audit-ready training completion records</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">Policy templates aligned with POPIA</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">Measurable risk reduction metrics</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">Continuous improvement documentation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Global Frameworks */}
      <section className="bg-muted section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2>Global Framework Alignment</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our training program maps to international security and privacy standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {frameworks.map((framework) => (
              <Card key={framework.name}>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <framework.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl">{framework.name}</h3>
                      <p className="text-muted-foreground">{framework.coverage}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tailored Programs */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
            <CardContent className="p-12 text-center space-y-6">
              <h2>Need Tailored Compliance Support?</h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                We can customize training modules and reporting to meet specific auditor or regulator requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Discuss Your Needs</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/resources">Download Compliance Matrix</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
