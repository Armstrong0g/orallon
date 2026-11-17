import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites that establish your business online, communicate your value and help customers discover your services.",
    features: [
      "Company Websites",
      "Business Landing Pages",
      "Corporate Websites",
    ],
  },
  {
    number: "02",
    title: "E-commerce Websites",
    description:
      "Online shopping experiences designed to help businesses present products and connect with customers.",
    features: [
      "Online Stores",
      "Product Catalogues",
      "Shopping Experiences",
    ],
  },
  {
    number: "03",
    title: "Website Design",
    description:
      "Modern, user-focused website designs that combine visual quality, clarity and practical functionality.",
    features: ["UI Design", "Responsive Layouts", "User Experience"],
  },
  {
    number: "04",
    title: "Website Redesign",
    description:
      "Improve an existing website with a refreshed appearance, better structure and a more effective user experience.",
    features: ["Visual Refresh", "Layout Improvements", "Modernisation"],
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, objectives, audience and website requirements.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "We organise the website structure and develop a design direction for your project.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build the website, bringing the design and required functionality together.",
  },
  {
    number: "04",
    title: "Review & Delivery",
    description:
      "We test the website, review the final details and prepare it for launch.",
  },
];

const whatsappLink =
  "https://wa.me/233201857118?text=" +
  encodeURIComponent(
    "Hello ORALLON DIGITAL, I would like to enquire about your website development services."
  );

