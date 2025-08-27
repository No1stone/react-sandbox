export default function Dashboard() {
    const cards = [
      { title: "Todo", href: "/apps/todo", desc: "간단 CRUD" },
      { title: "Github Search", href: "/apps/github", desc: "API 검색" },
      { title: "Charts", href: "/apps/charts", desc: "KPI/시각화" },
      { title: "Upload", href: "/apps/upload", desc: "파일 업로드" },
    ];
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
          {cards.map((c) => (
            <a key={c.title} href={c.href}
               className="rounded border border-neutral-800 p-4 hover:bg-neutral-900 block">
              <div className="text-lg font-semibold">{c.title}</div>
              <div className="text-neutral-400 text-sm">{c.desc}</div>
            </a>
          ))}
        </div>
      </div>
    );
  }
  