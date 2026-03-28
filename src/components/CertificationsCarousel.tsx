import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

import sfAdmin from "@/assets/certs/sf-admin.png";
import sfDeveloper from "@/assets/certs/sf-developer.png";
import sfSalesConsultant from "@/assets/certs/sf-sales-consultant.png";
import sfServiceConsultant from "@/assets/certs/sf-service-consultant.png";
import sfMarketing from "@/assets/certs/sf-marketing.png";
import sfArchitect from "@/assets/certs/sf-architect.png";
import sfDataCloud from "@/assets/certs/sf-data-cloud.png";

const certifications = [
  { name: "Salesforce Administrator", image: sfAdmin },
  { name: "Platform Developer", image: sfDeveloper },
  { name: "Sales Cloud Consultant", image: sfSalesConsultant },
  { name: "Service Cloud Consultant", image: sfServiceConsultant },
  { name: "Marketing Cloud", image: sfMarketing },
  { name: "Solution Architect", image: sfArchitect },
  { name: "Data Cloud", image: sfDataCloud },
];

// Double the items for seamless infinite scroll
const doubled = [...certifications, ...certifications];

export const CertificationsCarousel = () => (
  <section className="py-20 overflow-hidden">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Our Expertise
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Salesforce Certifications
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our team holds industry-leading Salesforce certifications, ensuring expert-level delivery across every project.
        </p>
      </AnimatedSection>
    </div>

    {/* Infinite scrolling track */}
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-12 items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((cert, i) => (
          <div
            key={`${cert.name}-${i}`}
            className="flex flex-col items-center gap-3 min-w-[140px]"
          >
            <div className="w-24 h-24 rounded-2xl bg-background border border-border shadow-lg flex items-center justify-center p-3 hover:scale-110 transition-transform duration-300">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-full object-contain"
                loading="lazy"
                width={96}
                height={96}
              />
            </div>
            <span className="text-xs text-muted-foreground font-medium text-center max-w-[120px]">
              {cert.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);
