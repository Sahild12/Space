"use client";
import ShaderDemo_ATC from "@/components/ui/atc-shader";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

export function CTA() {
  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <ShaderDemo_ATC className="h-full w-full" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 55%, transparent 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.85) 100%)",
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[2px] bg-white/10" />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col px-6 md:px-10">
        <div className="flex items-center justify-between pt-10 md:pt-14">
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/70">
            CHAPTER IV / 004
          </div>
          <div className="hidden font-mono text-[11px] uppercase tracking-[0.28em] text-white/50 md:block">
            Signal · Open
          </div>
        </div>

        <div className="flex flex-1 flex-col items-start justify-center pb-20 pt-16 md:pb-32 md:pt-24">
          <EyebrowBadge className="!border-white/15 !bg-white/5 !text-white/70">
            Chapter IV · The Invitation
          </EyebrowBadge>

          <h2 className="mt-8 max-w-[18ch] text-5xl font-bold leading-[0.92] tracking-tighter text-white md:text-7xl lg:text-[124px]">
            Ignite your{" "}
            <span className="bg-gradient-to-r from-amber-200 via-white to-amber-300 bg-clip-text text-transparent">
              Universe.
            </span>
          </h2>
        </div>

        <div className="flex items-center justify-between pb-8 md:pb-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
            EST · MMXXVI
          </div>
          <div className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/45 md:flex">
            <span>sahildalavi12@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
