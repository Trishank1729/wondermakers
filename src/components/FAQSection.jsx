"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What kinds of projects are a good fit for Wonder Makers?",
      a: "Our core areas include high-end websites and digital experiences, applications and SaaS platforms, premium e-commerce, and Web3 or AI products. We also take on projects where design and engineering create a real advantage – from 3D visualisations and immersive brand experiences to interactive motion, real-time systems, and fan-driven or content-led platforms. We work with both global enterprises and early-stage startups. Company size matters less than the ambition behind the product. If you're unsure whether it's a fit, reach out – the first conversation is always exploratory."
    },
    {
      q: "What does a project like this typically cost?",
      a: "It depends on scope and complexity. As a general reference: Focused projects such as landing pages or campaign sites start from $10,000. A full web presence with a design system typically ranges $40,000 - $150,000. End-to-end product delivery – applications, SaaS platforms, or complex Web3 systems – starts from $80,000. We don&apos;t quote before understanding the context. After the first conversation, you'll receive an indicative budget and timeline before any commitment. Payments are milestone-based, with no large upfront sums or surprise invoices."
    },
    {
      q: "How do you approach pricing and project models?",
      a: "It depends on how clearly the scope is defined. If the project is well specified from the start, we can offer a fixed-time, fixed-price model with clear deliverables and budget. If there are still open questions, we usually propose a few structured options – for example, different levels of design or technical complexity – each with its own scope and pricing. For more complex projects, we typically recommend starting with a Discovery & Definition phase. This helps clarify requirements, resolve key unknowns, and define a realistic roadmap and budget. In cases where the scope evolves over time, we often work in a more flexible, agile model. This allows us to adapt to new insights while keeping the focus on delivering the most valuable outcome."
    },
    {
      q: "We're working with a tight deadline – how fast can you move?",
      a: "Faster than most studios. Typical timelines look like this: Landing page or campaign site: as little as 14 days. Full web presence: 6–10 weeks. Digital product or application: 3–6 months. Rush timelines are possible. We'll always be transparent about what level of quality is achievable within a compressed schedule. In practice, the biggest delays tend to come from unclear scope or slow feedback on the client side – not production speed."
    },
    {
      q: "Will we actually work with the senior team we meet at the start?",
      a: "Yes. Wonder Makers is a senior-led studio, which means the team you meet during the first conversation is the team that works on your project. Our 20+ in-house specialists cover the full stack – from strategy and UX to 3D, frontend, backend, and Web3 engineering. Each engagement has a dedicated project lead responsible for quality and communication throughout the collaboration. We don&apos;t pitch with seniors and deliver with juniors."
    },
    {
      q: "How is your team structured, and how do you handle international collaboration?",
      a: "We are a Prague-based studio of 20+ in-house specialists, working with clients globally. Remote collaboration is a natural part of how we operate. We typically use tools such as Slack or Teams for communication, Figma for design, and platforms like Asana or Linear for project management. Our CET timezone allows us to overlap effectively across regions, so timezone differences are rarely a blocker in practice."
    },
    {
      q: "Can you work alongside our internal team?",
      a: "Yes – this is one of our core engagement models. Through Embedded Expertise, our senior specialists integrate directly into your team, using your tools, joining your standups, and strengthening specific workstreams. From the start, we define clear ownership – what's ours, what's yours, and what's shared. The goal is simple: to strengthen your team, not replace it."
    },
    {
      q: "We don&apos;t have a brief yet – can we still start?",
      a: "Yes – we can start, just not with production right away. If the scope isn't clearly defined, we usually begin with a Discovery & Definition phase, where we help shape the brief, validate key assumptions, and define a clear roadmap for delivery. This step is especially important for more complex projects. It allows us to validate technical feasibility early, reduce risk before development begins, and translate high-level ideas into concrete specifications. It also helps prevent scope creep and enables more accurate planning of timeline and budget. You don&apos;t need a finished brief to get started – just a rough idea. We'll take it from there."
    },
    {
      q: "Do you help shape the product, or mainly execute on briefs?",
      a: "Strategy is the first service we offer – not an add-on. Our Product Strategy work includes discovery, user research, competitive analysis, technical feasibility, roadmapping, and MVP scoping. Every collaboration begins with Exploration & Alignment, regardless of how detailed the initial brief is. In many cases, we help refine the problem before building the solution."
    },
    {
      q: "Is your team experienced enough to handle complex, large-scale technical projects?",
      a: "Yes – this is a core part of our work. We design and build systems such as scalable backend architectures, real-time platforms, SaaS products, multi-chain Web3 infrastructure, NFT marketplaces, and performance-critical applications. What sets us apart is the ability to combine that level of engineering with high-end design. We don&apos;t treat design and development as separate layers – both are developed together to create products that are not only robust, but also intuitive and visually distinctive."
    },
    {
      q: "How do you approach AI in your work?",
      a: "Selectively and transparently. In design, generative tools help accelerate early concept exploration. In development, we use tools such as Claude Code to support code generation and rapid prototyping – always using up-to-date, paid versions for reliability and performance. AI never replaces senior judgment. Every AI-assisted output is reviewed by experienced designers or engineers before it reaches you. If AI contributes to final deliverables, we're transparent about it, including any relevant IP or licensing considerations."
    },
    {
      q: "What happens after launch?",
      a: "Many clients continue working with us after launch through ongoing product development – in fact, we often prefer long-term partnerships. This may include feature development, performance optimisation, analytics, or iterative UX improvements. Some teams also choose our Embedded Expertise model, where senior specialists remain integrated in the product team long-term."
    }
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="relative w-full py-20 lg:py-32 px-6 md:px-12 bg-transparent z-20"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-12 lg:gap-20">
        
        {/* Section Title */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-accent">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            Frequently Asked<br />Questions
          </h2>
        </div>

        {/* Accordions List */}
        <div className="flex flex-col border-t border-foreground/5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border-b border-foreground/5 py-4 md:py-6"
              >
                <button
                  onClick={() => toggleOpen(idx)}
                  className="w-full flex flex-row items-center justify-between text-left gap-6 cursor-pointer select-none"
                >
                  <h3 className="text-lg md:text-xl font-normal text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    {faq.q}
                  </h3>
                  {/* Plus/Minus visual toggle icon */}
                  <div className="shrink-0 w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center relative">
                    <span className="absolute w-3.5 h-[1.5px] bg-current" />
                    <motion.span 
                      animate={{ rotate: isOpen ? 0 : 90 }}
                      className="absolute w-3.5 h-[1.5px] bg-current"
                    />
                  </div>
                </button>

                {/* Animated Answer Box */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-foreground/70 text-sm md:text-base leading-relaxed pl-1 max-w-3xl whitespace-pre-line">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
