import Link from "next/link";
import { CHALLENGE_LINKS } from "./consts";

export default function Home() {
  const challenges = CHALLENGE_LINKS;

  return (
    <main>
      <h1>Challenges</h1>
      {challenges.map((challenge) => {
        return (
          <Link href={"challenges/" + challenge.href}>
            <article>
              <h2>{challenge.title}</h2>
            </article>
          </Link>
        );
      })}
    </main>
  );
}
