export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-24 sm:pt-28 pb-16 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col justify-center items-center">
      {/* Background Decorative Glows */}
      <div className="hidden sm:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="hidden sm:block absolute top-1/3 right-10 w-[350px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center w-full">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-600/30 bg-blue-600/10 text-blue-700 text-xs sm:text-sm font-medium tracking-wide">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Information Technology Specialist • Cloud & Infrastructure
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-gray-900">
            Building Scalable <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              IT Systems & Secure Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Welcome to my IT portfolio. I specialize in programming, system administration, cyber security, troubleshooting, and IT operations management. Empowering businesses through reliable technology and automated workflows.
          </p>

          {/* Core Competency Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Cloud Computing (AWS/Azure)",
              "System Administration",
              "DevOps & Automation",
              "Cybersecurity",
              "Network Architecture",
              "IT Support & ITSM",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-md bg-white border border-gray-200 text-gray-700 text-xs font-mono"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/25 transition-all duration-200"
            >
              <span>Explore Projects</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-semibold transition-all duration-200"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Key Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200 w-full max-w-lg text-left">
            <div>
              <p className="text-2xl font-bold text-gray-900 font-mono">99.9%</p>
              <p className="text-xs text-gray-500">Target Uptime</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 font-mono">24/7</p>
              <p className="text-xs text-gray-500">System Monitoring</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 font-mono">Zero</p>
              <p className="text-xs text-gray-500">Trust Security Focus</p>
            </div>
          </div>
        </div>

        {/* Right Interactive / Interactive IT Terminal Component */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-2xl bg-white border border-gray-200 shadow-xl overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
              </div>
              <span className="text-xs font-mono text-gray-500">it-sysadmin@cloud-node-01:~</span>
              <div className="w-12" />
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs sm:text-sm text-gray-700 space-y-3 leading-relaxed">
              <div className="text-gray-400">
                # IT Infrastructure & System Status Monitor
              </div>

              <div className="flex items-center gap-2">
                <span className="text-emerald-600">sysadmin@node-01:~$</span>
                <span className="text-gray-900">systemctl status it-services</span>
              </div>

              <div className="pl-4 space-y-1.5 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span>
                  <span>Cloud Services (AWS / Azure): <strong className="text-emerald-600">ACTIVE</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span>
                  <span>Network Security Firewall: <strong className="text-emerald-600">SECURE</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span>
                  <span>Docker & K8s Containers: <strong className="text-emerald-600">RUNNING</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">●</span>
                  <span>Automated Backup Pipeline: <strong className="text-emerald-600">SYNCED</strong></span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <span className="text-emerald-600">sysadmin@node-01:~$</span>
                <span className="text-gray-900">neofetch --tech-stack</span>
              </div>

              <div className="p-3 rounded-lg bg-gray-100 border border-gray-200 text-xs text-gray-700 space-y-1">
                <p><span className="text-cyan-700 font-semibold">OS:</span> Linux (Ubuntu / RHEL) & Windows Server</p>
                <p><span className="text-cyan-700 font-semibold">Cloud:</span> AWS, Azure, Google Cloud</p>
                <p><span className="text-cyan-700 font-semibold">Virtualization:</span> VMware, Docker, Kubernetes</p>
                <p><span className="text-cyan-700 font-semibold">Networking:</span> Cisco CCNA, TCP/IP, VPN, DNS, VLANs</p>
                <p><span className="text-cyan-700 font-semibold">Scripting:</span> Bash, Python, PowerShell, TypeScript</p>
              </div>

              <div className="flex items-center gap-2 pt-1 text-gray-500">
                <span className="text-emerald-600">sysadmin@node-01:~$</span>
                <span className="animate-pulse bg-gray-800 text-white px-1.5 py-0.5 rounded font-bold">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}