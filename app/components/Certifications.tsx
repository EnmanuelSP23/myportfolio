const certs = [
  { name: "CompTIA Tech+", status: "certified" },
  { name: "CertNexus CyberSafe", status: "certified" },
  { name: "Customer Service Foundations", status: "certified" },
  { name: "Customer Service: Problem-Solving and Troubleshooting", status: "certified" },
  { name: "IT Service Desk: Customer Service Fundamentals", status: "certified" },
  { name: "CompTIA A+", status: "in progress" },
];

export default function Certifications() {
  return (
    <div id="certifications" className="scroll-mt-24 rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
      {/* Terminal Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
        </div>
        <span className="text-xs font-mono text-gray-500">sysadmin@node-01:~/certs</span>
        <div className="w-12" />
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-xs sm:text-sm text-gray-700 space-y-4 leading-relaxed">
        <div className="text-gray-400">
          # Certifications & Languages
        </div>

        <div className="flex items-center gap-2">
          <span className="text-emerald-600">sysadmin@node-01:~$</span>
          <span className="text-gray-900">ls ~/certifications</span>
        </div>

        <div className="grid grid-cols-1 gap-2">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="flex items-start gap-2 p-2.5 rounded-lg bg-gray-100 border border-gray-200"
            >
              <span className={cert.status === "certified" ? "text-emerald-600" : "text-yellow-500"}>
                ●
              </span>
              <span className="flex-1 text-gray-700 break-words">{cert.name}</span>
              <span
                className={`shrink-0 text-[10px] uppercase tracking-wide ${
                  cert.status === "certified" ? "text-emerald-700" : "text-yellow-600"
                }`}
              >
                {cert.status}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-1">
          <span className="text-emerald-600">sysadmin@node-01:~$</span>
          <span className="text-gray-900">cat ~/languages.txt</span>
        </div>

        <div className="p-3 rounded-lg bg-gray-100 border border-gray-200 text-xs text-gray-700 space-y-1">
          <p><span className="text-cyan-700 font-semibold">Spanish:</span> Native</p>
          <p><span className="text-cyan-700 font-semibold">English:</span> Advanced</p>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <span className="text-emerald-600">sysadmin@node-01:~$</span>
          <span className="animate-pulse bg-gray-800 text-white px-1.5 py-0.5 rounded font-bold">_</span>
        </div>
      </div>
    </div>
  );
}
