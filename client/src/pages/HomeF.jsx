import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  FileText,
  Wand2,
  Sparkles,
  Hash,
  CalendarClock,
  Type,
  Video,
  Brain,
} from 'lucide-react';

import Beams from '../../utils/Beams';
import CardSwap, { Card } from '../../utils/CardSwap';

const features = [
  {
    name: 'Ad Copy Generator',
    icon: <Wand2 size={32} className="text-pink-500" />,
    desc: 'Craft compelling ads for your product or service within seconds — headlines, CTAs, and body copy optimized for high conversions.',
    route: '/ad-copy',
  },
  {
    name: 'SEO Optimizer',
    icon: <Brain size={32} className="text-green-400" />,
    desc: 'Boost your Google ranking by generating keyword-rich titles, meta descriptions, and SEO-friendly outlines tailored to your audience.',
    route: '/seo-optimizer',
  },
  {
    name: 'Blog Post Writer',
    icon: <FileText size={32} className="text-blue-400" />,
    desc: 'Easily generate long-form blogs or quick posts with an SEO structure, catchy intros, and relevant subheadings — all in your tone.',
    route: '/blog-writer',
  },
  {
    name: 'Content Generator',
    icon: <Sparkles size={32} className="text-yellow-400" />,
    desc: 'Create social media captions, product descriptions, video titles, outlines, and more — all infused with creativity and clarity.',
    route: '/content-generator',
  },
  {
    name: 'Email Writer',
    icon: <Mail size={32} className="text-cyan-400" />,
    desc: 'From cold outreach to promotional emails, automate your communication with structured, engaging, and personalized email content.',
    route: '/email-writer',
  },
  {
    name: 'Reel Caption AI',
    icon: <Video size={32} className="text-red-400" />,
    desc: 'Hook your viewers in the first second with scroll-stopping, trendy, and emotion-driven captions tailored to your video type.',
    route: '/reel-caption',
  },
  {
    name: 'Tone Rewriter',
    icon: <Type size={32} className="text-indigo-400" />,
    desc: 'Rephrase any text into formal, friendly, witty, persuasive, or even sarcastic tone — great for different platforms and audiences.',
    route: '/tone-rewriter',
  },
  {
    name: 'Hashtag Generator',
    icon: <Hash size={32} className="text-purple-400" />,
    desc: 'Reach more users by discovering the top-performing hashtags specific to your niche, platform, and content style.',
    route: '/hashtag-generator',
  },
  {
    name: 'Content Calendar',
    icon: <CalendarClock size={32} className="text-teal-400" />,
    desc: 'Plan a week or month of content instantly — organized by platform, format, time, and purpose. Save hours every week.',
    route: '/content-calendar',
  },
];

const HomeF = () => {
  return (
    <div className="relative min-h-[70vh] bg-[#0a0a0a] text-white px-6 py-12 overflow-hidden">
      {/* 🌌 Background Beams */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={10}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.3}
          scale={0.2}
          rotation={0}
        />
      </div>

      {/* 🌟 Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Supercharge Your Content with AI
          </h2>
          <p className="text-neutral-300 text-lg mb-4">
            Whether you're a creator, marketer, or business — our AI toolkit helps you ideate, write, optimize, and schedule content at scale.
          </p>
          <p className="text-neutral-400 text-base">
            Explore tools for blogs, captions, emails, ads, SEO, hashtags, and much more — all powered by smart AI models.
          </p>
        </div>

        {/* Right: Animated Card Feature */}
      {/* Right: Animated Card Feature */}
<div className="w-full lg:w-1/2 flex justify-center items-start min-h-[350px] pt-16">
  <CardSwap
    cardDistance={60}
    verticalDistance={40}
    delay={4000}
    pauseOnHover={true}
  >
    {features.map((tool, idx) => (
      <Card key={idx}>
        <Link
          to={tool.route || "#"}
          className="bg-[#181818] backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.03] transition-all shadow-xl w-[360px] h-[260px]"
        >
          <div className="flex items-center gap-3">
            {tool.icon}
            <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed">{tool.desc}</p>
        </Link>
      </Card>
    ))}
  </CardSwap>
</div>

      </div>
    </div>
  );
};

export default HomeF;
