
import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle } from "lucide-react";

const SecurityFeature = () => {
  return (
    <section className="py-20 md:py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-emerald-400" />
                <span className="text-emerald-400 font-semibold tracking-wide uppercase text-sm">Enterprise Security</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Your data is safe.<br />
                <span className="text-slate-400">Guaranteed.</span>
              </h2>
              
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We prioritize data privacy and security above all else. Our infrastructure is built to meet the most stringent enterprise standards.
              </p>

              <div className="space-y-4">
                {[
                  "ISO 27001 & SOC 2 Type II Certified",
                  "GDPR & CCPA Compliant",
                  "End-to-end Data Encryption",
                  "Role-based Access Control (RBAC)"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full" />
              <img 
                src="/images/security-shield.png" 
                alt="Security Shield" 
                className="relative z-10 w-full h-auto rounded-2xl border border-slate-800 shadow-2xl bg-slate-900/50 backdrop-blur-sm"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl z-20 flex items-center gap-3"
              >
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <Lock className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                    <div className="text-xs text-slate-400 uppercase">Encryption</div>
                    <div className="text-white font-bold">AES-256 Bit</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecurityFeature;
