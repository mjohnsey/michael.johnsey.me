const nav = [
  { name: "Home", href: "/" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mjohnsey",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "Github",
    href: "https://github.com/mjohnsey",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  { name: "Resume", href: "/resume", target: "_self", rel: "" },
  { name: "Posts", href: "/posts", target: "_self", rel: "" },
  { name: "Talks", href: "/talks", target: "_self", rel: "" },
];

export default function Header({
  title,
  className,
  currentPath,
  hideOnPrint = false,
}: {
  title: string;
  className?: string;
  currentPath: string;
  hideOnPrint?: boolean;
}) {
  return (
    <header
      class={`text-center mb-4 ${className} ${hideOnPrint ? "print:hidden" : ""
        }`}
    >
      <h1 class="text-4xl font-bold mt-4">{title}</h1>
      <nav>
        <ul class="flex justify-center space-x-4 mt-2">
          {nav.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                class={`hover:underline ${currentPath === item.href ? "font-bold" : ""
                  }`}
                target={item.target}
                rel={item.rel}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
