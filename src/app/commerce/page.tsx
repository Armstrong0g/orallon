import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";

const whatsappNumber = "233201857118";

const categories = [
  {
    number: "01",
    name: "Computing",
    description: "Laptops, desktops and computing devices.",
  },
  {
    number: "02",
    name: "Technology",
    description: "Essential technology for everyday use.",
  },
  {
    number: "03",
    name: "Electronics",
    description: "Modern electronic products and devices.",
  },
  {
    number: "04",
    name: "Accessories",
    description: "Technology accessories and essentials.",
  },
];

function getWhatsAppLink(productName: string) {
  const message = `Hello ORALLON, I am interested in ${productName}. Please provide more information.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function CommercePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#0A1F17]">

      {/* NAVIGATION */}

      <header className="sticky top-0 z-50 border-b border-[#DCEBE0] bg-white/95 backdrop-blur-md">
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

          <nav className="hidden items-center gap-6 text-sm font-medium text-[#3F5A50] lg:flex xl:gap-8">
            <Link href="/" className="transition hover:text-[#14786B]">
              Home
            </Link>

            <Link href="/commerce" className="font-bold text-[#14786B]">
              Commerce
            </Link>

            <Link href="/digital" className="transition hover:text-[#14786B]">
              Digital Solutions
            </Link>

            <Link href="/#about" className="transition hover:text-[#14786B]">
              About
            </Link>

            <Link href="/#contact" className="transition hover:text-[#14786B]">
              Contact
            </Link>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-[#0A1F17] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#14392B] lg:inline-flex"
          >
            Get in Touch <span className="ml-2">↗</span>
          </a>

          <details className="relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full bg-[#0A1F17] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#14392B] sm:px-5 sm:py-3">
              Menu <span>☰</span>
            </summary>

            <nav className="absolute right-0 top-14 z-50 w-[min(280px,calc(100vw-32px))] rounded-2xl border border-[#DCEBE0] bg-white p-5 shadow-xl">
              <div className="flex flex-col gap-5 text-sm font-medium text-[#3F5A50]">

                <Link href="/" className="transition hover:text-[#14786B]">
                  Home
                </Link>

                <Link href="/commerce" className="font-bold text-[#14786B]">
                  Commerce
                </Link>

                <Link href="/digital" className="transition hover:text-[#14786B]">
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
                  className="rounded-full bg-[#0A1F17] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#14392B]"
                >
                  Get in Touch ↗
                </a>

              </div>
            </nav>
          </details>

        </div>
      </header>

      {/* HERO SECTION */}

      <section className="relative overflow-hidden bg-[#0A1F17] px-5 py-20 text-white sm:px-6 sm:py-28 md:py-32">
        <div className="relative mx-auto max-w-7xl">

          <Reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#8FD3B0] sm:text-sm sm:tracking-[0.3em]">
              ORALLON COMMERCE
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Technology for everyday possibilities.
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#B7CFC3] sm:text-base sm:leading-8 md:text-lg">
              Discover technology products, computing devices and electronics
              selected to support modern work, learning and everyday life.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">

              <a
                href="#products"
                className="rounded-lg bg-[#E8B04A] px-7 py-3.5 text-center text-sm font-semibold text-[#0A1F17] transition hover:bg-white"
              >
                Explore Products
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello ORALLON, I would like to make a product enquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/40 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-[#0A1F17]"
              >
                Make an Enquiry
              </a>

            </div>
          </Reveal>

        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="px-5 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="max-w-3xl">

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#14786B] sm:text-sm">
                What We Offer
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Technology that moves you forward.
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#3F5A50] sm:text-base sm:leading-8">
                ORALLON COMMERCE connects customers with technology products
                through a straightforward and reliable enquiry process.
                Whether you are looking for computing devices, electronics
                or accessories, we help you explore available options.
              </p>

            </div>
          </Reveal>

        </div>
      </section>

      {/* CATEGORIES */}

      <section className="bg-[#EAF3EC] px-5 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="mb-10 sm:mb-12">

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#14786B] sm:text-sm">
                Browse Categories
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Explore our categories.
              </h2>

            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {categories.map((category, index) => (
              <Reveal key={category.number} delay={index * 0.1}>
                <div className="h-full rounded-xl border border-[#DCEBE0] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">

                  <span className="text-sm font-bold text-[#14786B]">
                    {category.number}
                  </span>

                  <h3 className="mt-6 text-xl font-bold">
                    {category.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#3F5A50]">
                    {category.description}
                  </p>

                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>

      {/* PRODUCT CATALOGUE */}

      <section
        id="products"
        className="scroll-mt-24 px-5 py-16 sm:px-6 sm:py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">

              <div>

                <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#14786B] sm:text-sm">
                  Our Collection
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Featured Products
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[#3F5A50] sm:text-base">
                  Explore products available through ORALLON COMMERCE.
                  Contact us for specifications, pricing and availability.
                </p>

              </div>

              <span className="text-sm font-semibold text-[#3F5A50]">
                {products.length} Products
              </span>

            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4">

            {products.map((product) => (

              <article
                key={product.id}
                className="group h-full overflow-hidden rounded-xl border border-[#DCEBE0] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* PRODUCT IMAGE */}

                <div className="relative aspect-[4/3] overflow-hidden bg-[#EAF3EC]">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4 transition duration-500 group-hover:scale-105"
                  />

                </div>

                {/* PRODUCT DETAILS */}

                <div className="p-5 sm:p-6">

                  <p className="text-xs font-bold uppercase tracking-widest text-[#14786B]">
                    {product.category}
                  </p>

                  <h3 className="mt-3 text-lg font-bold text-[#0A1F17]">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#3F5A50]">
                    {product.description}
                  </p>

                  <div className="mt-4 border-t border-[#DCEBE0] pt-4">

                    <p className="text-sm font-semibold text-[#0A1F17]">
                      {product.processor}
                    </p>

                    <p className="mt-2 text-xs text-[#3F5A50]">
                      {product.ram} RAM · {product.storage}
                    </p>

                    <p className="mt-1 text-xs text-[#3F5A50]">
                      {product.display}
                    </p>

                  </div>

                  {/* PRODUCT WHATSAPP BUTTON */}

                  <a
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${product.name} on WhatsApp`}
                    style={{
                      all: "unset",
                      display: "flex",
                      boxSizing: "border-box",
                      width: "100%",
                      minHeight: "50px",
                      marginTop: "24px",
                      padding: "14px 20px",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#0A1F17",
                      color: "#FFFFFF",
                      WebkitTextFillColor: "#FFFFFF",
                      fontFamily: "Arial, sans-serif",
                      fontSize: "14px",
                      fontWeight: "700",
                      lineHeight: "1.5",
                      textAlign: "center",
                      textDecoration: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        color: "#FFFFFF",
                        WebkitTextFillColor: "#FFFFFF",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "1.5",
                        visibility: "visible",
                        opacity: 1,
                      }}
                    >
                      Enquire on WhatsApp ↗
                    </span>
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* PRODUCT SOURCING */}

      <section className="bg-[#0A1F17] px-5 py-16 text-white sm:px-6 sm:py-20 md:py-24">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-12">

          <Reveal>
            <div>

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#8FD3B0] sm:text-sm">
                Beyond The Catalogue
              </p>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Looking for something specific?
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#B7CFC3] sm:text-base sm:leading-8">
                Tell us what you need. ORALLON can assist with enquiries
                for technology products beyond those currently displayed
                in our catalogue.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello ORALLON, I would like to enquire about sourcing a technology product.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-lg bg-[#E8B04A] px-7 py-3.5 text-sm font-semibold text-[#0A1F17] transition hover:bg-white"
              >
                Request a Product ↗
              </a>

            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10">

              <h3 className="text-xl font-bold">
                The ORALLON Approach
              </h3>

              <div className="mt-8 space-y-7">

                {[
                  {
                    title: "Product Enquiries",
                    description: "Tell us the product you are interested in.",
                  },
                  {
                    title: "Information & Availability",
                    description: "Discuss specifications, pricing and availability.",
                  },
                  {
                    title: "Customer Support",
                    description: "Receive assistance throughout your enquiry.",
                  },
                ].map((item, index) => (

                  <div key={item.title} className="flex gap-5">

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#14786B] font-bold text-white">
                      {index + 1}
                    </span>

                    <div>

                      <h4 className="font-semibold">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-[#B7CFC3]">
                        {item.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="scroll-mt-24 px-5 py-16 text-center sm:px-6 sm:py-20 md:py-24"
      >

        <Reveal>
          <div className="mx-auto max-w-3xl">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#14786B] sm:text-sm">
              Get In Touch
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let's find what you need.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#3F5A50] sm:text-base">
              Have a product enquiry or need assistance?
              Contact the ORALLON COMMERCE team.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">

              {/* CONTACT WHATSAPP BUTTON */}

             <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello ORALLON, I would like to make a product enquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact ORALLON on WhatsApp"
                className="orallon-whatsapp-button"
              >
                <span>WhatsApp Us ↗</span>
              </a>

              <a
                href="mailto:orallonbusiness@gmail.com"
                className="rounded-lg border border-[#DCEBE0] px-7 py-3.5 text-sm font-semibold text-[#0A1F17] transition hover:bg-[#EAF3EC]"
              >
                Send an Email
              </a>

            </div>

          </div>
        </Reveal>

      </section>

      {/* FOOTER */}

      <footer className="bg-[#0A1F17] px-5 py-10 text-white sm:px-6 sm:py-12">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row">

            <div>

              <Image
                src="/brand/ORALLON_Horizontal_Logo_Tagline_Transparent.png"
                alt="ORALLON"
                width={190}
                height={65}
                className="h-auto w-44 brightness-0 invert"
              />

              <p className="mt-4 text-sm text-[#B7CFC3]">
                Beyond Possibilities.
              </p>

            </div>

            <div>

              <h3 className="font-bold">
                Explore
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-[#B7CFC3]">

                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>

                <Link href="/commerce" className="transition hover:text-white">
                  Commerce
                </Link>

                <Link href="/digital" className="transition hover:text-white">
                  Digital Solutions
                </Link>

                <Link href="/#contact" className="transition hover:text-white">
                  Contact
                </Link>

              </div>

            </div>

            <div>

              <h3 className="font-bold">
                Contact
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-[#B7CFC3]">

                <a
                  href="mailto:orallonbusiness@gmail.com"
                  className="transition hover:text-white"
                >
                  orallonbusiness@gmail.com
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  WhatsApp ↗
                </a>

              </div>

            </div>

          </div>

          <div className="pt-7 text-center text-xs text-[#B7CFC3]">
            © 2026 ORALLON. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}