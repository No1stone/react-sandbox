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
    } catch (e) {
      setErr("로그인 실패");
    }
  };

  return (
    <div className="min-h-screen grid place-items-center">
      <form onSubmit={onSubmit} className="w-[320px] space-y-3 border border-neutral-800 rounded p-4">
        <h1 className="text-2xl font-bold mb-2">Login</h1>
        <input value={id} onChange={(e)=>setId(e.target.value)} placeholder="아이디"
               className="w-full rounded px-3 py-2 bg-neutral-900 border border-neutral-800" />
        <input type="password" value={pw} onChange={(e)=>setPw(e.target.value)} placeholder="비밀번호"
               className="w-full rounded px-3 py-2 bg-neutral-900 border border-neutral-800" />
        {err && <p className="text-red-400 text-sm">{err}</p>}
        <button className="w-full rounded px-3 py-2 bg-blue-600 hover:opacity-90">로그인</button>
      </form>
    </div>
  );
}
