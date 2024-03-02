import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Challenges</h1>
      <Link href="challenges/get-the-app-popup">
        <article>
          <h2>Get The App Popup</h2>
        </article>
      </Link>
    </main>
  );
}
