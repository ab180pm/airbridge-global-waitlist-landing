
import { motion } from "framer-motion";
import { Activity, Zap, Server } from "lucide-react";

const RealtimeFeature = () => {
  return (
    <section className="py-20 md:py-24 bg-slate-950 relative overflow-hidden">
      {/* Full Width Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="/images/realtime-stream.png" 
            alt="Realtime Data Stream" 
            className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Activity className="w-4 h-4" />
            <span>Real-time Processing</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Speed matters. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Data in milliseconds.
            </span>
          </h2>
          
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Don't wait for daily reports. See your campaign performance as it happens. 
            Our streaming architecture processes billions of events with sub-second latency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
                { icon: Zap, title: "< 100ms", desc: "Processing Latency" },
                { icon: Server, title: "99.99%", desc: "System Uptime" },
                { icon: Activity, title: "50K+", desc: "Events Per Second" }
            ].map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-blue-500/30 transition-colors"
                >
                    <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.title}</div>
                    <div className="text-slate-400 font-medium">{stat.desc}</div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RealtimeFeature;
