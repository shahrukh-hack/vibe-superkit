import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TactileCard } from '../emil-primitives/TactileCard';
import { SpringButton } from '../emil-primitives/SpringButton';
import { SegmentedControl } from '../origin-ui/SegmentedControl';
import { SPRING_PRESETS } from '@/lib/motion-presets';
import { toast } from 'sonner';
import {
  TrendingUp,
  RefreshCw,
  Wind,
  Navigation,
  ShieldAlert,
  Sliders,
  DollarSign,
  Activity,
  CheckCircle2,
  ExternalLink,
  Lock,
  Eye,
} from 'lucide-react';

export const ProjectDemos: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<
    'pricing-sync' | 'sa-drive' | 'wind-flow' | 'lakshmi' | 'ai-detector'
  >('pricing-sync');

  // Demo 1 State: Pricing Sync
  const [syncing, setSyncing] = useState(false);
  const [competitorPrice, setCompetitorPrice] = useState(189.5);
  const myobPrice = 199.0;
  const suggestedPrice = (competitorPrice * 0.98).toFixed(2);

  const handleSyncMYOB = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      toast.success('MYOB ERP Synchronized: SKU #AU-9921 updated to $' + suggestedPrice);
    }, 1200);
  };

  // Demo 2 State: SA Drive Smart Hub
  const [selectedRoute, setSelectedRoute] = useState<'adelaide-cbd' | 'barossa' | 'fleurieu'>(
    'adelaide-cbd'
  );

  // Demo 3 State: Wind Flow
  const [windSpeed, setWindSpeed] = useState(14.5);

  // Demo 4 State: Lakshmi AI
  const [selectedTicker, setSelectedTicker] = useState<'NVDA' | 'AAPL' | 'BHP.AX' | 'TSLA'>('NVDA');

  // Demo 5 State: AI Detector
  const [sampleText, setSampleText] = useState(
    'The integration of autonomous multi-agent architectures enables systematic optimization of enterprise workflows through continuous linguistic pattern matching and state evaluations.'
  );
  const [analyzing, setAnalyzing] = useState(false);
  const [aiScore, setAiScore] = useState<number | null>(94.8);

  const handleAnalyzeText = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      const isShort = sampleText.split(' ').length < 10;
      const score = isShort ? 32.4 : 94.8;
      setAiScore(score);
      toast.info(`Analysis Complete: ${score}% synthetic probability detected.`);
    }, 800);
  };

  const demoOptions = [
    { value: 'pricing-sync' as const, label: 'MYOB Price Sync', icon: <DollarSign className="w-3.5 h-3.5" /> },
    { value: 'sa-drive' as const, label: 'SA Smart Hub', icon: <Navigation className="w-3.5 h-3.5" /> },
    { value: 'wind-flow' as const, label: 'Wind Flow Insights', icon: <Wind className="w-3.5 h-3.5" /> },
    { value: 'lakshmi' as const, label: 'Lakshmi AI', icon: <TrendingUp className="w-3.5 h-3.5" /> },
    { value: 'ai-detector' as const, label: 'AI Detector', icon: <ShieldAlert className="w-3.5 h-3.5" /> },
  ];

  return (
    <section id="interactive-demos" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="font-mono text-xs text-primary font-semibold tracking-wider uppercase">
            [ LIVE ENGINEERING SHOWCASE ]
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-light mt-1 tracking-tight">
            Interactive Enterprise & AI Demos
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
          Live simulated sandboxes for private enterprise systems and public applications crafted by Yogeshkumar Patel.
        </p>
      </div>

      {/* Segmented Selector */}
      <div className="mb-6 overflow-x-auto pb-2">
        <SegmentedControl options={demoOptions} value={activeDemo} onChange={setActiveDemo} />
      </div>

      {/* DEMO 1: MYOB ERP & Competitor Price Sync */}
      {activeDemo === 'pricing-sync' && (
        <TactileCard className="space-y-6 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/70 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 text-[10px] font-mono font-semibold">
                  <Lock className="w-3 h-3" /> PRIVATE ENTERPRISE SYSTEM
                </span>
                <span className="text-xs font-mono text-muted-foreground">myob_price_sync & competitor_tracker</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mt-1">
                Automated Competitor Pricing & MYOB ERP Sync Pipeline
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Pipeline Active
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Competitor Scraper Box */}
            <div className="rounded-xl border border-border/80 bg-background/60 p-4 space-y-3">
              <span className="text-[11px] font-mono uppercase text-muted-foreground">1. Competitor Scraper</span>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-foreground">SKU: Industrial Router Cat-6</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Detected Price:</span>
                  <span className="font-mono font-bold text-red-500">${competitorPrice.toFixed(2)}</span>
                </div>
              </div>
              <div className="pt-1">
                <label className="text-[10px] font-mono text-muted-foreground">Simulate Market Price Drop:</label>
                <input
                  type="range"
                  min="150"
                  max="220"
                  step="0.5"
                  value={competitorPrice}
                  onChange={(e) => setCompetitorPrice(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary mt-1"
                />
              </div>
            </div>

            {/* Delta Analyzer */}
            <div className="rounded-xl border border-border/80 bg-background/60 p-4 space-y-3">
              <span className="text-[11px] font-mono uppercase text-muted-foreground">2. Delta Margin Engine</span>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current MYOB Price:</span>
                  <span className="font-mono">${myobPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Competitor Delta:</span>
                  <span className="font-mono font-bold text-amber-500">
                    {(((competitorPrice - myobPrice) / myobPrice) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between font-semibold border-t border-border/60 pt-1 text-primary">
                  <span>Target Smart Price:</span>
                  <span className="font-mono">${suggestedPrice}</span>
                </div>
              </div>
            </div>

            {/* MYOB ERP Sync Trigger */}
            <div className="rounded-xl border border-primary/40 bg-primary/5 p-4 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[11px] font-mono uppercase text-primary font-semibold">3. MYOB Cloud Sync</span>
                <p className="text-xs text-muted-foreground mt-1">
                  Pushes adjusted prices to inventory database via REST API.
                </p>
              </div>
              <SpringButton variant="primary" size="sm" onClick={handleSyncMYOB} disabled={syncing}>
                <RefreshCw className={`w-3.5 h-3.5 ${syncing ? 'animate-spin' : ''}`} />
                <span>{syncing ? 'Syncing with MYOB...' : 'Push Sync to MYOB'}</span>
              </SpringButton>
            </div>
          </div>
        </TactileCard>
      )}

      {/* DEMO 2: SA Drive Smart Hub */}
      {activeDemo === 'sa-drive' && (
        <TactileCard className="space-y-6 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/70 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 text-[10px] font-mono font-semibold">
                  <Lock className="w-3 h-3" /> PRIVATE COMMERCIAL SYSTEM
                </span>
                <span className="text-xs font-mono text-muted-foreground">sa-drive-smart-hub (Adelaide, SA)</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mt-1">
                South Australia Regional Fleet Telemetry & Driver Smart Hub
              </h3>
            </div>
            <span className="text-xs font-mono text-primary font-semibold">Adelaide Fleet Hub</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Route Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-muted-foreground uppercase">Select Active SA Corridor:</label>
              <div className="space-y-1.5">
                {[
                  { id: 'adelaide-cbd', label: 'Adelaide CBD ➔ Port Adelaide', drivers: 8, status: 'On Schedule' },
                  { id: 'barossa', label: 'Barossa Valley ➔ Gawler Logistics', drivers: 4, status: 'Clear Corridor' },
                  { id: 'fleurieu', label: 'Fleurieu Coast ➔ Southern Hub', drivers: 3, status: 'Optimal' },
                ].map((route) => (
                  <button
                    key={route.id}
                    onClick={() => setSelectedRoute(route.id as any)}
                    className={`w-full text-left p-3 rounded-lg border text-xs transition-all ${
                      selectedRoute === route.id
                        ? 'border-primary bg-primary/10 text-foreground font-semibold'
                        : 'border-border/80 bg-background/50 text-muted-foreground hover:bg-muted/40'
                    }`}
                  >
                    <p className="text-foreground font-medium">{route.label}</p>
                    <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                      <span>{route.drivers} active units</span>
                      <span className="text-emerald-500 font-mono">{route.status}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Telemetry Display */}
            <div className="md:col-span-2 rounded-xl border border-border/80 bg-background/80 p-5 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-border/60 pb-2">
                <span className="text-muted-foreground">// Telemetry Live Feed: {selectedRoute.toUpperCase()}</span>
                <span className="text-emerald-500 flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 animate-pulse" /> Ping: 18ms
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-lg bg-card border border-border/60">
                  <span className="text-[10px] uppercase text-muted-foreground">Active Units</span>
                  <p className="text-xl font-bold text-foreground mt-1">15</p>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border/60">
                  <span className="text-[10px] uppercase text-muted-foreground">Compliance</span>
                  <p className="text-xl font-bold text-emerald-500 mt-1">99.4%</p>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border/60">
                  <span className="text-[10px] uppercase text-muted-foreground">Dispatch Status</span>
                  <p className="text-xl font-bold text-primary mt-1">Ready</p>
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Automated driver geofencing, duty-cycle scheduling, and incident telemetry engineered for South Australian transport compliance.
              </p>
            </div>
          </div>
        </TactileCard>
      )}

      {/* DEMO 3: Wind Flow Insights */}
      {activeDemo === 'wind-flow' && (
        <TactileCard className="space-y-6 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/70 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 text-[10px] font-mono font-semibold">
                  <Lock className="w-3 h-3" /> PRIVATE ANALYTICS PLATFORM
                </span>
                <span className="text-xs font-mono text-muted-foreground">wind-flow-insights</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mt-1">
                Meteorological Airflow & Wind Turbine Energy Yield Modeling
              </h3>
            </div>
            <span className="font-mono text-xs text-primary font-semibold">Adelaide Hills Meteorological Grid</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-muted-foreground">Wind Velocity (m/s):</span>
                  <span className="font-bold text-foreground">{windSpeed} m/s</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="25"
                  step="0.5"
                  value={windSpeed}
                  onChange={(e) => setWindSpeed(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="rounded-lg bg-background/60 p-3 border border-border/60 space-y-1 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Turbine Efficiency:</span>
                  <span className="text-emerald-500 font-bold">
                    {Math.min(98.2, Number((windSpeed * 4.8).toFixed(1)))}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Est. Power Output:</span>
                  <span className="text-primary font-bold">
                    {(Math.pow(windSpeed, 3) * 0.0012).toFixed(2)} MW
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Vector Animation Box */}
            <div className="md:col-span-2 rounded-xl border border-border/80 bg-background/90 p-6 flex flex-col items-center justify-center space-y-3 relative overflow-hidden h-44">
              <div className="flex items-center gap-4 w-full justify-around">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: [0, 40, 0],
                      opacity: [0.3, 0.9, 0.3],
                    }}
                    transition={{
                      duration: Math.max(0.6, 20 / windSpeed),
                      repeat: Infinity,
                      ease: 'linear',
                      delay: i * 0.15,
                    }}
                    className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                    style={{ width: `${30 + i * 15}px` }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <Wind className="w-4 h-4 text-primary animate-pulse" />
                <span>Vector Field Flow Simulation ({windSpeed} m/s laminar flow)</span>
              </div>
            </div>
          </div>
        </TactileCard>
      )}

      {/* DEMO 4: Lakshmi AI */}
      {activeDemo === 'lakshmi' && (
        <TactileCard className="space-y-6 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/70 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 text-[10px] font-mono font-semibold">
                  PUBLIC OPEN-SOURCE
                </span>
                <span className="text-xs font-mono text-muted-foreground">shahrukh-hack/lakhsmiAI</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mt-1">
                Lakshmi AI — Financial Market Intelligence & Stock Trend Forecasting
              </h3>
            </div>
            <a
              href="https://github.com/shahrukh-hack/lakhsmiAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1"
            >
              View Repository <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Ticker Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-muted-foreground uppercase">Equities & Indices:</label>
              {(['NVDA', 'AAPL', 'BHP.AX', 'TSLA'] as const).map((ticker) => (
                <button
                  key={ticker}
                  onClick={() => setSelectedTicker(ticker)}
                  className={`w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-all ${
                    selectedTicker === ticker
                      ? 'border-primary bg-primary/10 text-foreground font-bold'
                      : 'border-border/80 bg-background/50 text-muted-foreground hover:bg-muted/40'
                  }`}
                >
                  ${ticker}
                </button>
              ))}
            </div>

            {/* Price & Forecast Prediction Card */}
            <div className="md:col-span-3 rounded-xl border border-border/80 bg-background/80 p-5 space-y-4 font-mono text-xs">
              <div className="flex justify-between items-center border-b border-border/60 pb-3">
                <div>
                  <h4 className="text-sm font-bold text-foreground">${selectedTicker} Market Forecast</h4>
                  <span className="text-xs text-muted-foreground">ApexCharts + ML Signal Engine</span>
                </div>
                <span className="rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 text-xs font-bold">
                  STRONG BUY (91.4% Confidence)
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded bg-card border border-border/60">
                  <span className="text-[10px] text-muted-foreground uppercase">Current Spot</span>
                  <p className="text-base font-bold text-foreground mt-1">
                    {selectedTicker === 'NVDA' ? '$138.25' : selectedTicker === 'AAPL' ? '$231.10' : selectedTicker === 'BHP.AX' ? '$42.80 AUD' : '$214.50'}
                  </p>
                </div>
                <div className="p-3 rounded bg-card border border-border/60">
                  <span className="text-[10px] text-muted-foreground uppercase">AI 30-Day Target</span>
                  <p className="text-base font-bold text-primary mt-1">
                    {selectedTicker === 'NVDA' ? '$158.00 (+14.2%)' : selectedTicker === 'AAPL' ? '$248.50 (+7.5%)' : selectedTicker === 'BHP.AX' ? '$46.20 AUD' : '$240.00'}
                  </p>
                </div>
                <div className="p-3 rounded bg-card border border-border/60">
                  <span className="text-[10px] text-muted-foreground uppercase">Volatility Index</span>
                  <p className="text-base font-bold text-foreground mt-1">Low (1.14β)</p>
                </div>
              </div>
            </div>
          </div>
        </TactileCard>
      )}

      {/* DEMO 5: AI Content Detector */}
      {activeDemo === 'ai-detector' && (
        <TactileCard className="space-y-6 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/70 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 text-[10px] font-mono font-semibold">
                  PUBLIC OPEN-SOURCE
                </span>
                <span className="text-xs font-mono text-muted-foreground">shahrukh-hack/AI-detection</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mt-1">
                AI Content & Synthetic Text Linguistic Detector
              </h3>
            </div>
            <a
              href="https://github.com/shahrukh-hack/AI-detection"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1"
            >
              View Repository <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 space-y-3">
              <label className="text-xs font-mono text-muted-foreground uppercase">
                Input Text for Linguistic Perplexity Analysis:
              </label>
              <textarea
                value={sampleText}
                onChange={(e) => setSampleText(e.target.value)}
                rows={4}
                className="w-full rounded-lg border border-border/80 bg-background/80 p-3 text-xs text-foreground font-sans placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <SpringButton variant="primary" size="sm" onClick={handleAnalyzeText} disabled={analyzing}>
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>{analyzing ? 'Analyzing Perplexity...' : 'Analyze Synthetic Patterns'}</span>
              </SpringButton>
            </div>

            <div className="md:col-span-5 rounded-xl border border-border/80 bg-background/80 p-4 space-y-3 flex flex-col justify-center text-center">
              <span className="text-[11px] font-mono uppercase text-muted-foreground">
                Synthetic Probability Result
              </span>
              <div className="text-3xl font-bold font-serif text-primary">
                {aiScore !== null ? `${aiScore}% AI` : 'Awaiting Input'}
              </div>
              <p className="text-[11px] font-mono text-muted-foreground">
                Evaluates sentence burstiness, vocabulary predictability, and token distribution patterns.
              </p>
            </div>
          </div>
        </TactileCard>
      )}
    </section>
  );
};
