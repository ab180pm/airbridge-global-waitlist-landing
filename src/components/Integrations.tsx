
import { motion } from "framer-motion";
import { CheckCircle2, Globe2 } from "lucide-react";

export const Integrations = () => {
  return (
    <section className="w-full py-24 bg-slate-950 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-cyan-500/5 blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
              <img
                src="/images/collaboration-nodes.png"
                alt="Ecosystem Integrations"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 relative z-10"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-30">
                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 p-4 rounded-xl flex items-center gap-4">
                    <div className="bg-cyan-500/10 p-2 rounded-lg">
                        <Globe2 className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                        <div className="text-white font-bold text-lg">5,000+ Partners</div>
                        <div className="text-slate-400 text-sm">Global Ad Networks & Tools</div>
                    </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">
              Ecosystem
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Seamlessly Connected to Your Stack
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Airbridge integrates with over 5,000 partners including major ad networks, analytics tools, and cloud storage providers. No complex setup required.
            </p>

            <div className="space-y-4">
              {[
                "One-click integration with Meta, Google, TikTok",
                "Real-time data postbacks to any endpoint",
                "Raw data export to AWS, BigQuery, Snowflake",
                "Server-to-server API connections"
              ].map((item, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
                View All Integrations
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
