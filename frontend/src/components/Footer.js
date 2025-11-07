export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-10 border-t border-purple-800/30">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-purple-400 font-semibold">StatKick</span>. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-purple-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-purple-400 transition">Terms of Service</a>
          <a href="#" className="hover:text-purple-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
