"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "mt-2 block w-full rounded-xl border border-input bg-card px-4 py-3 text-base text-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none";

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label
      className={`block text-sm font-semibold text-foreground ${className ?? ""}`}
    >
      {label}
      {required ? (
        <span className="text-primary" aria-hidden="true">
          {" "}
          *
        </span>
      ) : null}
      {children}
    </label>
  );
}

/**
 * Sends kit requests to the STEMSeeds inbox through FormSubmit.
 * The first request triggers a one-time activation email to that inbox.
 */
export function KitRequestForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `STEMKit request from ${data.organization}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || String(result.success) !== "true") {
        throw new Error("Request failed");
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-3xl border border-border bg-card px-6 py-12 text-center shadow-[0_16px_40px_rgba(8,62,72,0.08)]"
      >
        <CheckCircle2 className="size-12 text-fresh" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl text-foreground">
          Request received!
        </h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-foreground/75">
          Thank you. Our team will review your request and reply by email to
          plan your delivery.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-7"
          onClick={() => setStatus("idle")}
        >
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-3xl border border-border bg-card p-6 text-left shadow-[0_16px_40px_rgba(8,62,72,0.08)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Organization name" required className="sm:col-span-2">
          <input
            name="organization"
            required
            maxLength={200}
            className={inputClass}
          />
        </Field>
        <Field label="Type of organization" required>
          <select
            name="organization_type"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select one
            </option>
            <option>Hospital</option>
            <option>School</option>
            <option>Community organization</option>
            <option>Other</option>
          </select>
        </Field>
        <Field label="City and state (or country)" required>
          <input
            name="location"
            required
            maxLength={200}
            className={inputClass}
          />
        </Field>
        <Field label="Your name" required>
          <input
            name="name"
            required
            autoComplete="name"
            maxLength={120}
            className={inputClass}
          />
        </Field>
        <Field label="Your role">
          <input name="role" maxLength={120} className={inputClass} />
        </Field>
        <Field label="Email" required>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={200}
            className={inputClass}
          />
        </Field>
        <Field label="Phone">
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            className={inputClass}
          />
        </Field>
        <Field label="About how many children?" required>
          <input
            name="children"
            type="number"
            min={1}
            max={10000}
            required
            inputMode="numeric"
            className={inputClass}
          />
        </Field>
        <Field label="Age range">
          <input name="age_range" maxLength={60} className={inputClass} />
        </Field>
        <Field label="Preferred delivery date">
          <input name="preferred_date" type="date" className={inputClass} />
        </Field>
        <Field label="Anything else we should know?" className="sm:col-span-2">
          <textarea
            name="notes"
            rows={4}
            maxLength={2000}
            className={inputClass}
          />
        </Field>
      </div>

      {/* Hidden from people; bots that fill it in are ignored by FormSubmit. */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {status === "error" ? (
        <p
          role="alert"
          className="mt-6 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          We couldn&apos;t send your request. Please try again, or email us at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted-foreground sm:max-w-sm">
          We only use this information to respond to your request and plan a
          delivery. We never sell or share it.
        </p>
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Send Request"
          )}
        </Button>
      </div>
    </form>
  );
}
