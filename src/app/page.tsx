"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

const whatsappLink =
  "https://wa.me/233201857118?text=" +
  encodeURIComponent(
    "Hello ORALLON, I would like to make an enquiry."
  );

const products = [
  {
    name: "Computing Devices",
    description:
      "Technology selected for professional and everyday use.",
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%205.24.09%20PM.jpeg",
  },
  {
    name: "Business Technology",
    description:
      "Practical technology for modern working environments.",
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%205.24.10%20PM.jpeg",
  },
  {
    name: "Technology Essentials",
    description:
      "Products and accessories for connected living.",
    image:
      "/products/WhatsApp%20Image%202026-11-14%20at%205.25.02%20PM.jpeg",
  },
];

const capabilities = [
  {
    title: "Commerce",
    description:
      "Access to products and solutions across different markets.",
    icon: "commerce",
  },
  {
    title: "Digital Development",
    description:
      "Modern websites designed around business objectives.",
    icon: "digital",
  },
  {
    title: "Product Sourcing",
    description:
      "Helping customers identify and source suitable products.",
    icon: "sourcing",
  },
  {
    title: "Web Design",
    description:
      "Professional digital experiences with thoughtful design.",
    icon: "design",
  },
  {
    title: "Business Solutions",
    description:
      "Technology-led solutions for changing business needs.",
    icon: "business",
  },
  {
    title: "Future Expansion",
    description:
      "Building a business designed to evolve into new industries.",
    icon: "future",
  },
];

