import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Shema",
      slug: "shema",
      desc: "Beauty and makeup e-commerce site with a full product catalog, featured collections, and Supabase-backed data.",
      tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
      img: "/projects/shema.jpg",
      url: "https://github.com/EnmanuelSP23/shema",
    },
    {
      title: "DailySpending",
      slug: "dailyspending",
      desc: "Daily expense and earnings tracker with today/week/month totals, search, and records saved straight to a Google Sheet.",
      tags: ["Express", "JavaScript", "Google Sheets", "Netlify Functions"],
      img: "/projects/dailyspending.jpg",
      url: "https://github.com/EnmanuelSP23/DailySpending1",
    },
    {
      title: "Laundry 1.0",
      slug: "laundry",
      desc: "Laundry management app for scheduling dropoffs and pickups — auth, bookings, admin dashboard, and emailed tickets.",
      tags: ["Next.js", "TypeScript", "Neon Postgres", "Resend"],
      img: "/projects/laundry.jpg",
      url: "https://github.com/EnmanuelSP23/laundryproject",
    },
    {
      title: "Elly's Party Rentals",
      slug: "ellysparty",
      desc: "Client website for a party rental company — bilingual EN/ES, services catalog, pricing, contact form, and SEO.",
      tags: ["Next.js", "next-intl", "TypeScript", "Tailwind"],
      img: "/projects/ellysparty.jpg",
      url: "https://github.com/EnmanuelSP23/ellyspartyproject",
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 px-6 sm:px-12 max-w-6xl mx-auto scroll-mt-16">
      <div className="w-full space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Projects <span className="text-blue-600">I&apos;ve Worked On</span>
          </h2>
          <a
            href="https://github.com/EnmanuelSP23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
          >
            View all on GitHub →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all duration-200"
            >
              {/* Terminal Top Bar — matches Hero */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                </div>
                <span className="text-xs font-mono text-gray-500 truncate">
                  ~/projects/{p.slug}
                </span>
                <div className="w-12" />
              </div>

              {/* Terminal Body */}
              <div className="flex flex-col flex-1 p-5 font-mono text-xs sm:text-sm text-gray-700 gap-3 leading-relaxed">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">sysadmin@node-01:~$</span>
                  <span className="text-gray-900">open {p.slug}.png</span>
                </div>

                <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                  <Image
                    src={p.img}
                    alt={`${p.title} project screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <span className="text-emerald-600">sysadmin@node-01:~$</span>
                  <span className="text-gray-900">cat {p.slug}.md</span>
                </div>

                <p className="text-xs text-gray-500">
                  <span className="text-gray-900 font-semibold"># {p.title}</span>
                  <br />
                  {p.desc}
                </p>

                <div className="p-3 rounded-lg bg-gray-100 border border-gray-200 text-xs text-gray-700">
                  <p>
                    <span className="text-cyan-700 font-semibold">stack:</span>{" "}
                    {p.tags.join(" / ")}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-1 mt-auto text-gray-500">
                  <span className="text-emerald-600">●</span>
                  <span className="truncate group-hover:text-blue-600 transition-colors">
                    source: {p.url.replace("https://", "")} →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
