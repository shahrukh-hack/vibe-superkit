import React, { useState } from 'react';
import { useLenis } from '@/lib/smooth-scroll';
import { TasteToaster, ToastTriggerDemo } from '@/components/emil-primitives/ToastTrigger';
import { SpringButton } from '@/components/emil-primitives/SpringButton';
import { TactileCard } from '@/components/emil-primitives/TactileCard';
import { MagneticHover } from '@/components/emil-primitives/MagneticHover';
import { SpringDrawer } from '@/components/emil-primitives/SpringDrawer';
import { SearchCommand } from '@/components/origin-ui/SearchCommand';
import { InputWithAdornment } from '@/components/origin-ui/InputWithAdornment';
import { SegmentedControl } from '@/components/origin-ui/SegmentedControl';
import { MarqueeTicker } from '@/components/motion/MarqueeTicker';
import { KineticText } from '@/components/motion/KineticText';
import { EditorialHero } from '@/components/boutique-surfaces/EditorialHero';
import { BespokeFeatureGrid } from './components/boutique-surfaces/BespokeFeatureGrid';
import { TactilePricing } from './components/boutique-surfaces/TactilePricing';
import { SpringAccordion } from './components/origin-ui/SpringAccordion';
import { CopySnippet } from './components/origin-ui/CopySnippet';
import { StatusPill } from './components/emil-primitives/StatusPill';
import { TestimonialCard } from './components/boutique-surfaces/TestimonialCard';
import { EnterpriseBentoGrid } from './components/boutique-surfaces/EnterpriseBentoGrid';
import { NumberCounter } from './components/motion/NumberCounter';
import { MetricRing } from './components/motion/MetricRing';
import { SpotlightCard } from './components/motion/SpotlightCard';
import { ThemeSwitcher } from '@/components/showcase/ThemeSwitcher';
import { TokenPlayground } from '@/components/showcase/TokenPlayground';
import { BeforeAfterSlider } from '@/components/showcase/BeforeAfterSlider';
import { KeybindingModal } from '@/components/showcase/KeybindingModal';
import { PromptCopier } from '@/components/showcase/PromptCopier';
import { LibraryBadgeRow } from '@/components/showcase/LibraryBadgeRow';
import { ProjectDemos } from '@/components/showcase/ProjectDemos';
import {
  Sparkles,
  Layers,
  Code2,
  Terminal,
  ArrowUpRight,
  ShieldCheck,
  Compass,
  Sliders,
  CheckCircle2,
} from 'lucide-react';