export default function DigitalPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#0A1F17]">

      {/* NAVIGATION */}

      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">

          <Link href="/" aria-label="ORALLON homepage">
            <Image
              src="/brand/ORALLON_Horizontal_Logo_Tagline_Transparent.png"
              alt="ORALLON - Beyond Possibilities"
              width={240}
              height={80}
              priority
              className="h-10 w-auto object-contain sm:h-14"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden items-center gap-6 text-sm font-medium text-[#3F5A50] lg:flex xl:gap-8">
            <Link href="/" className="transition hover:text-[#14786B]">
              Home
            </Link>

            <Link href="/commerce" className="transition hover:text-[#14786B]">
              Commerce
            </Link>

            <Link href="/digital" className="font-bold text-[#14786B]">
              Digital Solutions
            </Link>

            <Link href="/#about" className="transition hover:text-[#14786B]">
              About
            </Link>

            <Link href="/#contact" className="transition hover:text-[#14786B]">
              Contact
            </Link>
          </nav>

          {/* DESKTOP CTA */}

          <a
            href="#contact"
            className="hidden rounded-full bg-[#0A1F17] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 lg:inline-flex"
          >
            Get in Touch <span className="ml-2">↗</span>
          </a>

          {/* MOBILE MENU */}

          <details className="relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full bg-[#0A1F17] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
              Menu <span>☰</span>
            </summary>

            <nav className="absolute right-0 top-14 z-50 w-[min(280px,calc(100vw-32px))] rounded-2xl border border-[#DCEBE0] bg-white p-5 shadow-xl">
              <div className="flex flex-col gap-5 text-sm font-medium text-slate-700">
                <Link href="/" className="transition hover:text-[#14786B]">
                  Home
                </Link>

                <Link href="/commerce" className="transition hover:text-[#14786B]">
                  Commerce
                </Link>

                <Link href="/digital" className="font-bold text-[#14786B]">
                  Digital Solutions
                </Link>

                <Link href="/#about" className="transition hover:text-[#14786B]">
                  About
                </Link>

                <Link href="/#contact" className="transition hover:text-[#14786B]">
                  Contact
                </Link>

                <a
                  href="#contact"
                  className="rounded-full bg-[#0A1F17] px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  Get in Touch ↗
                </a>
              </div>
            </nav>
          </details>

        </div>
      </header>

      {/* HERO SECTION */}

      <section className="relative overflow-hidden bg-[#0A1F17] text-white">

        <div className="absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-[100px] sm:h-[550px] sm:w-[550px] sm:blur-[130px]" />

        <div className="absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-blue-700/20 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">

          {/* HERO CONTENT */}

          <Reveal>
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-blue-200 sm:mb-8 sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                ORALLON DIGITAL
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Building digital experiences.
                <span className="mt-2 block text-[#E8B04A]">
                  Moving businesses forward.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300 sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
                We create modern websites and practical digital solutions that
                help businesses establish their online presence and connect with
                their audiences.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#services"
                  className="rounded-full bg-blue-600 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Explore Our Services <span className="ml-2">↗</span>
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/30 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-[#0A1F17]"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </Reveal>

          {/* HERO VISUAL */}

          <Reveal delay={0.2}>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-xl sm:rounded-[32px] sm:p-8 md:p-10">

                <div className="flex items-center justify-between border-b border-white/10 pb-5 sm:pb-6">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-400 sm:text-xs">
                    DIGITAL EXPERIENCES
                  </span>

                  <span className="text-sm text-[#E8B04A]">02 / 02</span>
                </div>

                <div className="py-8 sm:py-12">
                  <p className="text-xs font-medium tracking-[0.25em] text-[#8FD3B0]">
                    THINK DIGITAL.
                  </p>

                  <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                    Ideas into
                    <span className="block text-[#E8B04A]">
                      experiences.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                    Digital solutions designed around people, businesses and
                    possibilities.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                    <span className="text-2xl font-semibold text-[#E8B04A]">
                      01
                    </span>

                    <p className="mt-4 text-xs font-bold tracking-wider sm:mt-5">
                      DESIGN
                    </p>

                    <p className="mt-2 text-xs leading-6 text-slate-400">
                      Clear and modern interfaces.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                    <span className="text-2xl font-semibold text-[#E8B04A]">
                      02
                    </span>

                    <p className="mt-4 text-xs font-bold tracking-wider sm:mt-5">
                      DEVELOPMENT
                    </p>

                    <p className="mt-2 text-xs leading-6 text-slate-400">
                      Functional digital experiences.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-2 md:items-end md:gap-10">

            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-[#14786B]">
                THE DIGITAL DIVISION
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Your business deserves
                <span className="block text-slate-400">
                  a stronger digital presence.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#3F5A50] sm:text-base sm:leading-8">
              Your website is an important part of how customers discover and
              understand your business. ORALLON DIGITAL focuses on building
              accessible, professional and practical web experiences for modern
              businesses.
            </p>

          </div>
        </Reveal>
      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="scroll-mt-24 bg-[#EAF3EC] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <Reveal>
            <div className="mb-10 sm:mb-14">
              <p className="text-xs font-bold tracking-[0.25em] text-[#14786B]">
                WHAT WE OFFER
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Our Digital Services
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#3F5A50] sm:text-base sm:leading-8">
                Practical website solutions designed to help businesses build,
                improve and manage their online presence.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:gap-7 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={(index % 2) * 0.12}>
                <article className="group h-full rounded-3xl border border-[#DCEBE0] bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/70 sm:p-8 md:p-10">

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-[#14786B]">
                      {service.number}
                    </span>

                    <span className="text-2xl text-slate-300 transition group-hover:text-[#14786B]">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-9 text-2xl font-bold tracking-tight sm:mt-12 sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#3F5A50] sm:mt-5 sm:text-base sm:leading-8">
                    {service.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2 sm:mt-8">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-[#3F5A50] sm:px-4"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                </article>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* OUR PROCESS */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:py-28">

        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.25em] text-[#14786B]">
              HOW WE WORK
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              From an idea to a digital experience.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#3F5A50] sm:text-base sm:leading-8">
              Every project follows a structured process that helps us
              understand the requirements and work towards a clear outcome.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          {process.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1}>
              <div className="h-full border-t border-[#DCEBE0] pt-6 sm:pt-7">
                <span className="text-sm font-bold text-[#14786B]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold sm:mt-6">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#3F5A50]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </section>

      {/* WHY ORALLON */}

      <section className="bg-[#EAF3EC] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:grid-cols-2 md:items-center md:gap-14">

          <Reveal>
            <div className="rounded-3xl bg-[#0A1F17] p-7 text-white sm:p-10 md:p-14">
              <p className="text-xs font-bold tracking-[0.25em] text-[#E8B04A]">
                OUR APPROACH
              </p>

              <h2 className="mt-6 text-3xl font-bold leading-tight sm:mt-7 sm:text-4xl">
                Technology with purpose.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8">
                We believe a good website should do more than look attractive.
                It should communicate clearly, function effectively and serve a
                meaningful purpose.
              </p>

              <div className="mt-8 h-1 w-20 rounded-full bg-blue-500 sm:mt-10" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-[#14786B]">
                WHY ORALLON DIGITAL
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Built around your business needs.
              </h2>

              <div className="mt-7 space-y-6 sm:mt-8">

                <div>
                  <h3 className="font-bold">Purposeful Design</h3>
                  <p className="mt-2 text-sm leading-7 text-[#3F5A50]">
                    Clear layouts and thoughtful visual presentation.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">Responsive Experiences</h3>
                  <p className="mt-2 text-sm leading-7 text-[#3F5A50]">
                    Websites designed to work across mobile, tablet and desktop
                    screens.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">Practical Functionality</h3>
                  <p className="mt-2 text-sm leading-7 text-[#3F5A50]">
                    Features and structures selected to support the purpose of
                    each website.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">Consistent Communication</h3>
                  <p className="mt-2 text-sm leading-7 text-[#3F5A50]">
                    A clear process from initial enquiry through project
                    delivery.
                  </p>
                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="scroll-mt-20 bg-[#0A1F17] px-5 py-16 text-white sm:px-6 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-xs font-bold tracking-[0.25em] text-[#E8B04A]">
              LET'S BUILD SOMETHING
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-end md:gap-10">

              <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Have a website idea?
                <span className="block text-[#E8B04A]">
                  Let's bring it forward.
                </span>
              </h2>

              <div>
                <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                  Tell us about your business and what you want to achieve
                  online. Let's discuss a digital solution that fits your
                  objectives.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-blue-600 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    Enquire on WhatsApp ↗
                  </a>

                  <a
                    href="mailto:orallonbusiness@gmail.com?subject=ORALLON%20DIGITAL%20Enquiry"
                    className="rounded-full border border-white/30 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-[#0A1F17]"
                  >
                    Send an Email
                  </a>
                </div>

                <p className="mt-6 break-all text-sm text-slate-400">
                  orallonbusiness@gmail.com
                </p>
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#0A1F17] px-5 py-9 text-white sm:px-6 sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row md:items-center">

          <div>
            <Link
              href="/"
              className="text-2xl font-black tracking-[0.18em]"
            >
              ORALLON<span className="text-blue-500">.</span>
            </Link>

            <p className="mt-3 text-sm text-slate-400">
              Beyond Possibilities.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-4 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <Link href="/commerce" className="transition hover:text-white">
              Commerce
            </Link>

            <Link href="/digital" className="transition hover:text-white">
              Digital Solutions
            </Link>

            <Link href="/#about" className="transition hover:text-white">
              About
            </Link>

            <Link href="/#contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>

        </div>

        <div className="mx-auto mt-9 max-w-7xl border-t border-white/10 pt-7 text-xs text-slate-500 sm:mt-10">
          © ORALLON. All rights reserved.
        </div>
      </footer>

    </main>
  );
}