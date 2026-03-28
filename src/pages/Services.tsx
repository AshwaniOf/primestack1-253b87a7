import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { services } from "@/data/services";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const serviceImages = import.meta.glob("@/assets/services/*.jpg", { eager: true, import: "default" }) as Record<string, string>;

const getServiceImage = (slug: string) => {
  const key = Object.keys(serviceImages).find(k => k.includes(slug));
  return key ? serviceImages[key] : "";
};

const Services = () => (
  <Layout>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">Our Services</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Comprehensive <span className="gradient-text">Salesforce Solutions</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From implementation to optimization, we offer end-to-end Salesforce services across every cloud product.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.slug} delay={i * 0.08}>
              <Link
                to={`/services/${s.slug}`}
                className="glass-card rounded-xl overflow-hidden block group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getServiceImage(s.slug)}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={512}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                      <s.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{s.short}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.features.slice(0, 3).map(f => (
                      <span key={f} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{f}</span>
                    ))}
                  </div>
                  <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
