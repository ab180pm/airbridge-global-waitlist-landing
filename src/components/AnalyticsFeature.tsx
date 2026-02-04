import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AnalyticsFeature = () => {
  return (
    <section className="w-full py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-purple-400 font-semibold tracking-wider text-sm uppercase">
              Deep Dive Analytics
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Visualise Your Growth
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Go beyond simple metrics. Our advanced dashboard provides granular insights into user behavior, retention cohorts, and LTV prediction models.
            </p>
            <Button className="bg-white text-slate-950 hover:bg-slate-200 rounded-full px-8 py-6 text-lg font-medium group">
              Explore Analytics
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-[0_0_50px_-12px_rgba(168,85,247,0.4)] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 z-10" />
              <img
                src="/images/mobile-analytics.png"
                alt="Advanced Analytics Interface"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
