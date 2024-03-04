interface AgreementProps {
  info: string;
  link: string;
  href?: string;
}

export default function Agreement({ info, link, href = "#" }: AgreementProps) {
  return (
    <div className="flex items-start gap-2">
      <input
        className="w-8 aspect-square cursor-pointer"
        style={{ accentColor: "black" }}
        type="checkbox"
        required
      />
      <p>
        {info}{" "}
        <a className="underline" href={href}>
          {link}
        </a>
      </p>
    </div>
  );
}
