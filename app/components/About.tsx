export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-6 sm:px-12 max-w-4xl mx-auto scroll-mt-16">
      <div className="space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          About <span className="text-blue-600">Me</span>
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            I began my career when I was 15 years old by helping 
            friends and neighbors with small IT problems. I transitioned 
            from repairing pc and configuring systems to work at a lawyer 
            firm typing documents on a pc. Even though I did not have the
             opportunity to work doing my passion which is cyber security, 
             I learned a lot of security procedures in my past two jobs. I 
             am looking forward to becoming a Cybersecurity Engineer where 
             I can help companies to protect their systems and data. I am
              preparing myself by taking IT classes that are going to help 
              me to achieve my goal. I am currently taking the IT special 
              training certification (CompTIA A+) that is going to open 
              the upcoming doors to the next certifications such as CompTIA 
              Network+ and Security+. Finally, I will continue preparing and putting
               the effort to become a Cybersecurity Engineer, and therefore 
               start making an impact in companies. 

          </p>
          <p>
            Currently working with HTML, Javascript, CSS, Python, Cybersecurity, Systems troubleshooting & Computer fixes.   
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