function Icon({ type }: { type: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (type) {
    case "commerce":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 4v5M16 4v5" />
        </svg>
      );

    case "digital":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="14" rx="2" />
          <path d="M8 21h8M12 17v4M7 8h10M7 12h6" />
        </svg>
      );

    case "sourcing":
      return (
        <svg {...common}>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5M8 10.5h5M10.5 8v5" />
        </svg>
      );

    case "design":
      return (
        <svg {...common}>
          <path d="m4 16 10-10 4 4-10 10H4v-4Z" />
          <path d="m12 8 4 4M3 21h18" />
        </svg>
      );

    case "business":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const message = String(data.get("message"));

    const subject = encodeURIComponent(
      `ORALLON Website Enquiry - ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    setFormStatus("Your email application is opening.");

    window.location.href =
      `mailto:orallonbusiness@gmail.com?subject=${subject}&body=${body}`;

    form.reset();
  }

  return (
    <main>

      {/* NAVIGATION */}

      <header
        className={`site-header ${scrolled ? "scrolled" : ""}`}
      >
        <div className="orallon-container nav-inner">

          <Link href="/" className="brand-logo" aria-label="ORALLON home">
            <Image
              src="/brand/ORALLON_Horizontal_Logo_Tagline_Transparent.png"
              alt="ORALLON — Beyond Possibilities"
              fill
              priority
              sizes="190px"
              style={{ objectFit: "contain" }}
            />
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/commerce">Commerce</Link>
            <Link href="/digital">Digital</Link>
            <Link href="/#contact">Contact</Link>
          </nav>

          <Link
            href="/#contact"
            className="btn btn-dark nav-cta"
          >
            Let's talk <span aria-hidden="true">↗</span>
          </Link>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "×" : "☰"}
          </button>

        </div>

        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <div className="orallon-container">
            {[
              ["Home", "/"],
              ["About", "/#about"],
              ["Commerce", "/commerce"],
              ["Digital", "/digital"],
              ["Contact", "/#contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              WhatsApp ORALLON ↗
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}

      <section className="hero">
        <div className="orallon-container hero-inner">

          <div className="hero-content">

            <span className="eyebrow">
              A business beyond boundaries
            </span>

            <h1>
              Beyond
              <br />
              Technology.
              <br />
              <span>Beyond Possibilities.</span>
            </h1>

            <p className="hero-description">
              Connecting people and businesses with products,
              digital solutions and opportunities designed
              for a world that never stops evolving.
            </p>

            <div className="hero-actions">

              <Link href="/commerce" className="btn btn-gold">
                Explore our business <span>↗</span>
              </Link>

              <Link href="/digital" className="btn btn-outline">
                Discover digital
              </Link>

            </div>

          </div>

          <div className="hero-visual" aria-label="Abstract ORALLON brand symbol">

            <div className="hero-ring">
              <div className="hero-core">O</div>

              <span className="hero-orbit hero-orbit-one" />
              <span className="hero-orbit hero-orbit-two" />
            </div>

            <p className="hero-caption">
              Think beyond.
              <br />
              Build better.
              <br />
              Move forward.
            </p>

          </div>

        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="orallon-section">
        <div className="orallon-container">

          <div className="intro-grid">

            <div className="reveal">
              <span className="eyebrow" style={{ color: "var(--teal-600)" }}>
                Who we are
              </span>

              <h2 className="intro-heading">
                A broader vision.
                <br />
                A business built for possibility.
              </h2>
            </div>

            <div className="reveal">
              <p className="intro-copy">
                ORALLON is a modern business built around
                opportunity, innovation and progress. Through
                commerce and digital development, we connect
                customers with useful products and help
                businesses strengthen their digital presence.
              </p>

              <p className="intro-copy">
                Our ambition extends beyond a single industry.
                We are building a brand with the flexibility
                to grow, adapt and create value across markets.
              </p>
            </div>

          </div>

          <div className="proof-grid reveal">

            <div className="proof-item">
              <strong>Commerce</strong>
              <span>Products and sourcing</span>
            </div>

            <div className="proof-item">
              <strong>Digital</strong>
              <span>Websites and solutions</span>
            </div>

            <div className="proof-item">
              <strong>Expansion</strong>
              <span>Built for new opportunities</span>
            </div>

          </div>

        </div>
      </section>

      {/* BUSINESS DIVISIONS */}

      <section className="orallon-section divisions-section">
        <div className="orallon-container">

          <div className="reveal">
            <span className="eyebrow" style={{ color: "var(--teal-600)" }}>
              Our business divisions
            </span>

            <h2 className="section-heading">
              Different capabilities.
              <br />
              One shared vision.
            </h2>
          </div>

          <div className="divisions-grid">

            <Link href="/commerce" className="division-card reveal">

              <span className="division-number">
                DIVISION 01 / COMMERCE
              </span>

              <div>
                <h3>ORALLON COMMERCE</h3>

                <p>
                  Discover products, technology and sourcing
                  solutions selected to meet everyday and
                  professional needs.
                </p>

                <span className="division-arrow">
                  Explore commerce <span>→</span>
                </span>
              </div>

            </Link>

            <Link href="/digital" className="division-card reveal">

              <span className="division-number">
                DIVISION 02 / DIGITAL
              </span>

              <div>
                <h3>ORALLON DIGITAL</h3>

                <p>
                  Professional website design, development
                  and digital experiences that help businesses
                  build a stronger online presence.
                </p>

                <span className="division-arrow">
                  Explore digital <span>→</span>
                </span>
              </div>

            </Link>

          </div>

        </div>
      </section>

      {/* CAPABILITIES */}

      <section className="orallon-section capabilities-section">
        <div className="orallon-container">

          <div className="reveal">
            <span className="eyebrow">
              What we do
            </span>

            <h2 className="section-heading">
              Capabilities for a changing world.
            </h2>

            <p style={{ maxWidth: 550, color: "var(--mist)" }}>
              Our business combines practical services with
              a forward-looking approach to technology and
              commercial opportunities.
            </p>
          </div>

          <div className="capabilities-grid">

            {capabilities.map((item) => (
              <article
                key={item.title}
                className="capability-card reveal"
              >
                <div className="capability-icon">
                  <Icon type={item.icon} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* FEATURED PRODUCTS */}

      <section className="orallon-section">
        <div className="orallon-container">

          <div className="reveal" style={{ marginBottom: 45 }}>
            <span className="eyebrow" style={{ color: "var(--teal-600)" }}>
              From ORALLON Commerce
            </span>

            <h2 className="section-heading">
              Explore selected products.
            </h2>

            <p style={{ maxWidth: 550, color: "var(--ink-body)" }}>
              Discover a selection from our commerce division.
              Explore the catalogue or contact us about a product.
            </p>
          </div>

          <div className="products-grid">

            {products.map((product) => (
              <Link
                key={product.name}
                href="/commerce"
                className="product-card reveal"
              >

                <div className="product-image">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                    loading="lazy"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <span className="product-link">
                    View details ↗
                  </span>
                </div>

              </Link>
            ))}

          </div>

          <div style={{ marginTop: 40 }}>
            <Link href="/commerce" className="btn btn-dark">
              Explore all products <span>↗</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="orallon-section about-section"
      >
        <div className="orallon-container about-grid">

          <div className="reveal">
            <span className="eyebrow">
              The ORALLON philosophy
            </span>

            <h2 className="section-heading">
              Built on vision.
              <br />
              Driven by possibility.
            </h2>

            <p className="about-copy">
              We believe that growth begins with the willingness
              to think beyond existing boundaries. ORALLON is
              built on that belief: a commitment to exploring
              opportunities, delivering value and continually
              moving forward.
            </p>
          </div>

          <div className="about-quote reveal">
            <p>
              Beyond
              <br />
              Possibilities.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="orallon-section contact-section"
      >
        <div className="orallon-container contact-grid">

          <div className="reveal">

            <span className="eyebrow" style={{ color: "var(--mint-300)" }}>
              Get in touch
            </span>

            <h2 className="section-heading">
              Let's create something meaningful.
            </h2>

            <p className="contact-copy">
              Have a product enquiry, website project or business
              opportunity? Tell us what you have in mind.
            </p>

            <div className="contact-links">

              <a href="mailto:orallonbusiness@gmail.com">
                orallonbusiness@gmail.com ↗
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                +233 20 185 7118 / WhatsApp ↗
              </a>

            </div>

          </div>

          <form
            className="contact-form reveal"
            onSubmit={handleSubmit}
          >

            <div className="form-field">
              <label htmlFor="name">Your name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                required
                minLength={2}
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Your message</label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help..."
                required
                minLength={10}
              />
            </div>

            <button type="submit" className="btn btn-gold">
              Send enquiry <span>↗</span>
            </button>

            <p
              className="form-status"
              aria-live="polite"
            >
              {formStatus}
            </p>

          </form>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="site-footer">

        <div className="orallon-container">

          <div className="footer-main">

            <div className="footer-brand">

              <Link href="/" className="brand-logo">
                <Image
                  src="/brand/ORALLON_Horizontal_Logo_Tagline_Transparent.png"
                  alt="ORALLON — Beyond Possibilities"
                  fill
                  sizes="190px"
                  style={{
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </Link>

              <p className="footer-description">
                Connecting commerce, technology and digital
                possibilities. Built with a vision that goes
                beyond boundaries.
              </p>

            </div>

            <div className="footer-column">
              <h3>Explore</h3>

              <Link href="/">Home</Link>
              <Link href="/#about">About ORALLON</Link>
              <Link href="/commerce">Commerce</Link>
              <Link href="/digital">Digital</Link>
            </div>

            <div className="footer-column">
              <h3>Contact</h3>

              <a href="mailto:orallonbusiness@gmail.com">
                Email
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>

            </div>

          </div>

          <div className="footer-bottom">

            <span>
              © 2026 ORALLON. All rights reserved.
            </span>

            <span>
              Beyond Possibilities.
            </span>

          </div>

        </div>

      </footer>

    </main>
  );
}