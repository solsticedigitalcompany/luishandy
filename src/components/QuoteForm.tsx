import { useState } from "react";
import { z } from "zod";

const SERVICES = [
  "Bathroom Remodeling",
  "Kitchen Remodeling",
  "Basement Remodeling",
  "Painting & Flooring",
  "Tile Work",
  "Carpentry",
  "Plumbing",
  "Electrical",
  "Exterior / Decks & Fences",
  "Something else",
];

const schema = z.object({
  name: z.string().trim().min(2, { message: "Please enter your name" }).max(80),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Please enter a valid phone number" })
    .max(25, { message: "Phone number is too long" }),
  email: z
    .string()
    .trim()
    .max(255)
    .email({ message: "Please enter a valid email" })
    .or(z.literal("")),
  service: z.string().trim().min(2, { message: "Pick a service" }).max(60),
  details: z.string().trim().max(1000, { message: "Keep it under 1000 characters" }),
});

export function QuoteForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      service: String(fd.get("service") ?? ""),
      details: String(fd.get("details") ?? ""),
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
  }

  const field =
    "w-full rounded-md border border-border bg-background px-3.5 py-3 text-[15px] text-foreground outline-none transition placeholder:text-muted-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/25";
  const label = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground";

  if (sent) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 shadow-lift">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary">
          <span className="font-display text-2xl text-primary-foreground">✓</span>
        </div>
        <h3 className="mt-5 text-center text-2xl">Request received</h3>
        <p className="mt-2 text-center text-[15px] text-muted-foreground">
          Luis or a team member will call you back — usually within a few hours during business
          days. Need it sooner? Call{" "}
          <a className="font-semibold text-secondary" href="tel:+16306744707">
            (630) 674-4707
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lift">
      <div className="bg-primary px-6 py-4 text-primary-foreground sm:px-7">
        <p className="eyebrow">Free · No obligation</p>
        <h2 className="mt-1 text-2xl leading-tight sm:text-[26px]">Get Your Free Estimate</h2>
        <p className="mt-1 text-sm font-medium opacity-80">
          Takes 30 seconds. Same-week visits available.
        </p>
      </div>

      <form noValidate onSubmit={onSubmit} className="space-y-4 px-6 py-6 sm:px-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="name">
              Name
            </label>
            <input id="name" name="name" maxLength={80} className={field} placeholder="Jane Doe" />
            {errors['name'] && <p className="mt-1 text-xs text-destructive">{errors['name']}</p>}
          </div>
          <div>
            <label className={label} htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              maxLength={25}
              className={field}
              placeholder="(630) 000-0000"
            />
            {errors['phone'] && <p className="mt-1 text-xs text-destructive">{errors['phone']}</p>}
          </div>
        </div>

        <div>
          <label className={label} htmlFor="email">
            Email <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={255}
            className={field}
            placeholder="you@email.com"
          />
          {errors['email'] && <p className="mt-1 text-xs text-destructive">{errors['email']}</p>}
        </div>

        <div>
          <label className={label} htmlFor="service">
            What do you need done?
          </label>
          <select id="service" name="service" defaultValue="" className={field}>
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors['service'] && <p className="mt-1 text-xs text-destructive">{errors['service']}</p>}
        </div>

        <div>
          <label className={label} htmlFor="details">
            Project details <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <textarea
            id="details"
            name="details"
            rows={3}
            maxLength={1000}
            className={field}
            placeholder="Full bathroom gut, about 40 sq ft, hoping to start next month…"
          />
          {errors['details'] && <p className="mt-1 text-xs text-destructive">{errors['details']}</p>}
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-secondary px-6 py-4 font-display text-base font-extrabold uppercase tracking-wide text-secondary-foreground shadow-card transition hover:brightness-110 active:translate-y-px"
        >
          Get My Free Estimate →
        </button>

        <p className="text-center text-xs text-muted-foreground">
          No spam, no pressure. Prefer to talk?{" "}
          <a className="font-semibold text-secondary underline" href="tel:+16306744707">
            Call or text (630) 674-4707
          </a>
        </p>
      </form>
    </div>
  );
}
