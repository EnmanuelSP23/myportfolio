export default function Projects() {
  const projects = [
    {
      title: "Cloud Migration Toolkit",
      desc: "Automated migration scripts for AWS/Azure workloads with zero-downtime cutover planning.",
      tags: ["AWS", "Terraform", "Python"],
    },
    {
      title: "Infra Monitor Dashboard",
      desc: "Real-time system monitoring with alerting, logging, and incident response automation.",
      tags: ["Grafana", "Prometheus", "Docker"],
    },
    {
      title: "Secure Network Architecture",
      desc: "VLAN segmentation, firewall rules, VPN tunnels, and intrusion detection for a multi-site network.",
      tags: ["Cisco", "pfSense", "Wireshark"],
    },
  ];

  return (
    <section id="projects" className="min-h-[80vh] sm:min-h-screen flex items-center px-6 sm:px-12 max-w-6xl mx-auto scroll-mt-16">
      <div className="w-full space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Projects <span className="text-blue-600">I&apos;ve Worked On</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="p-6 rounded-2xl bg-white border border-gray-200 space-y-4 hover:border-gray-300 shadow-sm transition-colors">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-blue-600/10 text-blue-700 border border-blue-600/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
