"use client";

import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-[#FFE4E1] to-[#FFF0F5] font-sans text-stone-900 selection:bg-rose-400 selection:text-white pb-24 overflow-x-hidden">

      {/* Decorative Background Florals/Mandala Hints (Using CSS Gradients) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, #9F1239 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      <div className="fixed top-0 left-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-0 w-[40rem] h-[40rem] bg-rose-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 pt-12 md:pt-20">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >

          {/* 1. UNIQUE HERO: Glowing Ornaments & Rich Gradient Text */}
          <motion.section variants={fadeUp} className="text-center relative">
            <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-500 shadow-[0_0_40px_rgba(251,191,36,0.5)] border-4 border-white mb-8 relative">
              <span className="text-5xl drop-shadow-md">🕉️</span>
              <div className="absolute -inset-1 border-2 border-dashed border-amber-600/50 rounded-full animate-[spin_20s_linear_infinite]"></div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-rose-700 via-red-600 to-orange-600 mb-6 pb-2 drop-shadow-sm">
              Arun Kumar
            </h1>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-500"></div>
              <span className="px-6 py-2 rounded-full bg-gradient-to-r from-rose-500 to-red-500 text-white text-xs sm:text-sm font-bold uppercase tracking-widest shadow-lg shadow-rose-500/30">
                Groom's Biodata
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-500"></div>
            </div>

            <p className="text-xl md:text-2xl text-rose-900 font-semibold italic">
              "Son of Sri Fago Chaudhary & Smt. Mala Devi"
            </p>
          </motion.section>

          {/* 2. UNIQUE ABOUT ME: Leaf-shaped Amber Box */}
          <motion.section variants={fadeUp} className="relative">
            <div className="absolute -left-4 -top-4 text-6xl opacity-20">✨</div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 p-8 md:p-12 shadow-xl shadow-amber-900/5 rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl relative">
              <h2 className="text-3xl font-extrabold text-amber-900 mb-6 flex items-center gap-3">
                <span className="bg-amber-200 text-amber-700 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-inner">👤</span>
                About Me
              </h2>
              <div className="text-lg md:text-xl text-amber-950/80 leading-relaxed font-medium space-y-4">
                <p>
                  I am a caring, family-oriented, and ambitious individual with a modern outlook while staying deeply rooted in traditional values. I believe in maintaining a healthy balance between personal and professional life.
                </p>
                <p>
                  Professionally, I am a Senior Software Developer with over 5 years of experience, working as a freelancer with diverse clients and also leading teams on various projects. This journey has made me responsible, adaptable, and focused on continuous growth.
                </p>
                <p>
                  In my personal life, I value strong family bonds and enjoy spending quality time with loved ones. I have an interest in cooking, creative activities like dancing, and playing clapbox, which bring joy and balance to my routine.
                </p>
                <p>
                  I am looking for a well-educated, understanding, and supportive partner who shares similar values, respects family traditions, and believes in mutual growth, trust, and lifelong companionship.
                </p>
              </div>
            </div>
          </motion.section>

          {/* 3. UNIQUE PERSONAL DETAILS: Floating Neon Pills in White Oval */}
          <motion.section variants={fadeUp}>
            <div className="bg-white/80 backdrop-blur-md border-[4px] border-white p-8 md:p-14 shadow-2xl shadow-rose-900/5 rounded-[3rem] text-center">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600 mb-10 flex flex-col items-center justify-center gap-2">
                <span className="text-4xl drop-shadow-md">💎</span>
                Personal Details
              </h2>

              <div className="flex flex-wrap justify-center gap-4">
                <Pill label="Date of Birth" value="01 Feb 1995" color="from-rose-400 to-red-400" />
                <Pill label="Age" value="30 Years" color="from-orange-400 to-amber-400" />
                <Pill label="Height" value="5'8&quot;" color="from-emerald-400 to-teal-400" />
                <Pill label="Weight" value="70 kg" color="from-cyan-400 to-blue-400" />
                <Pill label="Blood Group" value="B+ve" color="from-red-500 to-rose-600" />
                <Pill label="Complexion" value="Fair" color="from-indigo-400 to-purple-400" />
              </div>

              <div className="mt-8 pt-8 border-t-2 border-dashed border-rose-100 flex flex-col items-center">
                <span className="text-rose-400 font-bold uppercase tracking-widest text-xs mb-4">Mother Tongue & Languages</span>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-6 py-2 rounded-xl bg-gradient-to-r from-fuchsia-100 to-pink-100 text-fuchsia-800 font-bold border border-fuchsia-200">Hindi (Mother Tongue)</span>
                  <span className="px-6 py-2 rounded-xl bg-white text-stone-600 font-bold border border-stone-200 shadow-sm">English</span>
                  <span className="px-6 py-2 rounded-xl bg-white text-stone-600 font-bold border border-stone-200 shadow-sm">Odia</span>
                  <span className="px-6 py-2 rounded-xl bg-white text-stone-600 font-bold border border-stone-200 shadow-sm">Telugu</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 4. UNIQUE EDUCATION: Deep Dark Space Plaque */}
          <motion.section variants={fadeUp}>
            <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-950 p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden">
              {/* Starry dots */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="absolute right-0 top-0 w-64 h-64 bg-fuchsia-500 rounded-full blur-[80px] opacity-30"></div>

              <h2 className="text-3xl font-extrabold text-white mb-10 flex items-center gap-4 relative z-10">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md border border-white/20 text-3xl">🎓</div>
                Educational Journey
              </h2>

              <div className="space-y-6 relative z-10">
                <DarkEduRow level="Post Graduate" title="M.Tech in AI & DSE (Pursuing)" inst="Indian Institute of Technology, Patna" color="bg-fuchsia-400" />
                <DarkEduRow level="Graduate" title="B.Tech (CSE)" grade="70%" inst="Greater Noida Institute of Technology" color="bg-purple-400" />
                <DarkEduRow level="12th Standard" title="Higher Secondary" grade="82.2%" inst="Jawahar Navodaya Vidyalaya, Ranga Reddy, Hyderabad" color="bg-indigo-400" />
                <DarkEduRow level="10th Standard" title="Secondary" grade="83.4%" inst="Jawahar Navodaya Vidyalaya, Supaul" color="bg-blue-400" last />
              </div>
            </div>
          </motion.section>

          {/* 5. UNIQUE PROFESSION: Emerald Dashed Certificate */}
          <motion.section variants={fadeUp}>
            <div className="bg-emerald-50 p-2 rounded-[2rem] shadow-xl">
              <div className="border-4 border-dashed border-emerald-300 rounded-[1.5rem] p-8 md:p-10 bg-white relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 text-[150px] opacity-5">💼</div>
                <h2 className="text-3xl font-extrabold text-emerald-800 mb-8 flex items-center gap-3">
                  <span className="text-4xl text-emerald-500 drop-shadow-md">💼</span>
                  Professional Career
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-6 rounded-2xl border-2 border-emerald-200 shadow-inner md:col-span-2">
                    <p className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-2">Current Occupation</p>
                    <h3 className="text-3xl font-black text-emerald-950 mb-2">Software Developer</h3>
                    <p className="text-emerald-800 font-semibold bg-white/50 inline-block px-3 py-1 rounded-lg">Freelancer (App, Web & AI)</p>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 flex flex-col justify-center items-center text-center">
                      <p className="text-emerald-500 font-bold uppercase tracking-widest text-[10px] mb-1">Experience</p>
                      <p className="text-2xl font-bold text-emerald-900">5 Years</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 flex flex-col justify-center items-center text-center">
                      <p className="text-emerald-500 font-bold uppercase tracking-widest text-[10px] mb-1">Monthly Income</p>
                      <p className="text-xl font-bold text-emerald-900">₹1L – ₹1.5L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 6. UNIQUE FAMILY: Overlapping Arches (Parents & Siblings) */}
          <motion.section variants={fadeUp}>
            <div className="text-center mb-8">
              <span className="text-5xl drop-shadow-lg mb-4 block">👨‍👩‍👦</span>
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">Family Background</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4">

              {/* Parents Arch */}
              <div className="bg-gradient-to-b from-blue-50 to-white rounded-t-full rounded-b-3xl p-8 pt-16 border-[6px] border-white shadow-xl shadow-blue-900/10 text-center relative mt-8 lg:mt-0">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl shadow-lg border-4 border-white">
                  ❤️
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-8 uppercase tracking-widest">Parents</h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-blue-100">
                    <p className="text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-1">Father</p>
                    <p className="text-xl font-bold text-blue-950">Sri Fago Chaudhary</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-blue-100 relative">
                    <div className="absolute -left-2 -top-2 text-2xl">💮</div>
                    <p className="text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-1">Mother</p>
                    <p className="text-xl font-bold text-blue-950 mb-1">Smt. Mala Devi</p>
                    <p className="text-blue-600/70 font-semibold text-sm">Aanganwadi Sevika</p>
                  </div>
                </div>
              </div>

              {/* Siblings Bowl */}
              <div className="bg-gradient-to-t from-cyan-50 to-white rounded-b-full rounded-t-3xl p-8 pb-16 border-[6px] border-white shadow-xl shadow-cyan-900/10 text-center relative mb-8 lg:mb-0">
                <h3 className="text-2xl font-bold text-cyan-900 mb-8 uppercase tracking-widest">Siblings</h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-cyan-100">
                    <p className="text-cyan-400 font-bold uppercase tracking-widest text-[10px] mb-1">Brother 1</p>
                    <p className="text-xl font-bold text-cyan-950 mb-2">Bharat Kumar</p>
                    <div className="bg-cyan-50 rounded-xl p-3 text-sm text-cyan-800 font-medium space-y-1">
                      <p>12th (Jawahar Navodaya Vidyalaya, Saharsa)</p>
                      <p>B.Com (Mansarovar Univ, Bhopal)</p>
                      <p className="font-bold text-cyan-700 mt-2 border-t border-cyan-200/50 pt-2">Working as Outreach Specialist</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-cyan-100 relative">
                    <div className="absolute -right-2 -bottom-2 text-2xl">🌟</div>
                    <p className="text-cyan-400 font-bold uppercase tracking-widest text-[10px] mb-1">Brother 2</p>
                    <p className="text-xl font-bold text-cyan-950 mb-2">Abhinav Kumar</p>
                    <div className="bg-cyan-50 rounded-xl p-3 text-sm text-cyan-800 font-medium space-y-1">
                      <p>12th (BSEB Board)</p>
                      <p className="font-bold text-cyan-700 mt-2 border-t border-cyan-200/50 pt-2">Freelancer (Video Editor)</p>
                      <p className="font-bold text-cyan-700">Digital Creator</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-cyan-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl shadow-lg border-4 border-white">
                  🤝
                </div>
              </div>

            </div>
          </motion.section>

          {/* 7. UNIQUE HOBBIES: Floating Scattered Notes */}
          <motion.section variants={fadeUp} className="bg-amber-100/50 p-8 md:p-12 rounded-[3rem] border-2 border-dashed border-amber-300 relative overflow-hidden text-center mt-12">
            <h2 className="text-3xl font-extrabold text-amber-900 mb-10 flex items-center justify-center gap-3">
              <span className="text-4xl">🎨</span> Hobbies & Interests
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="bg-pink-100 text-pink-700 px-8 py-4 rounded-full text-xl font-black shadow-lg shadow-pink-200 border border-pink-200 transform hover:-rotate-6 transition-transform cursor-pointer">
                <span className="text-2xl mr-2">💃</span> Dancing
              </div>
              <div className="bg-orange-100 text-orange-700 px-8 py-4 rounded-tr-3xl rounded-bl-3xl text-xl font-black shadow-lg shadow-orange-200 border border-orange-200 transform hover:scale-110 transition-transform cursor-pointer">
                <span className="text-2xl mr-2">🍳</span> Cooking
              </div>
              <div className="bg-purple-100 text-purple-700 px-8 py-4 rounded-xl text-xl font-black shadow-lg shadow-purple-200 border border-purple-200 transform hover:rotate-6 transition-transform cursor-pointer">
                <span className="text-2xl mr-2">🎵</span> Clapbox
              </div>
            </div>
          </motion.section>

          {/* 8. UNIQUE PARTNER PREFERENCES: Majestic Tilted Banner */}
          <motion.section variants={fadeUp} className="py-12">
            <div className="transform -rotate-1 bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 rounded-[2rem] p-8 md:p-14 shadow-2xl shadow-rose-900/30 text-white text-center relative">
              <div className="absolute top-4 left-4 text-4xl opacity-30">✧</div>
              <div className="absolute bottom-4 right-4 text-4xl opacity-30">✧</div>

              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-rose-500 text-4xl shadow-xl mb-6 transform -translate-y-12">
                💝
              </div>

              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest mb-8 -mt-8 drop-shadow-md">
                Partner Preferences
              </h2>

              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 inline-block max-w-2xl w-full">
                <p className="text-rose-200 font-bold uppercase tracking-widest text-xs mb-3 flex items-center justify-center gap-2">
                  <span className="text-xl leading-none">★</span> Educational Requirement <span className="text-xl leading-none">★</span>
                </p>
                <p className="text-3xl md:text-5xl font-black text-white drop-shadow-lg">
                  B.Tech <span className="text-rose-300 font-medium text-2xl mx-2 italic">OR</span> BCA + MCA
                </p>
              </div>
            </div>
          </motion.section>

          {/* 9. UNIQUE CONTACT: Stitched Gold Footer */}
          <motion.section variants={fadeUp}>
            <div className="bg-[#5a1827] text-white p-2 rounded-2xl shadow-2xl">
              <div className="border border-dashed border-[#e3b868] rounded-xl p-8 md:p-12 text-center bg-[#6e1e30] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
                <h2 className="text-3xl font-bold text-[#e3b868] mb-8 relative z-10 flex items-center justify-center gap-3">
                  <span className="text-4xl">📞</span> Get in Touch
                </h2>
                <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 relative z-10">
                  <div className="bg-black/20 px-6 py-4 rounded-full border border-white/10 flex items-center gap-3 w-full md:w-auto">
                    <span className="text-2xl">📱</span>
                    <span className="text-lg font-bold tracking-wider">8084324444 (Mother)</span>
                  </div>
                  <div className="bg-black/20 px-6 py-4 rounded-full border border-white/10 flex items-center gap-3 w-full md:w-auto">
                    <span className="text-2xl">📱</span>
                    <span className="text-lg font-bold tracking-wider">9507358710 (Mama)</span>
                  </div>
                  <a href="http://arundevfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-amber-500/20 to-rose-500/20 px-6 py-4 rounded-full border border-white/20 flex items-center gap-3 w-full md:w-auto hover:bg-white/10 transition-colors">
                    <span className="text-2xl">💻</span>
                    <span className="text-lg font-bold tracking-widest text-[#e3b868]">View Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

        </motion.div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// HELPER COMPONENTS