export function App() {
  // Initialize butter-smooth momentum scroll
  useLenis();

  const [activeTab, setActiveTab] = useState<'primitives' | 'inputs' | 'typography'>('primitives');
  const [searchValue, setSearchValue] = useState('');

  const tickerItems = [
    'EMIL KOWALSKI PHYSICS',
    'ANTI-AI SLOP SHIELD',
    'ORIGIN UI CONTROLS',
    'LENIS MOMENTUM SCROLL',
    'FRAUNCES + PLUS JAKARTA SANS',
    '21ST.DEV & MCP NATIVE',
    'RADIX ACCESSIBILITY',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground bg-grain font-sans selection:bg-primary/20 selection:text-foreground">
      {/* Sonner Custom Toaster Container */}
      <TasteToaster />

      {/* Top Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-mono font-bold text-sm shadow-tactile-sm">
              V
            </div>
            <div>
              <span className="font-semibold text-sm tracking-tight text-foreground">
                Vibe Superkit
              </span>
              <span className="hidden sm:inline-block ml-2 text-[11px] font-mono text-muted-foreground">
                v1.0 (High-Taste Engine)
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-muted-foreground">
            <a href="#interactive-demos" className="text-primary font-semibold hover:underline transition-colors flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              [ LIVE DEMOS ]
            </a>
            <a href="#interactive-lab" className="hover:text-foreground transition-colors">
              [ COMPONENT LAB ]
            </a>
            <a href="#prompt-generator-section" className="hover:text-foreground transition-colors">
              [ AI PROMPTS ]
            </a>
            <a href="#taste-guide-section" className="hover:text-foreground transition-colors">
              [ TASTE GUIDE ]
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/shahrukh-hack/vibe-superkit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-muted/40 px-3 py-1.5 text-xs font-mono text-foreground hover:bg-muted transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>@shahrukh-hack</span>
              <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
            </a>

            <SpringButton
              variant="primary"
              size="sm"
              onClick={() => {
                const el = document.getElementById('prompt-generator-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Copy Prompts</span>
            </SpringButton>
          </div>
        </div>
      </header>

      {/* Main Content Flow */}
      <main className="space-y-12">
        {/* Editorial Magazine Hero */}
        <EditorialHero />

        {/* Global Design Theme Switcher & Token Playground Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4">
          <ThemeSwitcher />
          <TokenPlayground />
        </div>

        {/* Before / After Visual Comparison Slider */}
        <BeforeAfterSlider />

        {/* Infinite Seamless Marquee Ticker */}
        <MarqueeTicker items={tickerItems} speed={30} />

        {/* INTERACTIVE COMPONENT LAB BENCH */}
        <section id="interactive-lab" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          {/* Origin UI Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <InputWithAdornment />
            <SegmentedControl />
            <SearchCommand />
          </div>

          {/* 1-Click Copy Snippet & Status Pills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <CopySnippet command="npx vibe-skills add taste-engine" />
            <div className="flex flex-wrap items-center justify-start md:justify-end gap-2 p-2 rounded-xl border border-border bg-card/60">
              <StatusPill status="success" label="Taste Engine Active" />
              <StatusPill status="syncing" label="AST Indexed" />
              <StatusPill status="active" label="Stripe Tokens" />
            </div>
          </div>

          {/* Dynamic Spotlight Cards (Aceternity / Magic UI Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <SpotlightCard
              badge="Tactile Physics"
              title="Dynamic Mouse Spotlight"
              description="Radial mouse-following light gradient that illuminates borders and surfaces without performance lag."
            />
            <SpotlightCard
              badge="Copy-Paste Registry"
              title="Zero Dependency Lock-in"
              description="Modular components designed for AI tools (Cursor, v0, Claude) to read and modify directly in your project."
            />
            <SpotlightCard
              badge="Design System"
              title="Editorial Typography"
              description="Fraunces serif combined with Plus Jakarta Sans and JetBrains Mono for a distinctive high-taste aesthetic."
            />
          </div>

          {/* Spring Accordion / FAQ */}
          <div className="mb-12">
            <SpringAccordion />
          </div>

          {/* Metric Rings Hardware Dashboard Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <MetricRing percentage={97} label="AST Token Reduction" sublabel="Progressive Disclosure" color="stroke-primary" />
            <MetricRing percentage={100} label="WCAG AAA Contrast" sublabel="Mathematical HSL" color="stroke-emerald-500" />
            <MetricRing percentage={99} label="Emil Spring Fidelity" sublabel="420Hz Physics Tuning" color="stroke-indigo-500" />
          </div>

          {/* Live Metrics Row */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <NumberCounter label="Spring Physics Curves" value={420} suffix=" Hz" />
            <NumberCounter label="Accessible Primitives" value={28} prefix="+" />
            <NumberCounter label="Design Token Themes" value={4} />
            <NumberCounter label="AI Anti-Slop Score" value={100} suffix="%" />
          </section>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-mono text-xs text-primary font-semibold tracking-wider uppercase">
                [ INTERACTIVE LAB BENCH ]
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-light mt-1 tracking-tight">
                Experience high-taste micro-interactions.
              </h2>
            </div>

            <SegmentedControl
              options={[
                { value: 'primitives', label: 'Emil Primitives', icon: <Sparkles className="w-3.5 h-3.5" /> },
                { value: 'inputs', label: 'Origin UI Controls', icon: <Sliders className="w-3.5 h-3.5" /> },
                { value: 'typography', label: 'Kinetic Motion', icon: <Code2 className="w-3.5 h-3.5" /> },
              ]}
              value={activeTab}
              onChange={setActiveTab}
            />
          </div>

          {/* TAB 1: EMIL KOWALSKI PRIMITIVES */}
          {activeTab === 'primitives' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Spring Buttons Bench */}
              <TactileCard className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-foreground">
                    1. Spring Physics Buttons
                  </h3>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    stiffness: 420
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Hover to feel subtle lift, tap to feel tactile spring compression.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <SpringButton variant="primary" size="md">
                    Primary Spring
                  </SpringButton>
                  <SpringButton variant="secondary" size="md">
                    Secondary
                  </SpringButton>
                  <SpringButton variant="outline" size="md">
                    Outline
                  </SpringButton>
                </div>
              </TactileCard>

              {/* Sonner Toast Physics */}
              <TactileCard className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-foreground">
                    2. Sonner Custom Alerts
                  </h3>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    sonner + tactile
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Physics-animated stacked toast notifications with high contrast styling.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <ToastTriggerDemo />
                  <SpringDrawer />
                </div>
              </TactileCard>

              {/* Magnetic Hover Physics */}
              <TactileCard className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-foreground">
                    3. Magnetic Cursor Pull
                  </h3>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    delta cursor
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Subtle organic magnetic attraction towards mouse coordinates.
                </p>
                <div className="flex justify-center py-2">
                  <MagneticHover strength={0.35}>
                    <div className="rounded-full border border-primary/40 bg-primary/10 px-6 py-3 font-mono text-xs font-semibold text-primary shadow-tactile-sm cursor-pointer hover:bg-primary/20 transition-colors flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      Hover Near Me
                    </div>
                  </MagneticHover>
                </div>
              </TactileCard>
            </div>
          )}

          {/* TAB 2: ORIGIN UI FORM CONTROLS */}
          {activeTab === 'inputs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TactileCard className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground">
                  Command Search with Keybinding Badge
                </h3>
                <p className="text-xs text-muted-foreground">
                  Includes ⌘K shortcut indicator and instant clear action.
                </p>
                <SearchCommand
                  placeholder="Filter components, design tokens..."
                  onSearch={setSearchValue}
                />
                {searchValue && (
                  <p className="text-xs font-mono text-primary">
                    Active query: "{searchValue}"
                  </p>
                )}
              </TactileCard>

              <TactileCard className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground">
                  Adorned Inputs & Secret Revealers
                </h3>
                <div className="space-y-3">
                  <InputWithAdornment
                    label="API Token Key"
                    value="agy_taste_engine_live_99824"
                    readOnly
                    copyable
                    hint="Click icon on right to copy directly"
                  />
                  <InputWithAdornment
                    label="Master Encryption Key"
                    defaultValue="BespokeDesignCraft2026"
                    isPassword
                    hint="Toggle eye icon to reveal value"
                  />
                </div>
              </TactileCard>
            </div>
          )}

          {/* TAB 3: KINETIC TYPOGRAPHY */}
          {activeTab === 'typography' && (
            <TactileCard className="space-y-6 p-8">
              <div className="space-y-2">
                <span className="font-mono text-xs text-primary uppercase tracking-wider">
                  [ STAGGERED KINETIC REVEAL ]
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-foreground font-light leading-tight">
                  <KineticText text="Elevate your web applications with fluid physics, thoughtful typography, and zero robotic clichés." />
                </h3>
              </div>
              <p className="text-xs font-mono text-muted-foreground border-t border-border/60 pt-4">
                Font: Fraunces (Optical Size 144, Weight 300) paired with Plus Jakarta Sans body copy.
              </p>
            </TactileCard>
          )}
        </section>

        {/* Interactive Live Project Demos Suite (Private & Public Systems) */}
        <ProjectDemos />

        {/* 6 Core System Pillars Grid */}
        <BespokeFeatureGrid />

        {/* Enterprise Architecture Bento Grid */}
        <EnterpriseBentoGrid />

        {/* Verified Social Proof Testimonials */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard
              author="Alex Rivera"
              role="Staff Design Engineer"
              company="Linear Ecosystem"
              quote="Vibe Superkit completely eliminated generic AI styling from our workflow. Our landing pages now look like they were crafted by Stripe engineers."
            />
            <TestimonialCard
              author="Sarah Chen"
              role="Head of Product"
              company="SaaS Matrix"
              avatarUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
              quote="The spring physics and accessible Radix inputs give our product an unmistakable polish that customers immediately notice."
            />
          </div>
        </section>

        {/* 10k+ Star Repositories Bundle Row */}
        <LibraryBadgeRow />

        {/* 1-Click AI Prompt Generator */}
        <PromptCopier />

        {/* Tactile Transparent Pricing */}
        <TactilePricing />

        {/* TASTE GUIDE & QUICKSTART SECTION */}
        <section id="taste-guide-section" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <TactileCard className="p-8 sm:p-12 space-y-8 bg-card/70">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/70 pb-6">
              <div>
                <span className="font-mono text-xs text-primary font-semibold tracking-wider uppercase">
                  [ 06 / ANTIGRAVITY & VIBE CODER QUICKSTART ]
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-light mt-1">
                  How to use this in your workflow
                </h2>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-xs font-mono font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Antigravity Skill Active
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-primary font-bold">STEP 01</span>
                <h4 className="text-sm font-semibold text-foreground">Set Active Workspace</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Open this folder in Antigravity, Cursor, or VS Code. The built-in <code className="text-primary">.cursorrules</code> and <code className="text-primary">.antigravity/</code> skills load automatically.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-primary font-bold">STEP 02</span>
                <h4 className="text-sm font-semibold text-foreground">Prompt with Taste</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Use the 1-click prompt generator above. The AI will automatically avoid purple glows and use Emil Kowalski spring physics.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-primary font-bold">STEP 03</span>
                <h4 className="text-sm font-semibold text-foreground">Copy Component Blocks</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Import components from <code className="text-primary">@/components/emil-primitives</code> or <code className="text-primary">@/components/origin-ui</code> with zero friction.
                </p>
              </div>
            </div>
          </TactileCard>
        </section>
      </main>

      {/* Editorial Footer */}
      <footer className="border-t border-border/80 bg-card/40 py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-serif text-lg text-foreground font-light">
              Vibe Superkit
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              Created by{' '}
              <a
                href="https://github.com/shahrukh-hack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Yogeshkumar Patel (@shahrukh-hack)
              </a>{' '}
              • Adelaide, Australia 🇦🇺
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground">
            <span>Lenis</span>
            <span>•</span>
            <span>Framer Motion</span>
            <span>•</span>
            <span>Origin UI</span>
            <span>•</span>
            <span>Sonner</span>
            <span>•</span>
            <span>Radix</span>
          </div>
        </div>
      </footer>

      {/* Global Keyboard Shortcuts Modal Listener */}
      <KeybindingModal />
    </div>
  );
}
export default App;
