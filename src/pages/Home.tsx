import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Target, 
  BarChart3, 
  RefreshCw, 
  CheckCircle2, 
  Users,
  TrendingDown,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

export default function Home() {
  const steps = [
    {
      icon: Target,
      title: "Assess",
      description: "Baseline risk scoring and vulnerability identification across your organization."
    },
    {
      icon: Users,
      title: "Train",
      description: "Bite-sized, role-based micro-learning modules delivered monthly."
    },
    {
      icon: Shield,
      title: "Simulate",
      description: "Adaptive phishing campaigns with instant coaching and reporting."
    },
    {
      icon: BarChart3,
      title: "Measure & Improve",
      description: "Track progress with detailed dashboards and continuous improvement cycles."
    }
  ];

  const packages = [
    {
      name: "Starter",
      target: "10-50 employees",
      description: "Essential security awareness for growing teams",
      features: [
        "Quarterly phishing simulations",
        "Monthly micro-lessons",
        "Baseline risk scoring",
        "Template policies",
        "Email support"
      ],
      cta: "Get Started"
    },
    {
      name: "Growth",
      target: "50-200 employees",
      description: "Advanced training with manager insights",
      features: [
        "Monthly targeted simulations",
        "Role-based training paths",
        "Department risk scores",
        "LMS exports & basic SSO",
        "Quarterly executive reviews"
      ],
      cta: "Choose Growth",
      featured: true
    },
    {
      name: "Pro",
      target: "200+ employees",
      description: "Enterprise-grade security awareness",
      features: [
        "Weekly adaptive simulations",
        "Custom content & benchmarks",
        "POPIA + global compliance",
        "API/SSO integration",
        "Dedicated success manager"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent" />
        <div className="container mx-auto container-padding section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <h1 className="text-balance">
                Turn Employees into Your First Line of Defence
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                Ongoing micro-learning, adaptive phishing simulations, and measurable risk reduction. 
                Build a security-aware culture that protects your business and ensures POPIA compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">Get Pricing & Demo</Link>
                </Button>
                <Button variant="secondary" size="xl" asChild>
                  <Link to="/contact">Book 15-min Consult</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block animate-scale-in">
              <img 
                src={heroImage} 
                alt="Cybersecurity awareness training team collaboration" 
                className="rounded-lg shadow-[var(--shadow-lg)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-muted py-8">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">91%</div>
              <p className="text-muted-foreground">of cyberattacks start with phishing</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">70%</div>
              <p className="text-muted-foreground">reduction in click rates after training</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">3-5 min</div>
              <p className="text-muted-foreground">average time per micro-lesson</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2>How Our Program Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven four-step approach to building lasting security awareness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={step.title} className="border-2 hover:border-accent transition-all duration-300 hover:shadow-[var(--shadow-md)]">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-3xl font-bold text-muted-foreground">{index + 1}</span>
                  </div>
                  <h3 className="text-xl">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="bg-muted section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2>Choose Your Package</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible plans designed for South African businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <Card 
                key={pkg.name}
                className={pkg.featured ? "border-accent border-2 shadow-[var(--shadow-accent)]" : ""}
              >
                <CardContent className="p-8 space-y-6">
                  {pkg.featured && (
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold inline-block">
                      Most Popular
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground">{pkg.target}</p>
                    <p className="text-foreground/80 mt-2">{pkg.description}</p>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={pkg.featured ? "accent" : "outline"} 
                    className="w-full"
                    asChild
                  >
                    <Link to="/training">{pkg.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/training">Compare All Packages →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* POPIA Compliance */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <Card className="border-2 border-accent/20 bg-gradient-to-br from-card to-muted/30">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                    <Award className="h-4 w-4" />
                    POPIA Condition 7
                  </div>
                  <h2>Meet Your Security Safeguard Requirements</h2>
                  <p className="text-muted-foreground text-lg">
                    POPIA requires organisations to implement appropriate technical and organisational 
                    measures to secure personal information. Our awareness training directly addresses 
                    Condition 7 safeguard requirements.
                  </p>
                  <Button variant="accent" asChild>
                    <Link to="/compliance">Learn About Compliance →</Link>
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-card rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Demonstrable Training Records</h4>
                      <p className="text-sm text-muted-foreground">Audit-ready documentation for regulators and stakeholders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-card rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Policy Templates Included</h4>
                      <p className="text-sm text-muted-foreground">POPIA-aligned policies ready to customize</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-card rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Continuous Improvement</h4>
                      <p className="text-sm text-muted-foreground">Ongoing training shows commitment to data protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container mx-auto container-padding text-center space-y-8">
          <h2 className="text-balance">Ready to Reduce Your Human Risk?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Join South African organisations building security-aware cultures. Get started with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Get Pricing & Demo</Link>
            </Button>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/resources">Download Sample Plan</Link>
            </Button>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80">
            <a href="tel:+27824643384" className="flex items-center gap-2 hover:text-accent transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
                <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.086-1.391l-4.064-3.696z"/>
              </svg>
              +27 82 464 3384
            </a>
            <a href="mailto:info@nivoixstraining.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"/>
              </svg>
              info@nivoixstraining.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
