export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">LaunchDarkly</div>
        <div className="space-x-4 hidden md:flex">
          <a href="#" className="hover:text-blue-400 transition duration-300">Home</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">About</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow px-4 py-16 max-w-7xl mx-auto sm:text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Tailwind CSS</h1>
        <p className="text-lg mb-6">
          This is a responsive layout created using Tailwind CSS utility classes in a React + Vite project.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Click Me
        </button>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-gray-200 text-center text-sm py-2">
        © 2025 LaunchDarkly. All rights reserved.
      </footer>
    </div>
  );
}
