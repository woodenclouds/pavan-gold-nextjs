"use client";

import { motion } from "framer-motion";
import { FadeInUp, GoldLine } from "./animations";

interface LegalSectionProps {
  title?: string;
  children: React.ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <div className="mb-12">
      {title && (
        <div className="mb-6">
          <h2 className="font-serif text-2xl font-medium text-primary">
            {title}
          </h2>
          <div className="mt-2 h-px w-12 bg-primary/30" />
        </div>
      )}
      <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed text-justify">
        {children}
      </div>
    </div>
  );
}

export default function LegalContent({ 
  title, 
  lastUpdated,
  children 
}: { 
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-44 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInUp>
          <div className="mb-16">
            <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl">
              {title}
            </h1>
            {lastUpdated && (
              <p className="mt-4 text-xs tracking-widest text-primary uppercase">
                Last Updated: {lastUpdated}
              </p>
            )}
            <GoldLine className="mt-8 w-24" />
          </div>
        </FadeInUp>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
