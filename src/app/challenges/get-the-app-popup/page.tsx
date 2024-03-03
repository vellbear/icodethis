import Options from "./components/Options";

export default function Home() {
  return (
    <main className="bg-slate-200 grid place-items-center px-4 min-h-screen">
      <div className="relative bg-white font-light grid gap-12 justify-center text-center max-w-[900px] p-24 rounded-xl shadow-2xl shadow-slate-300">
        <button className="absolute right-8 top-8">
          <span className="material-symbols-outlined text-5xl text-slate-400 hover:text-red-500">
            Close
          </span>
        </button>
        <h1 className="text-5xl">Get the app</h1>
        <p className="text-3xl max-w-[650px]">
          Choose any of the following options to get the app for your device.
        </p>
        <div className="flex flex-wrap gap-16 justify-center pt-12">
          <Options icon="Smartphone" name="Phone" />
          <Options icon="QR_Code" name="QR Code" />
          <Options icon="Link" name="Link" />
        </div>
      </div>
    </main>
  );
}
