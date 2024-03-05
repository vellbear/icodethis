import Agreement from "./components/Agreement";
import { PRIVACY_POLICY, RESEARCH_GROUP } from "./consts";

export default function Home() {
  return (
    <main className="bg-gray-200 grid place-content-center p-4 min-h-screen">
      <form
        className="relative bg-white grid gap-4 p-20 max-w-[540px] after:absolute after:pointer-events-none after:h-full after:w-full after:top-1 after:left-1 after:border-r-8 after:border-black after:border-b-8 after:ml-1 after:mt-1"
        action=""
      >
        <h1 className="font-bold font-serif text-3xl">Give feedback</h1>
        <p className="max-w-[300px]">
          Your thoughts are valuable in helping improve our products.
        </p>
        <textarea
          className="border border-gray-500 p-2"
          name="message"
          id="message"
          cols="36"
          rows="4"
          placeholder="Let us know what's on your mind"
          required
        ></textarea>
        <div className="grid gap-4 py-2">
          <Agreement info={PRIVACY_POLICY.info} link={PRIVACY_POLICY.link} />
          <Agreement info={RESEARCH_GROUP.info} link={RESEARCH_GROUP.link} />
        </div>
        <button
          className="bg-black text-white font-medium text-sm py-4"
          type="submit"
        >
          Send Feedback
        </button>
      </form>
    </main>
  );
}
