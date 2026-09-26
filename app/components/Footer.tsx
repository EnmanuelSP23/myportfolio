export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-6 sm:px-12 py-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Enmanuel Sanchez</p>
        <p className="font-mono text-xs">sysadmin@node-01:~$</p>
      </div>
    </footer>
  );
}
