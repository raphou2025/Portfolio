const linkedinProfileUrl = '';

const contactMethods = [
  {
    name: 'Phone',
    detail: '095 540 988',
    description: 'Call or text me',
    href: 'tel:095540988',
    action: 'Call now',
    icon: 'phone',
  },
  {
    name: 'Gmail',
    detail: 'raphouphall05@gmail.com',
    description: 'For projects and opportunities',
    href: 'https://mail.google.com/mail/u/0/#inbox?compose=new',
    action: 'Send an email',
    icon: 'email',
  },
  {
    name: 'Telegram',
    detail: '@jasonira',
    description: 'Message me on Telegram',
    href: 'https://t.me/jasonira',
    action: 'Open Telegram',
    icon: 'telegram',
  },
  {
    name: 'LinkedIn',
    detail: linkedinProfileUrl ? 'Raphou Phal' : 'Raphou Phal(LinkedIn)',
    description: linkedinProfileUrl ? 'Connect with me professionally' : 'I will add my profile URL soon',
    href: 'https://www.linkedin.com/in/raphou-phal-0b1697428/?isSelfProfile=true',
    action: linkedinProfileUrl ? 'Visit my profile' : undefined,
    icon: 'linkedin',
  },
];

function ContactIcon({ name }) {
  const paths = {
    phone: (
      <path d="M7.2 3.8 9.6 3.3l1.5 3.6-1.8 1.5a13.2 13.2 0 0 0 6.3 6.3l1.5-1.8 3.6 1.5-.5 2.4a2 2 0 0 1-2.2 1.6A16.4 16.4 0 0 1 4 6a2 2 0 0 1 1.6-2.2l1.6-.3Z" />
    ),
    email: (
      <>
        <rect x="3.5" y="5" width="17" height="14" rx="2" />
        <path d="m4.5 7 7.5 5.5L19.5 7" />
      </>
    ),
    telegram: (
      <>
        <path d="m21 3-7.2 18-3.7-7.1L3 10.2 21 3Z" />
        <path d="m10.1 13.9 4.4-4.4" />
      </>
    ),
    linkedin: (
      <>
        <path d="M5 9v10M5 5.5v.1M10 19v-6a4 4 0 0 1 8 0v6M10 9v10" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}

function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-slate-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-glow absolute -left-40 top-24 h-[26rem] w-[26rem] rounded-full bg-emerald-400/[0.08] blur-[120px]" />
        <div className="ambient-glow absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-violet-500/[0.08] blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <header className="relative z-10 border-b border-white/[0.07] bg-ink/80 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
        >
          <a className="font-display text-xl font-bold tracking-tight text-white" href="/P.html">
            Raphou-Phal<span className="text-accent">.</span>
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-accent/60 hover:text-accent"
            href="/P.html"
          >
            <span aria-hidden="true">←</span> Back to portfolio
          </a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <section aria-labelledby="contact-title" className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">LET&apos;S START A CONVERSATION</p>
          <h1
            className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl"
            id="contact-title"
          >
            I&apos;d love to hear <span className="text-gradient">from you.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            Interested in working together, have a question, or just want to say hello?
            Choose whichever way works best for you.
          </p>
        </section>

        <section aria-label="Ways to contact me" className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 sm:gap-5">
          {contactMethods.map((method) => {
            const cardContent = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/15 bg-accent/[0.07] text-accent">
                    <ContactIcon name={method.icon} />
                  </span>
                  {method.href && (
                    <span aria-hidden="true" className="text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                      ↗
                    </span>
                  )}
                </div>
                <div className="mt-6">
                  <h2 className="font-display text-lg font-semibold text-white">{method.name}</h2>
                  <p className={`mt-2 break-all text-sm ${method.href ? 'text-accent' : 'text-slate-400'}`}>
                    {method.detail}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">{method.description}</p>
                </div>
                {method.action && (
                  <p className="mt-5 border-t border-white/[0.07] pt-4 text-xs font-medium text-slate-300">
                    {method.action} <span aria-hidden="true">→</span>
                  </p>
                )}
              </>
            );

            return method.href ? (
              <a
                aria-label={`${method.action}: ${method.detail}`}
                className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.045] hover:shadow-xl hover:shadow-accent/[0.04] sm:p-7"
                href={method.href}
                key={method.name}
                rel={method.href.startsWith('https://') ? 'noreferrer' : undefined}
                target={method.href.startsWith('https://') ? '_blank' : undefined}
              >
                {cardContent}
              </a>
            ) : (
              <div
                className="rounded-3xl border border-dashed border-white/[0.12] bg-white/[0.015] p-6 sm:p-7"
                key={method.name}
              >
                {cardContent}
              </div>
            );
          })}
        </section>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-6 text-slate-500">
          Based in Phnom Penh, Cambodia. I&apos;ll get back to you as soon as I can.
        </p>
      </main>

      <footer className="relative z-10 border-t border-white/[0.07] px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Raphou Phal</p>
          <a className="transition hover:text-accent" href="/P.html">Back to portfolio</a>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;
