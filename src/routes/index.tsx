import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Brain,
  MessageSquareQuote,
  Target,
  TrendingUp,
  Wand2,
  AlertCircle,
  Cable,
  Layers,
  Twitter,
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import problemSplit from "@/assets/problem-split.jpg";
import productPreview from "@/assets/product-preview.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full glass px-5 py-2.5">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-primary to-accent">
            <Sparkles className="h-4 w-4 text-background" />
          </div>
          <span className="font-display text-base font-semibold tracking-tight">Custra</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#product" className="hover:text-foreground transition-colors">Product</a>
          <a href="#philosophy" className="hover:text-foreground transition-colors">Philosophy</a>
        </nav>
        <a href="#cta" className="btn-glow rounded-full px-4 py-1.5 text-xs font-semibold">
          Get Early Access
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 noise opacity-40 pointer-events-none mix-blend-overlay" />
      <div className="absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px] pointer-events-none" />
      <div className="absolute right-0 top-1/3 h-[300px] w-[400px] rounded-full bg-accent/15 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2">
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Creative intelligence platform — now in early access
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            <span className="text-gradient">Your customers</span>
            <br />
            already know your<br />best ads.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Custra analyzes reviews, comments, support conversations, and ad performance data to uncover the emotional patterns, objections, desires, and messaging angles driving conversions.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#cta" className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
              Get Early Access <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#how" className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card">
              See How It Works
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div>No credit card</div>
            <div className="h-3 w-px bg-border" />
            <div>SOC2-ready infrastructure</div>
            <div className="h-3 w-px bg-border" />
            <div>Built for DTC teams</div>
          </div>
        </div>

        <div className="relative reveal">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary/30 via-transparent to-accent/30 blur-3xl" />
          <div className="relative rounded-2xl glass glow-ring overflow-hidden animate-float-slow">
            <img
              src={heroDashboard}
              alt="Custra creative intelligence dashboard"
              width={1536}
              height={1152}
              className="w-full h-auto"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>

          {/* Floating cards */}
          <div className="absolute -left-6 top-10 hidden md:block animate-float">
            <div className="glass rounded-xl px-4 py-3 text-xs shadow-2xl">
              <div className="text-muted-foreground">Top angle</div>
              <div className="mt-1 font-medium">"Finally something that doesn't itch."</div>
              <div className="mt-1 text-primary">+38% CTR</div>
            </div>
          </div>
          <div className="absolute -right-4 bottom-12 hidden md:block animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="glass rounded-xl px-4 py-3 text-xs shadow-2xl">
              <div className="text-muted-foreground">Objection cluster</div>
              <div className="mt-1 font-medium">"Worried about subscription lock-in"</div>
              <div className="mt-1 text-accent">142 mentions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { v: "3×", l: "Faster Creative Ideation" },
    { v: "10K+", l: "Reviews Analyzed Per Run" },
    { v: "Weekly", l: "New Winning Angles Surfaced" },
    { v: "100%", l: "Hidden Customer Language" },
  ];
  return (
    <section className="relative border-y border-border/40 py-16">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Built For Teams Obsessed With Creative Performance
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="glass rounded-xl p-5">
              <div className="font-display text-3xl font-semibold text-gradient">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <AlertCircle className="h-3.5 w-3.5" /> The Problem
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
            Most brands <span className="text-gradient">guess</span> their messaging.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="relative rounded-2xl overflow-hidden glass">
            <img
              src={problemSplit}
              alt="Chaos vs Custra intelligence"
              width={1536}
              height={896}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <ul className="space-y-5">
            {[
              "Teams rely on intuition instead of customer signals.",
              "Performance budgets get burned testing weak hooks.",
              "Customer insights stay buried in reviews, comments, and tickets.",
              "Marketers struggle to scale winning creatives past one or two breakthroughs.",
              "Ad fatigue compounds because messaging lacks emotional depth.",
            ].map((t) => (
              <li key={t} className="flex gap-4">
                <span className="mt-2 h-px w-8 shrink-0 bg-gradient-to-r from-primary to-transparent" />
                <p className="text-base text-foreground/80 md:text-lg">{t}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: Cable,
      step: "01",
      title: "Connect Customer Data",
      body: "Pipe in reviews, Reddit, TikTok comments, surveys, ad comments, and support tickets. One unified signal layer.",
    },
    {
      icon: Brain,
      step: "02",
      title: "AI Detects Patterns & Signals",
      body: "Custra surfaces objections, emotional triggers, buying motivations, repeat phrases, and sentiment patterns that move metrics.",
    },
    {
      icon: Wand2,
      step: "03",
      title: "Generate Winning Angles",
      body: "Get hooks, UGC ideas, ad scripts, positioning, messaging frameworks, and creative briefs — built from real customer language.",
    },
  ];
  return (
    <section id="how" className="relative py-28">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">How Custra Works</div>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            From scattered conversations<br />to <span className="text-gradient">strategic creative.</span>
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px md:block">
            <div className="relative h-full w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-primary to-transparent animate-beam" />
            </div>
          </div>
          {steps.map((s) => (
            <div key={s.step} className="glass relative rounded-2xl p-7 transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 ring-1 ring-primary/30">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-display text-xs text-muted-foreground">{s.step}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Wand2, title: "Creative Angle Engine", body: "Generate ad angles built from real customer psychology — not guesswork.", span: "md:col-span-2" },
    { icon: MessageSquareQuote, title: "Customer Voice Mining", body: "Extract the exact phrases customers naturally use to describe your product.", span: "" },
    { icon: Layers, title: "Ad Intelligence Dashboard", body: "Track messaging trends, ad fatigue, and creative performance in one place.", span: "" },
    { icon: AlertCircle, title: "Objection Detection", body: "Find the hidden reasons customers hesitate — before they cost you spend.", span: "md:col-span-2" },
    { icon: Target, title: "UGC Insight Generator", body: "Turn raw customer language into creator-ready hooks and briefs.", span: "" },
    { icon: TrendingUp, title: "Trend Signal Analysis", body: "Detect emerging customer desires before competitors do.", span: "md:col-span-2" },
  ];
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Features</div>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              An <span className="text-gradient">intelligence layer</span> for every creative decision.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Six core systems working together to translate customer conversations into measurable creative output.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className={`glass group relative overflow-hidden rounded-2xl p-7 transition-all hover:glow-ring ${i.span}`}>
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-card ring-1 ring-border">
                <i.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPreview() {
  return (
    <section id="product" className="relative py-28">
      <div className="absolute inset-x-0 top-1/2 h-[400px] -translate-y-1/2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Product</div>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            Inside the <span className="text-gradient">creative war room.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Customer quotes, AI-generated hooks, ad angle recommendations, conversion signals, and insight clusters — in one cinematic interface.
          </p>
        </div>

        <div className="relative mt-14 reveal">
          <div className="absolute -inset-10 rounded-[2rem] bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 blur-3xl" />
          <div className="relative rounded-2xl glass glow-ring overflow-hidden">
            <img
              src={productPreview}
              alt="Custra product preview"
              width={1600}
              height={1024}
              loading="lazy"
              className="w-full h-auto"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="philosophy" className="relative py-28">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <div className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Philosophy</div>
        <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
          Great advertising starts with <span className="text-gradient">listening.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-base text-muted-foreground md:text-lg">
          The best-performing ads rarely come from random brainstorming. They come from understanding how customers think, speak, complain, desire, and decide. Custra turns scattered customer conversations into strategic creative intelligence.
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 noise opacity-30 mix-blend-overlay pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-[160px] pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <h2 className="font-display text-4xl font-semibold leading-[1.1] md:text-6xl">
          Your next winning ad angle is already hidden in <span className="text-gradient">customer conversations.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground md:text-lg">
          Stop guessing messaging. Start building ads around real customer signals.
        </p>
        <div className="mt-10 flex justify-center">
          <a href="#" className="btn-glow inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold">
            Join Early Access <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-primary to-accent">
              <Sparkles className="h-4 w-4 text-background" />
            </div>
            <span className="font-display text-base font-semibold">Custra</span>
          </div>
          <p className="mt-3 max-w-xs text-xs text-muted-foreground">
            Creative intelligence for modern DTC brands and performance marketers.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-foreground">
          <a href="#product" className="hover:text-foreground">Product</a>
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#philosophy" className="hover:text-foreground">About</a>
          <a href="#cta" className="hover:text-foreground">Contact</a>
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" aria-label="Twitter" className="hover:text-foreground inline-flex items-center gap-1">
            <Twitter className="h-4 w-4" />
          </a>
        </nav>
      </div>
      <div className="mx-auto mt-8 max-w-6xl px-5 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Custra. All rights reserved.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <TrustBar />
      <Problem />
      <HowItWorks />
      <Features />
      <ProductPreview />
      <Philosophy />
      <FinalCTA />
      <Footer />
    </main>
  );
}
