import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Bathroom & Kitchen Remodeling in Glendale Heights, IL | Luis' Handyman",
      },
      {
        name: "description",
        content:
          "Licensed, family-owned remodeling crew serving DuPage County. Bathrooms, kitchens, basements, tile, paint and more. Free estimate in 30 seconds.",
      },
      {
        property: "og:title",
        content: "Bathroom & Kitchen Remodeling in Glendale Heights, IL",
      },
      {
        property: "og:description",
        content:
          "10+ years, 300+ remodels, 3,500+ handyman jobs. Free same-week estimates from Luis' Handyman Services & Remodeling.",
      },
    ],
  }),
  component: Home,
});

const PHONE = "(630) 674-4707";
const TEL = "tel:+16306744707";

const services = [
  {
    title: "Bathroom Remodeling",
    img: "/images/bathroom.jpg",
    copy: "Our specialty. Tile, fixtures, plumbing and finish work handled by one crew — no juggling subs.",
    featured: true,
  },
  {
    title: "Kitchen Remodeling",
    img: "/images/kitchen.png",
    copy: "Countertops, cabinets, flooring and appliance hookups for a kitchen that actually works.",
  },
  {
    title: "Basement Remodeling",
    img: "/images/basement.jpg",
    copy: "Turn dead square footage into a theater, gym or guest suite — and add real resale value.",
  },
  {
    title: "Painting & Flooring",
    img: "/images/painting.jpg",
    copy: "Clean lines, no drips, floors protected. The fastest way to make a home feel new.",
  },
  {
    title: "Tile Work",
    img: "/images/tile.webp",
    copy: "Showers, backsplashes and floors set level and grouted to last decades.",
  },
  {
    title: "Carpentry",
    img: "/images/carpentry.jpg",
    copy: "Interior and exterior doors, crown and baseboard moulding, wainscoting.",
  },
  {
    title: "Plumbing",
    img: "/images/plumbing.jpg",
    copy: "Leaks, faucets, sinks and toilets — repaired or replaced right the first time.",
  },
  {
    title: "Electrical",
    img: "/images/electrical.webp",
    copy: "Light fixtures, outlets and wiring updates for safer, brighter rooms.",
  },
  {
    title: "Exterior Work",
    img: "/images/exterior.jpg",
    copy: "Decks, fences and exterior painting to protect the outside of your home.",
  },
];

const reasons = [
  ["Family-Owned", "You deal with Luis and his crew — not a call center or a rotating sub."],
  ["One Crew, Start to Finish", "Demo, plumbing, tile, paint. No gaps between trades, no delays."],
  ["Clean Site Daily", "Floors covered, dust contained, debris hauled. Your home stays livable."],
  ["Free, Honest Quotes", "A written number before we start. No surprise change orders."],
  ["Licensed & Insured", "Fully covered work across Glendale Heights and DuPage County."],
  ["Fair Pricing", "Competitive rates without cutting corners on materials or labor."],
];

const reviews = [
  {
    quote:
      "Luis and his team were very professional from start to finish. They did a beautiful job painting bedrooms, the living room, doors and trim. They took their time to make sure everything was perfect — and it was! Also very affordable!",
    name: "Alexa",
  },
  {
    quote:
      "I used Luis' company as a subcontractor and my clients are very pleased with the interior painting and tile flooring. He was always responsive and the whole team was wonderful.",
    name: "Sandra Jackson",
  },
  {
    quote:
      "Luis and his team were very professional and the work quality was amazing! They worked on my upstairs bathroom and I definitely plan on using their services again for my other bathroom.",
    name: "Mary Anne",
  },
];

const faqs = [
  [
    "What areas do you service?",
    "We serve Glendale Heights and the wider DuPage County area. Just outside it? Call us — we'll tell you straight if we can help.",
  ],
  [
    "Do you provide free quotes?",
    "Yes. Every estimate is free and in writing. Call, text, or use the form and we'll set up a visit.",
  ],
  [
    "How soon can you start?",
    "Most estimates happen the same week. Start dates depend on scope, but we'll give you a real timeline up front.",
  ],
  [
    "What payment methods do you accept?",
    "Cash, check and all major credit cards — whatever makes the project easiest for you.",
  ],
];

