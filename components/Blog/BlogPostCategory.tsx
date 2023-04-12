import type { Category } from 'studio/lib/sanity.queries'


export default function BlogPostCategory(props: Category) {
  const { name, description } = props
  return (
    <div className="flex items-center ">
      <div className="text-base uppercase tracking-wide font-semibold ml-2 p-1 border-emerald-300 border-2 bg-emerald-300  text-slate-600">{name}</div>
    </div>
  )
}