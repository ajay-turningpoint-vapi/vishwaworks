import { useRef, useState } from "react";
import heroVideo from "@/assets/hero.mp4";
import heroPoster from "@/assets/hero-poster.jpg";
import { business } from "@/config/business";
import { track } from "@/lib/analytics";
import { CallButton, WhatsAppButton } from "./cta";
import { ShieldCheck, Star, Award } from "lucide-react";

const googleProfileUrl = business.googleBusinessProfileUrl || business.googleMapsSearchUrl;

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
    track("hero_video_play", {});
  };

  return (
    <section id="top" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <div>
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm sm:mb-6 border border-primary-foreground/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="tracking-wide">Located at IIT Market, Powai. 30-Min Dispatch.</span>
          </div>
          
          <h1 className="text-[2.2rem] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[3.4rem]">
            How 1,200+ Mumbai High-Rise Residents Saved <span className="highlighter">₹15,000</span> By Refusing To Replace Their <span className="text-red-500">Jammed Windows & Sliding Doors</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
            Struggling with heavy, jammed windows or sliding balcony doors? We can fix them... <b>EVEN IF</b> they haven't moved in 5 years, the tracks look destroyed, and local carpenters told you it's impossible.
          </p>
          <p className="mt-4 max-w-md text-lg font-semibold leading-relaxed text-primary-foreground sm:text-xl">
            Send us a photo on WhatsApp for a <span className="highlighter">Free 15-Minute Diagnosis</span>. No fix, no fee.
          </p>

          <div className="mt-6 flex justify-center sm:justify-start">
             {/* Big directional arrow pointing to the button */}
             <svg className="w-12 h-12 text-red-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
             </svg>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <WhatsAppButton location="hero" className="cta-live pulse shadow-[var(--shadow-cta)]" />
            <CallButton
              location="hero"
              className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:border-primary-foreground/60 sm:w-auto"
            />
          </div>
          <div className="mt-3 flex items-center gap-3 text-xs font-medium text-primary-foreground/70">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Free Quote</span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/30"></span>
            <span>Replies in 5 mins</span>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-start gap-2 max-w-sm rounded-lg bg-black/20 p-3 border border-red-500/30 backdrop-blur-sm">
              <span className="text-sm font-bold text-red-500 mt-0.5">⏳</span>
              <span className="text-sm font-medium text-primary-foreground/90 leading-snug">
                We take a limited number of same-day visits so every repair gets proper attention. Message early to lock in today's slot.
              </span>
            </div>

            <a
              href={googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("google_profile_click", { location: "hero" })}
              className="flex items-center gap-2 max-w-sm rounded-lg bg-black/20 p-3 border border-primary-foreground/10 backdrop-blur-sm hover:border-primary-foreground/30 transition-colors"
            >
              <div className="flex text-yellow-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
              </div>
              <span className="text-sm font-bold text-primary-foreground underline underline-offset-2">4.9/5 Rating</span>
              <span className="text-sm font-medium text-primary-foreground/70">from 120+ Powai Residents on Google →</span>
            </a>
          </div>

          <div className="mt-4 text-sm text-primary-foreground/70">
            <p>No technical knowledge needed. Just show us the problem.</p>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-primary-foreground/80">
            <a
              href={googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("google_profile_click", { location: "hero_badges" })}
              className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors"
            >
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="underline underline-offset-2">4.9/5 Google Rating</span>
            </a>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>100% Risk-Free Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-blue-400" />
              <span>Mumbai's #1 Rated</span>
            </div>
          </div>
          
          <div className="mt-8 border-t border-primary-foreground/10 pt-6 flex flex-wrap gap-x-6 gap-y-3">
            <div>
              <p className="text-2xl font-extrabold text-primary-foreground">1,200+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">Windows Fixed</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-primary-foreground">4.9/5</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">Customer Rating</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-primary-foreground">14+ Years</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">In Mumbai</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-primary-foreground/10 shadow-2xl bg-black aspect-square md:aspect-auto h-full min-h-[300px] flex items-center justify-center group">
          <video
            ref={videoRef}
            src={heroVideo}
            poster={heroPoster}
            playsInline
            muted
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {!playing ? (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play video: real sliding window repair and safety net installation"
              className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40 transition-colors duration-300 group-hover:from-black/80" />

              <span className="absolute top-4 right-4 z-10 rounded-full bg-accent px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-accent-foreground shadow-lg">
                +Pigeon &amp; Safety Net
              </span>

              <svg
                className="absolute z-10 h-8 w-8 text-red-500 animate-bounce"
                style={{ bottom: "calc(50% + 56px)" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>

              <span className="cta-live relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                <svg className="ml-1 h-9 w-9" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>

              <span className="absolute bottom-4 left-4 right-4 z-10 text-center">
                <span className="block text-base font-extrabold leading-snug text-white drop-shadow-md">
                  Watch: Jammed Sliding Window Fixed — Plus Pigeon &amp; Safety Net Fitted
                </span>
                <span className="mt-1 block text-xs font-medium text-white/80 drop-shadow-md">
                  See exactly how it's done — glide, seal, and net, step by step.
                </span>
              </span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => videoRef.current?.pause()}
              aria-label="Pause video"
              className="absolute bottom-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
