import React from "react";

export default function Home() {
  return (
    <main className="[background:linear-gradient(135deg,#fecdd3_50%,#172554_50%)] grid place-items-center min-h-screen transition-colors">
      <div className="relative bg-white grid justify-items-center gap-16 p-8 rounded-lg">
        <button className="absolute top-6 right-8 hover:text-gray-400">
          <span className="material-symbols-outlined">More_Horiz</span>
        </button>
        <div className="flex flex-wrap justify-self-start gap-6">
          <img
            className="w-24 h-24 object-contain p-5 border border-gray-100 rounded-full"
            src="https://i.imgur.com/2A8Unen.png"
            alt="owl"
          />
          <div className="grid pr-12">
            <h2 className="text-xl font-medium">Product Designer at Wisely</h2>
            <div className="flex gap-1 text-gray-500">
              <span className="material-symbols-outlined -ml-1">
                Location_On
              </span>
              <span>Austin, TX or Remote</span>
            </div>
            <div className="flex gap-2 pt-6">
              <button className="w-28 py-1 border border-black rounded hover:bg-blue-950 hover:text-white hover:boredr-none">
                Save
              </button>
              <button className="text-white w-28 py-1 bg-blue-950 rounded hover:border hover:border-black hover:bg-white hover:text-black">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex flex-wrap gap-12 p-6 border border-gray-100 rounded">
          <ul className="grid gap-1">
            <h3 className="text-gray-600">JOB</h3>
            <li>• 7/9 skills match</li>
            <li>• 32 applicants</li>
          </ul>
          <ul className="grid gap-1">
            <h3 className="text-gray-600">COMPANY</h3>
            <li>• 51 - 200 employees</li>
            <li>• Computer software</li>
          </ul>
          <ul className="grid gap- w-36">
            <h3 className="text-gray-600">CONNECTIONS</h3>
            <li className="text-gray-400">
              You dont have connections working at Wisely
            </li>
          </ul>
        </div>
        <a className="hover:underline" href="#">
          View Job Post
        </a>
      </div>
    </main>
  );
}
