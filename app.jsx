import React, { useState } from 'react';
import { Mail, Upload, FileCheck, Send, CheckCircle, ChevronDown } from 'lucide-react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Email submitted: ' + email);
    setEmail('');
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is this connected to the GST portal?",
      answer: "No. It's a standalone reconciliation tool. You upload files manually—no portal credentials, no API dependencies."
    },
    {
      question: "Does it replace our accounting software?",
      answer: "No. It works alongside Tally, Zoho, or whatever you use. Think of it as a pre-filing safety layer."
    },
    {
      question: "Is client data secure?",
      answer: "Yes. Data is encrypted at rest and in transit. We don't share, sell, or train models on your client files."
    },
    {
      question: "Who is this for?",
      answer: "CA firms managing 20–200 GST clients who want to reduce reconciliation time and prevent ITC loss without hiring more people."
    },
    {
      question: "Do I need technical skills to use it?",
      answer: "No. If you can upload a file and review a report, you're good."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-transparent blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-900/20 via-transparent to-transparent blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            [ProductName]
          </div>
          <button className="glass-button px-6 py-2.5 rounded-full text-sm font-medium">
            Get Early Access
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Stop losing ITC to manual reconciliation
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI agent that reconciles GST invoices, flags mismatches, and chases vendors before filing—so CA firms prevent ITC loss without adding headcount.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="glass-input flex-1 px-6 py-4 rounded-full text-lg"
            />
            <button type="submit" className="glass-button-primary px-8 py-4 rounded-full text-lg font-medium whitespace-nowrap">
              Join Early Access
            </button>
          </form>
          
          <p className="text-sm text-gray-500">
            Built with 12 CA firms managing 2,400+ GST returns monthly
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Month-end reconciliation shouldn't feel like detective work
            </h2>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                Manual reconciliation burns hours. Missing invoices slip through. Vendors go silent. ITC gets blocked. Notices arrive months later.
              </p>
              <p>
                Your team juggles spreadsheets, chases vendors over email, and files with fingers crossed—hoping nothing bounces back.
              </p>
              <p className="text-gray-400 font-medium">
                Every month, the same chaos. Every filing, the same risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Upload files. Get compliance-ready reports. Recover lost ITC.
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Not accounting software. Not a filing tool. A focused AI agent that slots into your workflow and handles the reconciliation mess you don't have time for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Upload,
                title: "Upload Purchase Register + GSTR-2B",
                description: "Drop your files. No integrations, no portal logins."
              },
              {
                icon: FileCheck,
                title: "AI reconciles and flags risks",
                description: "Missing invoices, GSTIN errors, ineligible ITC, vendor delays—surfaced instantly."
              },
              {
                icon: Send,
                title: "Automated vendor follow-ups",
                description: "System drafts recovery emails. You review and send. Vendors respond faster."
              },
              {
                icon: CheckCircle,
                title: "Filing-ready compliance report",
                description: "Clean summary of reconciled ITC, risks addressed, and audit trail—ready for your client and department."
              }
            ].map((step, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6 glass-icon">
                  <step.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Built for CA firms that want to scale without chaos
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Save 4–6 hours per client, per month",
                description: "No more manual matching. No Excel gymnastics. Reconciliation runs in the background."
              },
              {
                title: "Catch ITC loss before filing",
                description: "Flags missing invoices, GSTIN mismatches, and ineligible claims—before they become notices."
              },
              {
                title: "Handle 2x clients without hiring",
                description: "Automation replaces grunt work. Your team focuses on advisory, not data entry."
              },
              {
                title: "Client-ready reports in minutes",
                description: "Professional compliance summaries that make you look sharp and thorough."
              }
            ].map((benefit, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl border-l-2 border-purple-500/50">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Built with CA firms, for CA firms
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "We recovered ₹14L in ITC our intern missed—just from the first 3 months of using this.",
                author: "CA Partner, 40-client firm in Pune"
              },
              {
                quote: "Reconciliation used to take us 2 days per client. Now it's 2 hours.",
                author: "Mid-size CA firm, Mumbai"
              },
              {
                quote: "Our clients finally understand what ITC risks they're sitting on.",
                author: "CA managing 85 GST clients"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl">
                <p className="text-lg mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="text-sm text-gray-500">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-lg pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Stop leaving money on the table every filing cycle
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join 12 CA firms preventing ITC loss with early access.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="glass-input flex-1 px-6 py-4 rounded-full text-lg"
            />
            <button type="submit" className="glass-button-primary px-8 py-4 rounded-full text-lg font-medium whitespace-nowrap">
              Get Early Access
            </button>
          </form>
          
          <p className="text-sm text-gray-500">
            Questions? Email us at <a href="mailto:hello@product.com" className="text-purple-400 hover:text-purple-300 transition-colors">hello@product.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2024 [ProductName]. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glass-button {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .glass-button:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
        }

        .glass-button-primary {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.4));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .glass-button-primary:hover {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.6), rgba(59, 130, 246, 0.6));
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(168, 85, 247, 0.3);
        }

        .glass-input {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
        }

        .glass-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(168, 85, 247, 0.5);
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
        }

        .glass-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .glass-icon {
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}