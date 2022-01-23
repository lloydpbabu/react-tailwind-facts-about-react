import "./App.css";

function App() {
  return (
    <div className="bg-slate-800 h-full w-full flex-col">
      <div >
        <nav className="bg-slate-900 p-6 flex flex-col items-center md:flex-row md:items-center w-full md:gap-5 drop-shadow-2xl">
          <img className="w-28 animate-slowspin" src="logo192.png" alt="logo" />
          <h1 className="text-cyan-400 text-3xl text-left font-customInterBold">
            ReactFacts
          </h1>
          <div className="md:grow">
            <h1 className="text-white text-3xl md:text-right">
              React Course - Project 1
            </h1>
          </div>
        </nav>
        <div className="p-6 overflow-y-auto">
          <h1 className="text-white text-4xl font-customInterBold">
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
      <footer className="text-white bg-slate-900 text-center relative bottom-0 w-full p-2">
        Made with &#10084; Lloyd P Babu
      </footer>
    </div>
  );
}

export default App;
