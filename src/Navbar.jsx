export default function Navbar() {
  return (
    <header className="w-full bg-white shadow px-8 py-4 flex rounded-xl justify-between items-center">
      <h1 className="text-xl font-bold text-blue-900">Fact Checker AI</h1>
      <nav className="space-x-8 font-medium text-gray-600">
        <a href="#home" className="hover:text-blue-600">Home</a>
        <a href="#check" className="hover:text-blue-600">Check</a>
        <a href="#about" className="hover:text-blue-600">About</a>
      </nav>
    </header>
  );
}

