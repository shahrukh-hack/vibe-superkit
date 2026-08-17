import React from 'react';
import { Star, ExternalLink, CheckCircle } from 'lucide-react';
import { TactileCard } from '../emil-primitives/TactileCard';

interface BundledTool {
  name: string;
  creatorOrOrg: string;
  stars: string;
  role: string;
  link: string;
}

export const LibraryBadgeRow: React.FC = () => {
  const tools: BundledTool[] = [
    {
      name: 'Shadcn UI',
      creatorOrOrg: 'shadcn',
      stars: '80k+ ⭐',
      role: 'Accessible, unstyled component primitives',
      link: 'https://github.com/shadcn-ui/ui',
    },
    {
      name: 'Framer Motion',
      creatorOrOrg: 'motiondivision',
      stars: '27k+ ⭐',
      role: 'Declarative spring physics & layout morphing',
      link: 'https://github.com/motiondivision/motion',
    },
    {
      name: 'Emil Kowalski Primitives',
      creatorOrOrg: 'emilkowalski',
      stars: '10k+ ⭐',
      role: 'Sonner toasts, Vaul drawers, and tactile physics',
      link: 'https://emilkowal.ski/',
    },
    {
      name: 'Origin UI',
      creatorOrOrg: 'originui',
      stars: '5k+ ⭐',
      role: 'Modern inputs, search commands & form controls',
      link: 'https://originui.com/',
    },
    {
      name: 'Magic UI / Aceternity',
      creatorOrOrg: 'magicuidesign',
      stars: '22k+ ⭐',
      role: 'Interactive animated components & light beams',
      link: 'https://magicui.design/',
    },
    {
      name: 'Lenis Smooth Scroll',
      creatorOrOrg: 'darkroomengineering',
      stars: '13k+ ⭐',
      role: 'Butter-smooth inertia scrolling engine',
      link: 'https://github.com/darkroomengineering/lenis',
    },
    {
      name: 'Lucide Icons',
      creatorOrOrg: 'lucide-icons',
      stars: '17k+ ⭐',
      role: 'Minimal, crisp SVG icons across all components',
      link: 'https://lucide.dev/',
    },
    {
      name: 'UI UX Pro Max',
      creatorOrOrg: 'nextlevelbuilder',
      stars: '5k+ ⭐',
      role: 'AI design intelligence database & MCP design consultant',
      link: 'https://github.com/nextlevelbuilder/ui-ux-pro-max-skill',
    },
    {
      name: '21st.dev & MCP Sync',
      creatorOrOrg: '21st-dev',
      stars: '5k+ ⭐',
      role: 'Design engineering component registry for AI agents',
      link: 'https://21st.dev/',
    },
    {
      name: 'Awesome Cursorrules',
      creatorOrOrg: 'PatrickJS',
      stars: '25k+ ⭐',
      role: 'Calibrated AI system prompts & taste guards',
      link: 'https://github.com/PatrickJS/awesome-cursorrules',
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
        <div>
          <span className="font-mono text-xs text-primary font-semibold tracking-wider uppercase">
            [ 05 / 10K+ STAR POWER TOOLKIT BUNDLE ]
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-light mt-1 tracking-tight">
            Integrated in one master repository.
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <CheckCircle className="w-4 h-4 text-emerald-500" />
          <span>Zero manual installation needed</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, idx) => (
          <a
            key={idx}
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <TactileCard
              interactive
              className="p-4 h-full flex flex-col justify-between space-y-2 bg-card/60 hover:border-primary/40"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                    {tool.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-[11px] font-mono text-muted-foreground">
                    by {tool.creatorOrOrg}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-muted/80 px-2 py-0.5 font-mono text-[11px] text-foreground font-medium">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  {tool.stars}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {tool.role}
              </p>
            </TactileCard>
          </a>
        ))}
      </div>
    </section>
  );
};
