"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  chapterCountryCodes,
  countries,
  type CountryPhone,
} from "@/content/countries";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

type Country = CountryPhone;

const byCode = new Map(countries.map((country) => [country.iso, country]));
const chapterCountries = chapterCountryCodes
  .map((code) => byCode.get(code))
  .filter((country): country is Country => Boolean(country));
const otherCountries = countries.filter(
  (country) =>
    !(chapterCountryCodes as readonly string[]).includes(country.iso),
);

/** Adds dashes in the country's pattern while typing. */
function formatPhone(value: string, country: Country) {
  const max = country.groups.reduce((sum, size) => sum + size, 0);
  const digits = value.replace(/\D/g, "").slice(0, max || 15);
  if (country.groups.length === 0) return digits;
  const parts: string[] = [];
  let index = 0;
  for (const size of country.groups) {
    if (index >= digits.length) break;
    parts.push(digits.slice(index, index + size));
    index += size;
  }
  return parts.join("-");
}

function phoneExample(country: Country) {
  return country.groups.map((size) => "X".repeat(size)).join("-");
}

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
  const [countryCode, setCountryCode] = useState<string>("US");
  const [phone, setPhone] = useState("");
  const country = byCode.get(countryCode) ?? chapterCountries[0];

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
          country: country.name,
          phone: phone ? `${country.dial} ${phone}`.trim() : "",
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
      setPhone("");
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
        <Field label="City and state/region" required>
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
        <Field label="Country" required>
          <select
            name="country"
            required
            value={countryCode}
            onChange={(event) => {
              setCountryCode(event.target.value);
              setPhone("");
            }}
            className={inputClass}
          >
            <optgroup label="Where we have chapters">
              {chapterCountries.map((option) => (
                <option key={option.iso} value={option.iso}>
                  {option.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="All countries">
              {otherCountries.map((option) => (
                <option key={option.iso} value={option.iso}>
                  {option.name}
                </option>
              ))}
            </optgroup>
          </select>
        </Field>
        <Field label="Phone">
          <div className="mt-2 flex items-stretch gap-2">
            <span className="flex items-center rounded-xl border border-input bg-muted px-3 text-base text-muted-foreground">
              {country.dial}
            </span>
            <input
              type="tel"
              autoComplete="tel-national"
              inputMode="tel"
              value={phone}
              onChange={(event) =>
                setPhone(formatPhone(event.target.value, country))
              }
              aria-describedby="phone-format"
              className={inputClass.replace("mt-2 ", "")}
            />
          </div>
          {country.groups.length > 0 ? (
            <span
              id="phone-format"
              className="mt-1.5 block text-xs font-normal text-muted-foreground"
            >
              Format: {phoneExample(country)}
            </span>
          ) : null}
        </Field>
        <Field label="How many STEMKits? (1 kit per child)" required>
          <input
            name="kits"
            type="number"
            min={1}
            max={10000}
            required
            inputMode="numeric"
            className={inputClass}
          />
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
