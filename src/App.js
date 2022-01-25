import "./App.css";

function App() {
  return (
    <div className="h-full w-full flex-col bg-slate-800">
      <div>
        <nav className="flex w-full flex-col items-center bg-slate-900 p-6 drop-shadow-2xl md:flex-row md:items-center md:gap-5">
          <img className="animate-slowspin w-28" src="logo192.png" alt="logo" />
          <h1 className="font-customInterBold text-left text-3xl text-cyan-400">
            ReactFacts
          </h1>
          <div className="md:grow">
            <h1 className="text-3xl text-white md:text-right">
              React Course - Project 1
            </h1>
          </div>
        </nav>
        <div className="overflow-y-auto p-6">
          <h1 className="font-customInterBold text-4xl text-white">
            Fun Facts About React
          </h1>
          <ul className="list-disc p-6 text-xl text-white">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </div>
      </div>
      <footer className="relative bottom-0 w-full bg-slate-900 p-2 text-center text-white">
        Made with &#10084; Lloyd P Babu
      </footer>
    </div>
  );
}

export default App;
