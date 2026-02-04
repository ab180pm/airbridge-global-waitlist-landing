
import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Zap } from "lucide-react";

const AIFeature = () => {
  return (
    <section className="py-20 md:py-24 bg-slate-950 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-purple-500/5 blur-[120px]" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Image Content */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-purple-500/20 blur-[80px] rounded-full" />
              <img 
                src="/images/ai-brain.png" 
                alt="AI Predictive Engine" 
                className="relative z-10 w-full h-auto rounded-2xl border border-slate-800 shadow-2xl bg-slate-900/50 backdrop-blur-sm"
              />
              
              {/* Floating Stats */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute top-10 -right-4 md:-right-10 bg-slate-900/90 backdrop-blur border border-purple-500/30 p-4 rounded-xl shadow-lg z-20"
              >
                <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-slate-300">Prediction Accuracy</span>
                </div>
                <div className="text-2xl font-bold text-white">98.5%</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <BrainCircuit className="w-6 h-6 text-purple-400" />
                <span className="text-purple-400 font-semibold tracking-wide uppercase text-sm">Airbridge AI</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Predict the future.<br />
                <span className="text-slate-400">Before it happens.</span>
              </h2>
              
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Leverage our proprietary machine learning models to forecast LTV, predict churn, and optimize your ad spend automatically. No data science degree required.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "LTV Prediction", desc: "Forecast revenue per user over 30, 60, 90 days." },
                  { title: "Churn Alert", desc: "Identify at-risk users before they uninstall." },
                  { title: "Smart Budget", desc: "Auto-allocate budget to high-performing channels." },
                  { title: "Anomaly Detection", desc: "Instant alerts for unusual traffic patterns." }
                ].map((item, index) => (
                  <div key={index} className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-purple-400" />
                        <h4 className="text-white font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIFeature;