function Stars({ className = "text-primary" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-2 text-xs font-medium">
          <p className="opacity-80">Serving Glendale Heights &amp; all of DuPage County, IL</p>
          <p className="opacity-80">Licensed &amp; Insured · Free Estimates</p>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary font-display text-lg font-black text-primary-foreground">
              L
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-[15px] font-extrabold leading-tight sm:text-base">
                Luis' Handyman Services
              </span>
              <span className="block text-xs text-muted-foreground">&amp; Remodeling</span>
            </span>
          </a>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={TEL}
              className="hidden rounded-md border border-border px-4 py-2.5 font-display text-sm font-bold sm:inline-block"
            >
              {PHONE}
            </a>
            <a
              href="#quote"
              className="rounded-md bg-secondary px-4 py-2.5 font-display text-sm font-extrabold uppercase tracking-wide text-secondary-foreground transition hover:brightness-110"
            >
              Free Estimate
            </a>
          </div>
        </div>
      </header>

      {/* HERO: copy left, form right */}
      <section id="top" className="relative isolate overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Finished porcelain shower remodel by Luis' Handyman Services"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.05fr_460px] lg:gap-14 lg:py-20">
          {/* Left: high-converting copy */}
          <div className="text-ink-foreground">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-1.5 text-primary-foreground">
              <Stars className="text-secondary" />
              <span className="text-xs font-bold">5.0 from local homeowners</span>
            </div>

            <h1 className="mt-5 text-4xl leading-[1.03] sm:text-5xl lg:text-[3.7rem]">
              The Bathroom You Keep
              <span className="block text-primary">Putting Off</span>
              Can Be Done This Season.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed opacity-90">
              Luis' Handyman Services &amp; Remodeling is the family-owned crew Glendale Heights
              calls for remodels that finish on time, on budget, and cleaner than they started.
              <strong className="font-semibold"> One crew, one point of contact, zero excuses.</strong>
            </p>

            <ul className="mt-6 grid gap-2.5 text-[15px] sm:grid-cols-2">
              {[
                "Free written estimate — no obligation",
                "Same-week visits available",
                "Licensed, insured & fully cleaned up",
                "10+ years in DuPage County",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[11px] font-black text-primary-foreground">
                    ✓
                  </span>
                  <span className="opacity-90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={TEL}
                className="rounded-md bg-primary px-6 py-4 font-display text-base font-extrabold text-primary-foreground shadow-lift transition hover:brightness-105"
              >
                Call {PHONE}
              </a>
              <span className="text-sm opacity-75">or text us — we answer both.</span>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-6">
              {[
                ["10+", "Years experience"],
                ["300+", "Remodels completed"],
                ["3,500+", "Handyman jobs"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-black text-primary sm:text-3xl">{n}</dt>
                  <dd className="mt-0.5 text-xs opacity-75">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: main contact form */}
          <div id="quote" className="scroll-mt-24">
            <QuoteForm />
          </div>
        </div>
      </section>

      <div className="h-2 rule-slash" />

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-secondary">What we do</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">
            Everything inside your home — and most of what's outside it.
          </h2>
          <p className="mt-3 text-muted-foreground">
            One call covers the whole project. No chasing three different contractors.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className={`group overflow-hidden rounded-xl border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-lift ${
                s.featured ? "border-primary ring-2 ring-primary/40" : "border-border"
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {s.featured && (
                  <span className="absolute left-3 top-3 rounded-md bg-primary px-2.5 py-1 font-display text-[11px] font-black uppercase tracking-wider text-primary-foreground">
                    Most requested
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                <a
                  href="#quote"
                  className="mt-4 inline-block font-display text-sm font-bold text-secondary"
                >
                  Get a price →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-ink py-16 text-ink-foreground lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/shower.jpg"
              alt="Porcelain shower remodel with black fixtures"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow text-primary">Why homeowners pick us</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">
              Most remodel horror stories start with the wrong crew.
            </h2>
            <p className="mt-3 max-w-xl opacity-80">
              We built this business on the opposite reputation: show up when we say, finish what we
              start, and leave the house clean.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {reasons.map(([title, copy]) => (
                <div key={title} className="border-l-2 border-primary pl-4">
                  <h3 className="text-base">{title}</h3>
                  <p className="mt-1 text-sm opacity-75">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-secondary">Reviews</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Rated 5 out of 5 by neighbors</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <Stars />
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-foreground">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-4 font-display text-sm font-bold">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-5 pb-16 lg:pb-24">
        <p className="eyebrow text-secondary">Our work</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">Recent projects</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            "/images/bathroom2.jpg",
            "/images/tile.webp",
            "/images/painting.jpg",
            "/images/carpentry.jpg",
          ].map((src) => (
            <img
              key={src}
              src={src}
              alt="Completed remodeling project"
              loading="lazy"
              className="aspect-square w-full rounded-lg object-cover shadow-card"
            />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-muted py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-3xl sm:text-4xl">Questions before you call?</h2>
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
            {faqs.map(([q, a]) => (
              <details key={q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold">
                  {q}
                  <span className="shrink-0 text-secondary transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-3xl sm:text-4xl">Your free estimate is one call away.</h2>
            <p className="mt-2 max-w-xl opacity-80">
              Tell us what you're thinking about — we'll give you an honest number and a real
              timeline. No pressure, ever.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={TEL}
              className="rounded-md bg-ink px-6 py-4 font-display text-base font-extrabold text-ink-foreground transition hover:brightness-125"
            >
              Call {PHONE}
            </a>
            <a
              href="#quote"
              className="rounded-md bg-secondary px-6 py-4 font-display text-base font-extrabold uppercase text-secondary-foreground transition hover:brightness-110"
            >
              Request Estimate
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-ink py-10 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2">
          <div>
            <p className="font-display text-lg font-extrabold">
              Luis' Handyman Services &amp; Remodeling
            </p>
            <p className="mt-1 text-sm opacity-70">
              Glendale Heights, IL · Serving DuPage County · Licensed &amp; Insured
            </p>
          </div>
          <div className="sm:text-right">
            <a href={TEL} className="font-display text-lg font-extrabold text-primary">
              {PHONE}
            </a>
            <p className="mt-1 text-xs opacity-60">
              © {new Date().getFullYear()} Luis' Handyman Services &amp; Remodeling. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-border bg-background p-3 shadow-lift md:hidden">
        <a
          href={TEL}
          className="flex-1 rounded-md bg-primary px-4 py-3 text-center font-display text-sm font-extrabold text-primary-foreground"
        >
          Call Now
        </a>
        <a
          href="#quote"
          className="flex-1 rounded-md bg-secondary px-4 py-3 text-center font-display text-sm font-extrabold uppercase text-secondary-foreground"
        >
          Free Estimate
        </a>
      </div>
      <div className="h-16 md:hidden" />
    </div>
  );
}
