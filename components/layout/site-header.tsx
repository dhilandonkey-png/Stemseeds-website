"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navigation, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled || open
          ? "border-primary/10 bg-background/90 shadow-[0_8px_24px_rgba(8,62,72,0.06)] backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full py-1 pr-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Image
            src={site.logo.src}
            alt={site.logo.alt}
            width={44}
            height={44}
            className="size-11 object-contain"
            priority
          />
          <span className="font-display text-xl tracking-tight text-foreground">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-2.5 py-2 text-sm font-medium tracking-wide whitespace-nowrap uppercase xl:px-3.5 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  active
                    ? "text-primary"
                    : "text-foreground/70 hover:bg-primary/5 hover:text-primary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline" size="sm">
            <Link href="/join-us">Start a Chapter</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/donate">Donate</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-primary/15 text-foreground lg:hidden focus-visible:ring-2 focus-visible:ring-ring"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">
            {open ? "Close navigation" : "Open navigation"}
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        hidden={!open}
        className="border-t border-primary/10 bg-background lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-4">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "rounded-xl px-3 py-3 text-base font-medium",
                  active ? "bg-primary/8 text-primary" : "text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-3 flex flex-col gap-2">
            <Button asChild>
              <Link href="/join-us" onClick={closeMenu}>
                Start a Chapter
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/donate" onClick={closeMenu}>
                Donate
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
