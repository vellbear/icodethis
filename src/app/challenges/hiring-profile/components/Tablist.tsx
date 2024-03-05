export default function Tablist() {
  return (
    <div className="border-t-2 w-full px-8">
      <nav>
        <ul className="text-gray-400 font-semibold flex w-full justify-between gap-4">
          <li className="w-20 text-center py-4">
            <button>About Me</button>
          </li>
          <li className="w-20 text-center py-4">
            <button>Skills</button>
          </li>
          <li className="w-20 text-center py-4">
            <button>Profile</button>
          </li>
        </ul>
      </nav>
      <div className="grid gap-2 pb-8">
        <div>
          <span className="text-cyan-600">Advertising</span>
          <div className="relative bg-sky-200 w-full h-4 rounded-full after:absolute after:bg-gradient-to-r after:from-blue-500 after:to-green-600 after:h-full after:w-2/3 after:rounded-full"></div>
        </div>
        <div>
          <span className="text-cyan-600">Wedding</span>
          <div className="relative bg-sky-200 w-full h-4 rounded-full after:absolute after:bg-gradient-to-r after:from-blue-500 after:to-green-600 after:h-full after:w-2/3 after:rounded-full"></div>
        </div>
        <div>
          <span className="text-cyan-600">Fashion</span>
          <div className="relative bg-sky-200 w-full h-4 rounded-full after:absolute after:bg-gradient-to-r after:from-blue-500 after:to-green-600 after:h-full after:w-2/3 after:rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
