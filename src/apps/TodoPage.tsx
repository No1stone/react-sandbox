import { useEffect, useState } from "react";
import { http } from "@/lib/http";

type Item = { id: number; title: string };

export default function TodoPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  async function fetchItems() {
    try {
      setLoading(true);
      const { data } = await http.get<Item[]>("/items");
      setItems(data);
      setErr("");
    } catch (e: any) {
      setErr("목록을 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  }

  async function addItem(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      const { data } = await http.post<Item>("/items", { title });
      setItems((prev) => [data, ...prev]);
      setTitle("");
    } catch {
      setErr("등록 실패");
    }
  }

  async function remove(id: number) {
    try {
      await http.delete(`/items/${id}`);
      setItems((prev) => prev.filter((i) => i.id !== id));
    } catch {
      setErr("삭제 실패");
    }
  }

  useEffect(() => { fetchItems(); }, []);

  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Todo</h1>

      <form onSubmit={addItem} className="flex gap-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="할 일을 입력하세요"
          className="flex-1 rounded px-3 py-2 bg-neutral-900 border border-neutral-800"
        />
        <button className="rounded px-3 py-2 bg-blue-600 hover:opacity-90">추가</button>
      </form>

      {err && <p className="text-red-400 mb-3">{err}</p>}

      {loading ? (
        <div className="space-y-2">
          <div className="h-10 rounded bg-neutral-900 animate-pulse" />
          <div className="h-10 rounded bg-neutral-900 animate-pulse" />
          <div className="h-10 rounded bg-neutral-900 animate-pulse" />
        </div>
      ) : items.length === 0 ? (
        <p className="text-neutral-400">아직 할 일이 없어요. 위에서 추가해보세요.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((i) => (
            <li key={i.id} className="flex items-center justify-between rounded border border-neutral-800 px-3 py-2">
              <span>{i.title}</span>
              <button onClick={() => remove(i.id)} className="text-sm rounded px-2 py-1 bg-neutral-800 hover:bg-neutral-700">
                삭제
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
