import { motion } from "framer-motion";

export const GlobalScale = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="/images/global-scale.png"
          alt="Global Scale Map"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="px-3 py-1 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full mb-4 border border-blue-400/20"
          >
            Global Coverage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Scale Without Limits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-300 max-w-2xl"
          >
            Track and measure campaigns across 190+ countries with infrastructure built for massive scale.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Devices Tracked", value: "2B+" },
            { label: "Daily Events", value: "500M+" },
            { label: "Global Partners", value: "5,000+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800 text-center hover:bg-slate-900/70 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
