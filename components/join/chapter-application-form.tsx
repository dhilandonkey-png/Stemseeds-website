"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-2 block w-full rounded-xl border border-input bg-card px-4 py-3 text-base text-foreground shadow-[0_1px_2px_rgba(8,62,72,0.04)] placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none";

export function ChapterApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("submitting");
    setErrorMessage("");
    try {
      const response = await fetch("/api/chapter-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong.");
      }
      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-3xl border border-border bg-card px-6 py-12 text-center shadow-[0_16px_40px_rgba(8,62,72,0.08)]"
      >
        <CheckCircle2 className="size-12 text-fresh" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl text-foreground">
          Application received!
        </h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-foreground/75">
          Thank you for applying to start a STEMSeeds chapter. Our team will
          review your application and reach out by email with next steps.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-7"
          onClick={() => setStatus("idle")}
        >
          Submit another application
        </Button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-3xl border border-border bg-card p-6 text-left shadow-[0_16px_40px_rgba(8,62,72,0.08)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-foreground">
          Full name
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={120}
            placeholder="Jane Doe"
            className={inputClass}
          />
        </label>
        <label className="block text-sm font-semibold text-foreground">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={200}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </label>
        <label className="block text-sm font-semibold text-foreground sm:col-span-2">
          School, city, and state
          <input
            name="school"
            type="text"
            required
            maxLength={200}
            placeholder="Frisco High School, Frisco, TX"
            className={inputClass}
          />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-foreground">
          Are you able to create a STEMSeeds chapter within your school?
        </legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {["Yes", "No"].map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-2.5 rounded-full border border-input bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors has-checked:border-primary has-checked:bg-primary/8 has-checked:text-primary"
            >
              <input
                type="radio"
                name="canStartChapter"
                value={option}
                required
                className="size-4 accent-[var(--primary)]"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Hidden from people; bots that fill it in are ignored. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 overflow-hidden"
      >
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="mt-6 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {errorMessage}{" "}
          <a
            href={site.chapterFormHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
          >
            Use our Google Form instead
          </a>
          .
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted-foreground sm:max-w-sm">
          We only use your information to review your application and contact
          you about starting a chapter.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className={cn(submitting && "cursor-wait")}
        >
          {submitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </div>
    </form>
  );
}
