export default function About() {
  return (
    <section id="about" className="min-h-[80vh] sm:min-h-screen flex items-center px-6 sm:px-12 max-w-4xl mx-auto scroll-mt-16">
      <div className="space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          About <span className="text-blue-600">Me</span>
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            IT professional with experience in system administration, cloud infrastructure, 
            and cybersecurity. I focus on building reliable, secure systems that keep 
            businesses running smoothly.
          </p>
          <p>
            Currently working with AWS, Azure, Docker, and Kubernetes — automating 
            deployments, monitoring infrastructure, and hardening networks.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {["Linux", "Windows Server", "AWS", "Azure", "Docker", "Kubernetes", "Python", "Bash", "Terraform", "Networking"].map((skill) => (
            <span key={skill} className="px-3 py-1.5 rounded-md bg-white border border-gray-200 text-gray-700 text-sm font-mono">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
