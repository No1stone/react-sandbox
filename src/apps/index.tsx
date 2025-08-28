// src/apps/index.ts
export type MiniApp = {
    slug: string
    title: string
    path: string
  }
  
  const apps: MiniApp[] = [
    { slug: 'todo', title: 'Todo', path: '/apps/todo' },
    { slug: 'todo2', title: 'Todo2', path: '/apps/todo2' },
  ]
  
  export default apps as const
  