import type { ProjectCategory } from 'studio/lib/sanity.queries'


export default function ProjectPageCategory(props: ProjectCategory) {
  const { name, description } = props
  return (
    <div className="flex items-center ">
      <div className="text-base uppercase tracking-wide font-semibold mx-2 mb-1 px-2 border-sky-400 border-2 bg-sky-400  text-white">{name}</div>
    </div>
  )
}