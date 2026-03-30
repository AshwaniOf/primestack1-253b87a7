import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { caseStudies } from "@/data/caseStudies";
import { Link } from "react-router-dom";
import { ArrowRight, Quote, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const CaseStudies = () => (
  <Layout>
    {/* Hero */}
    <section className="py-20 bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg text-muted-foreground">
            Real results from real clients. See how PrimeStack has helped organizations transform their operations with Salesforce.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Case Studies List */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-20">
          {caseStudies.map((cs, i) => (
            <AnimatedSection key={cs.slug} delay={0.1}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                    {cs.industry} · {cs.service}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{cs.title}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{cs.challenge}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{cs.solution}</p>

                  <ul className="space-y-2 mb-6">
                    {cs.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  {cs.quote && (
                    <div className="glass-card rounded-xl p-5 mt-6">
                      <Quote className="h-5 w-5 text-primary/40 mb-2" />
                      <p className="text-sm text-muted-foreground italic mb-3">"{cs.quote}"</p>
                      <div className="text-sm font-semibold">{cs.quoteName}</div>
                      <div className="text-xs text-muted-foreground">{cs.quoteRole}, {cs.client}</div>
                    </div>
                  )}
                </div>

                {/* Metrics Card */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="glass-card rounded-2xl p-8 md:p-10">
                    <h3 className="font-display text-lg font-semibold mb-6 text-center">Key Results</h3>
                    <div className="grid grid-cols-1 gap-6">
                      {cs.metrics.map((m, mi) => (
                        <motion.div
                          key={m.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: mi * 0.15 }}
                          className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10"
                        >
                          <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">{m.value}</div>
                          <div className="text-sm text-muted-foreground">{m.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {i < caseStudies.length - 1 && (
                <div className="border-b border-border mt-20" />
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="gradient-bg rounded-2xl p-12 md:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
              Let's discuss how we can deliver similar results for your organization.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-background text-foreground font-semibold hover:bg-background/90 transition-colors"
            >
              Schedule a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default CaseStudies;
