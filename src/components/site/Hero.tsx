import { useRef, useState } from "react";
import heroVideo from "@/assets/hero.mp4";
import heroPoster from "@/assets/hero-poster.jpg";
import { business } from "@/config/business";
import { track } from "@/lib/analytics";
import { CallButton, WhatsAppButton } from "./cta";
import { ShieldCheck, Star } from "lucide-react";
import wreathLeft from "@/assets/wreath-left.Dhid9-Kp_1emOdB.avif";
import wreathRight from "@/assets/wreath-right.6OR3ntW6_Z1oK18L.avif";

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
          
          <h1 className="text-[2.6rem] font-extrabold leading-snug tracking-tight sm:text-6xl lg:text-[4.2rem]">
            How 1,200+ Mumbai Families Saved <span className="highlighter">₹15,000</span> With Our <span className="text-red-500">Aluminium Sliding Window Repair</span> Instead of Replacing Them
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
            Are your sliding doors too heavy for you or your maid to open? We can <b>fix jammed sliding windows</b> and provide expert sliding glass door roller replacement! <b>EVEN IF</b> the tracks look ruined and local mistris said it can't be done.
          </p>
          <p className="mt-4 max-w-md text-lg font-semibold leading-relaxed text-primary-foreground sm:text-xl">
            Send us a photo on WhatsApp for a <span className="highlighter">Free 15-Minute Diagnosis</span>. No fix, no fee.
          </p>

          <div className="mt-6 flex justify-center sm:justify-start text-[40px] animate-bounce drop-shadow-md">
             👇
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <WhatsAppButton location="hero" className="cta-live pulse shadow-[var(--shadow-cta)]" />
            <CallButton
              location="hero"
              className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:border-primary-foreground/60"
            />
          </div>
          <div className="mt-4 mx-auto flex items-center justify-center sm:justify-start gap-3 text-xs font-medium text-primary-foreground/70">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Free Quote</span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/30"></span>
            <span>Replies in 5 mins</span>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <div className="mx-auto flex items-start gap-2 max-w-sm rounded-lg bg-black/20 p-3 border-2 border-dashed border-red-500/50 backdrop-blur-sm text-left">
              <span className="text-sm font-bold text-red-500 mt-0.5">⚠️</span>
              <span className="text-sm font-medium text-primary-foreground/90 leading-snug">
                <b>URGENT:</b> We take a limited number of same-day visits. <span className="highlighter text-black px-1">Message early to lock in today's slot.</span>
              </span>
            </div>

            <a
              href={googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("google_profile_click", { location: "hero" })}
              className="mt-4 mx-auto flex w-fit items-center justify-center gap-2 sm:gap-3 rounded-full bg-gradient-to-b from-gray-50 to-gray-200 px-4 py-2 sm:px-6 sm:py-2.5 shadow-md transition-transform hover:scale-[1.02]"
            >
              <img src={wreathLeft} alt="" className="h-6 w-auto sm:h-8 opacity-80" aria-hidden="true" />
              <div className="flex text-yellow-500 drop-shadow-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
              </div>
              <span className="text-[15px] sm:text-[18px] font-black uppercase tracking-tight text-gray-900 font-display pt-0.5">
                4.9 OUT OF 120+ REVIEWS
              </span>
              <img src={wreathRight} alt="" className="h-6 w-auto sm:h-8 opacity-80" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-6 mx-auto flex max-w-md items-start justify-center gap-2 text-sm sm:text-base font-bold text-primary-foreground">
            <span className="mt-0.5">✅</span>
            <p className="text-left leading-snug">
              No technical knowledge needed. <br className="sm:hidden" />
              <span className="text-emerald-400">Just show us the problem.</span>
            </p>
          </div>
          
          <div className="mt-8 border-t border-primary-foreground/10 pt-6 grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-extrabold text-primary-foreground font-display">1,200+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">Windows Fixed</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-primary-foreground font-display">4.9/5</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">Customer Rating</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-primary-foreground font-display">14+ Years</p>
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

              <span 
                className="absolute z-10 text-4xl animate-bounce drop-shadow-md"
                style={{ bottom: "calc(50% + 56px)" }}
              >
                👇
              </span>

              <span className="cta-live relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                <svg className="ml-1 h-9 w-9" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>

              <span className="absolute bottom-4 left-4 right-4 z-10 text-center">
                <span className="block text-xl font-extrabold uppercase leading-snug text-white font-display drop-shadow-lg shadow-black sm:text-2xl">
                  Watch: <span className="text-accent">Jammed Window</span> Fixed
                </span>
                <span className="mt-1 block text-sm font-bold text-white/90 drop-shadow-md">
                  Plus Pigeon &amp; Safety Net Installation
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
