import React from 'react';

export default function Hero() {
  const age = Math.floor((new Date() - new Date("2003-10-18")) / (365.25 * 24 * 60 * 60 * 1000));
  return (
    <section className="container mx-auto max-w-screen-lg px-4 pt-16 sm:pt-24 pb-12">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for new opportunities
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
            Panhareach Phat
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-semibold text-muted">
            Experienced & Versatile Software Developer
          </p>
          <a
            href="mailto:panhareach.phat.2050@gmail.com"
            className="mt-2 inline-block text-sm text-muted hover:text-primary transition-colors"
          >
            panhareach.phat.2050@gmail.com
          </a>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted max-w-xl mx-auto md:mx-0">
            {`I'm a ${age}-year-old software developer specializing in scalable backend solutions. Experienced in team leadership, code reviews, and delivering secure, high-performance systems.`}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a
              href="/pdf/Panhareach-Phat-Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg hover:bg-accent-hover transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Resume
            </a>
            <a
              href="#experiences"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-primary hover:bg-surface-hover transition-colors"
            >
              View work
            </a>
          </div>
        </div>

        <div className="relative shrink-0">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-full bg-accent/30 blur-2xl"
          />
          <img
            className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover ring-1 ring-border"
            src="https://avatars.githubusercontent.com/u/111555521?v=4"
            alt="Panhareach Phat"
          />
        </div>
      </div>
    </section>
  );
}