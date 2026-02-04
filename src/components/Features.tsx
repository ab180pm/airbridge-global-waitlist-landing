
import { motion } from "framer-motion";
import { BarChart3, ShieldCheck, Share2 } from "lucide-react";

const features = [
  {
    title: "Unified Attribution",
    description: "Connect every touchpoint across web and app. Understand the true user journey with our advanced multi-touch attribution models.",
    icon: Share2,
    image: "/images/feature-attribution.png",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    title: "Fraud Protection",
    description: "Save your budget from ad fraud. Our real-time detection engine blocks suspicious traffic before it drains your marketing spend.",
    icon: ShieldCheck,
    image: "/images/feature-fraud.png",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    title: "Deep Analytics",
    description: "Go beyond installs. Analyze retention, LTV, and ROI with granular cohorts and customizable dashboards.",
    icon: BarChart3,
    image: "/images/feature-analytics.png",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-24 bg-slate-950 relative overflow-hidden">
        {/* Section Header */}
        <div className="container mx-auto px-4 mb-12 md:mb-16 text-center">
            <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-blue-500 font-semibold tracking-wide uppercase text-xs md:text-sm"
            >
                Why Airbridge?
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4 md:mb-6"
            >
                Measure what matters.
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
                Stop guessing. Start growing. Our platform gives you the visibility you need to scale your mobile business with confidence.
            </motion.p>
        </div>

      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-2xl bg-slate-900/50 border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image Area */}
            <div className="h-40 md:h-48 overflow-hidden relative bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
            </div>

            {/* Content */}
            <div className="p-5 md:p-6 relative z-20">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${feature.bg} ${feature.border} border flex items-center justify-center mb-4`}>
                <feature.icon className={`w-5 h-5 md:w-6 md:h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">{feature.description}</p>
            </div>

            {/* Hover Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300 bg-gradient-to-br from-${feature.color.split('-')[1]}-500 to-transparent`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
