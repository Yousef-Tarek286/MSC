export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm p-4 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold text-blue-900 mb-4 md:mb-0">
          ∑ CS & Math Society
        </div>
        <ul className="flex space-x-6 text-gray-600 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Home</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Events</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">About</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Contact</li>
        </ul>
      </div>
    </nav>
  );
}