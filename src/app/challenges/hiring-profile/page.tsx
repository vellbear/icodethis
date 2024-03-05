import Tablist from "./components/Tablist";

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-blue-500 to-cyan-400 grid place-content-center min-h-screen">
      <div className="bg-white grid justify-center max-w-[375px] shadow-2xl">
        <div className="grid justify-items-center">
          {/* Background Image */}
          <img
            className="h-48 w-full object-cover col-start-1 row-start-1"
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background-image"
          ></img>
          <div className="grid gap-4 text-center w-full px-8 col-start-1 row-start-1 z-10">
            <nav className="text-white flex justify-between">
              <a href="#">
                <span className="material-symbols-outlined text-4xl">
                  Keyboard_Backspace
                </span>
              </a>
              <button type="button">
                <span className="material-symbols-outlined text-4xl">Star</span>
              </button>
            </nav>
            <h1 className="text-white text-3xl font-medium">John B. Elliot</h1>
            <img
              className="h-36 aspect-square object-cover justify-self-center border-[6px] border-sky-300 rounded-full"
              src="https://images.unsplash.com/photo-1709519489417-bc971a17cdab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="avatar"
            />
            <p className="text-blue-950 pb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto placeat natus, ratione voluptatibus tempora, magni nemo
              laborum.
            </p>
          </div>
        </div>
        <Tablist />
        <button className="font-semibold text-white text-2xl bg-sky-400 py-6">
          HIRE ME
        </button>
      </div>
    </main>
  );
}
