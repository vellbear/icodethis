interface OptionsProps {
  icon?: string;
  name?: string;
  href?: string;
}

export default function Options({
  icon = "Error",
  name = "Error",
  href = "#",
}: OptionsProps) {
  return (
    <a
      href={href}
      className="grid gap-4 place-items-center w-40 aspect-square rounded outline outline-[16px] outline-slate-200 hover:text-blue-500"
    >
      <span className="material-symbols-outlined text-5xl self-end">
        {icon}
      </span>
      <p className="text-xl font-normal self-start">{name}</p>
    </a>
  );
}
