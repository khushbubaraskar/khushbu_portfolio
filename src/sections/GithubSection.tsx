// "use client";

// import { motion } from "framer-motion";
// import { Github, Star, GitFork, ArrowUpRight } from "lucide-react";
// import { SectionHeading } from "@/components/SectionHeading";
// import { AuroraBackground } from "@/components/AuroraBackground";
// import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
// import { githubStats, githubLanguages, githubRepos } from "@/data/github";
// import { accentMap } from "@/constants";
// import { cn } from "@/lib/utils";

// export function GithubSection() {
//   return (
//     <section id="github" className="relative section-pad">
//       <AuroraBackground variant="violet" className="opacity-50" />
//       <div className="relative z-10 mx-auto max-w-6xl px-6">
//         <SectionHeading
//           eyebrow="Open Source"
//           title="A coding journey, in the open"
//           description="Consistent commits, real repositories and a stack that keeps growing. Here's a snapshot of the work behind the work."
//         />

//         <div className="mt-14 grid gap-6 lg:grid-cols-3">
//           {/* stats + languages */}
//           <div className="flex flex-col gap-6 lg:col-span-1">
//             <Stagger className="grid grid-cols-2 gap-4">
//               {githubStats.stats.map((s) => (
//                 <motion.div
//                   key={s.label}
//                   variants={staggerItem}
//                   className="rounded-3xl glass p-5 text-center"
//                 >
//                   <div className="text-3xl font-semibold text-gradient">
//                     {s.value}
//                   </div>
//                   <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
//                     {s.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </Stagger>

//             <Reveal className="rounded-3xl glass p-6">
//               <h3 className="text-sm font-semibold">Languages used</h3>
//               {/* segmented language bar (not a skill progress bar) */}
//               <div className="mt-4 flex h-3 w-full overflow-hidden rounded-full">
//                 {githubLanguages.map((l) => (
//                   <span
//                     key={l.name}
//                     title={`${l.name} ${l.pct}%`}
//                     style={{
//                       width: `${l.pct}%`,
//                       background: accentMap[l.accent].from,
//                     }}
//                   />
//                 ))}
//               </div>
//               <div className="mt-4 grid grid-cols-2 gap-2">
//                 {githubLanguages.map((l) => (
//                   <div
//                     key={l.name}
//                     className="flex items-center gap-2 text-xs text-muted-foreground"
//                   >
//                     <span
//                       className="h-2.5 w-2.5 rounded-full"
//                       style={{ background: accentMap[l.accent].from }}
//                     />
//                     {l.name}
//                     <span className="ml-auto text-foreground/70">{l.pct}%</span>
//                   </div>
//                 ))}
//               </div>
//             </Reveal>
//           </div>

//           {/* repos */}
//           <div className="lg:col-span-2">
//             <Stagger className="grid gap-4 sm:grid-cols-2">
//               {githubRepos.map((repo) => (
//                 <motion.a
//                   key={repo.name}
//                   href={githubStats.url}
//                   target="_blank"
//                   rel="noreferrer noopener"
//                   variants={staggerItem}
//                   whileHover={{ y: -6 }}
//                   data-cursor="hover"
//                   className="group flex flex-col rounded-3xl glass p-5 transition-all duration-500 hover:glass-strong"
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className="flex items-center gap-2 text-sm font-semibold">
//                       <Github className="h-4 w-4 text-primary" />
//                       {repo.name}
//                     </span>
//                     <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//                   </div>
//                   <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
//                     {repo.description}
//                   </p>
//                   <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
//                     <span className="flex items-center gap-1.5">
//                       <span className="h-2.5 w-2.5 rounded-full bg-primary" />
//                       {repo.language}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Star className="h-3.5 w-3.5" /> {repo.stars}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <GitFork className="h-3.5 w-3.5" /> {repo.forks}
//                     </span>
//                   </div>
//                 </motion.a>
//               ))}
//             </Stagger>

//             <Reveal delay={0.1} className="mt-4">
//               <a
//                 href={githubStats.url}
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className={cn(
//                   "flex items-center justify-center gap-2 rounded-3xl border border-border bg-foreground/[0.02] px-6 py-4 text-sm font-medium transition-colors hover:bg-foreground/[0.05]",
//                 )}
//               >
//                 <Github className="h-4 w-4" /> View full profile on GitHub
//                 <ArrowUpRight className="h-4 w-4" />
//               </a>
//             </Reveal>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
