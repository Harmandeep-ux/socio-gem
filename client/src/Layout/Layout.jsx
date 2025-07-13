import React from 'react';
import SpotlightCard from '../../utils/SpotlightCard';
import Squares from '../../utils/Squares'; // ✅ Make sure this is your animated bg
import {
  Sparkles,
  Wand2,
  FileText,
  Mail,
  Video,
  Type,
  Hash,
  CalendarClock,
  Brain,
} from 'lucide-react';

const features = [
  {
    name: 'Ad Copy Generator',
    icon: <Wand2 size={32} className="text-pink-500" />,
    desc: 'Craft compelling ads for your product or service within seconds — headlines, CTAs, and body copy optimized for high conversions.',
  },
  {
    name: 'SEO Optimizer',
    icon: <Brain size={32} className="text-green-400" />,
    desc: 'Boost your Google ranking by generating keyword-rich titles, meta descriptions, and SEO-friendly outlines tailored to your audience.',
  },
  {
    name: 'Blog Post Writer',
    icon: <FileText size={32} className="text-blue-400" />,
    desc: 'Easily generate long-form blogs or quick posts with an SEO structure, catchy intros, and relevant subheadings — all in your tone.',
  },
  {
    name: 'Content Generator',
    icon: <Sparkles size={32} className="text-yellow-400" />,
    desc: 'Create social media captions, product descriptions, video titles, outlines, and more — all infused with creativity and clarity.',
  },
  {
    name: 'Email Writer',
    icon: <Mail size={32} className="text-cyan-400" />,
    desc: 'From cold outreach to promotional emails, automate your communication with structured, engaging, and personalized email content.',
  },
  {
    name: 'Reel Caption AI',
    icon: <Video size={32} className="text-red-400" />,
    desc: 'Hook your viewers in the first second with scroll-stopping, trendy, and emotion-driven captions tailored to your video type.',
  },
  {
    name: 'Tone Rewriter',
    icon: <Type size={32} className="text-indigo-400" />,
    desc: 'Rephrase any text into formal, friendly, witty, persuasive, or even sarcastic tone — great for different platforms and audiences.',
  },
  {
    name: 'Hashtag Generator',
    icon: <Hash size={32} className="text-purple-400" />,
    desc: 'Reach more users by discovering the top-performing hashtags specific to your niche, platform, and content style.',
  },
  {
    name: 'Content Calendar',
    icon: <CalendarClock size={32} className="text-teal-400" />,
    desc: 'Plan a week or month of content instantly — organized by platform, format, time, and purpose. Save hours every week.',
  },
];

const Layout = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white px-6 sm:px-8 py-20 overflow-hidden">
      
      {/* 🟦 Animated Squares Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#ffffff10"
          hoverFillColor="#111111"
        />
      </div>

      {/* 🧠 Foreground Content */}
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text tracking-wide">
          Unlock the Power of AI ✨
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              className="p-7 rounded-3xl border border-neutral-800 bg-[#121212] shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
              spotlightColor="rgba(0, 229, 255, 0.15)"
            >
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h2 className="text-xl font-semibold text-cyan-300">{feature.name}</h2>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
            </SpotlightCard>
          ))}
        </div>

        {/* 🔽 AI Power Statement */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Supercharge Your Workflow with Intelligent Automation
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Our AI platform combines deep learning and natural language intelligence to help you ideate, write, optimize, and schedule content — all with one click.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
