import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt =
  "STEMSeeds: a student-led nonprofit bringing hands-on STEM kits to children in hospitals";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The preview card shown when stemseeds.net is shared in messages or social posts. */
export default async function OpengraphImage() {
  const dir = join(process.cwd(), "public", "og");
  const [logo, photo] = await Promise.all([
    readFile(join(dir, "logo.png")),
    readFile(join(dir, "photo.jpg")),
  ]);
  const toDataUrl = (buffer: Buffer, type: string) =>
    `data:${type};base64,${buffer.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#f5faf7",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 620,
          padding: "0 56px",
        }}
      >
        <img
          src={toDataUrl(logo, "image/png")}
          width={120}
          height={97}
          alt=""
        />
        <div
          style={{
            marginTop: 28,
            fontSize: 76,
            fontWeight: 800,
            color: "#0d5f66",
            letterSpacing: -2,
          }}
        >
          {site.name}
        </div>
        <div style={{ marginTop: 4, fontSize: 34, color: "#0b3238" }}>
          {site.tagline}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            lineHeight: 1.4,
            color: "#4a6a6b",
          }}
        >
          Student-led 501(c)(3) nonprofit bringing hands-on STEMKits to children
          in hospitals and underserved communities.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 24,
            fontWeight: 700,
            color: "#0e4f31",
          }}
        >
          945+ kits · 32 chapters · 6 countries
        </div>
      </div>
      <img
        src={toDataUrl(photo, "image/jpeg")}
        width={580}
        height={630}
        style={{ objectFit: "cover" }}
        alt=""
      />
    </div>,
    size,
  );
}
