import { useState } from "react";
import { auth } from "@/lib/auth";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await auth.login(id, pw);
      location.href = "/dashboard";
    } catch {
      setErr("로그인 실패");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-neutral-950">
      <form
        onSubmit={onSubmit}
        className="w-[320px] space-y-3 border border-neutral-800 rounded-2xl p-6 shadow-lg bg-neutral-900"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">로그인</h1>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디"
          className="w-full rounded px-3 py-2 bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="비밀번호"
          className="w-full rounded px-3 py-2 bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        {err && <p className="text-red-400 text-sm">{err}</p>}
        <button
          className="w-full rounded px-3 py-2 bg-blue-600 hover:bg-blue-500 transition"
        >
          로그인
        </button>
      </form>
    </div>
  );
}