// -------------------------------------------------------------

function Pill({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className={`flex flex-col items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg border border-white/20 min-w-[140px] transform hover:scale-105 transition-transform cursor-default`}>
      <span className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">{label}</span>
      <span className="text-lg font-bold drop-shadow-sm">{value}</span>
    </div>
  );
}

function DarkEduRow({ level, title, inst, grade, color, last }: { level: string, title: string, inst: string, grade?: string, color: string, last?: boolean }) {
  return (
    <div className="relative pl-10">
      {!last && <div className="absolute left-[11px] top-6 w-[2px] h-[calc(100%+1rem)] bg-white/20"></div>}
      <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${color} shadow-[0_0_15px_rgba(255,255,255,0.5)] border-4 border-indigo-950`}></div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#a78bfa] mb-1">{level}</p>
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-sm font-medium text-white/70">{inst}</p>
        </div>

        {grade ? (
          <div className="bg-white/10 px-4 py-2 rounded-xl text-center backdrop-blur-sm border border-white/20 shrink-0">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-[#a78bfa]">Score</span>
            <span className="block font-black text-white text-xl">{grade}</span>
          </div>
        ) : (
          <div className="bg-fuchsia-500/20 px-4 py-2 rounded-xl text-center backdrop-blur-sm border border-fuchsia-500/50 shrink-0 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
            <span className="font-bold text-fuchsia-100">Pursuing</span>
          </div>
        )}
      </div>
    </div>
  );
}
