import { NextResponse } from "next/server";

/**
 * Forwards the on-site chapter application to the existing Google Form, so
 * responses keep landing in the same Google Sheet.
 */
const FORM_RESPONSE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScN6nRW2X84GEM7-O82CPEoxv8j3EBt0-WIJEweOy6tfe9wfA/formResponse";

const FIELDS = {
  name: "entry.1345646977",
  school: "entry.396361077",
  email: "entry.1359327691",
  canStartChapter: "entry.19927461",
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill in the hidden "website" field; quietly accept and drop them.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const school = clean(body.school, 200);
  const email = clean(body.email, 200);
  const canStartChapter = clean(body.canStartChapter, 3);

  if (!name || !school || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please fill in your name, school, and a valid email." },
      { status: 400 },
    );
  }
  if (canStartChapter !== "Yes" && canStartChapter !== "No") {
    return NextResponse.json(
      { error: "Please tell us whether you can start a chapter." },
      { status: 400 },
    );
  }

  const formData = new URLSearchParams({
    [FIELDS.name]: name,
    [FIELDS.school]: school,
    [FIELDS.email]: email,
    [FIELDS.canStartChapter]: canStartChapter,
  });

  try {
    const response = await fetch(FORM_RESPONSE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData,
      redirect: "manual",
    });
    if (response.status >= 400) {
      throw new Error(`Google Forms responded with ${response.status}`);
    }
  } catch (error) {
    console.error("Chapter application failed to submit", error);
    return NextResponse.json(
      { error: "We couldn't send your application. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
