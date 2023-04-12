import type { ProjectCategory } from 'studio/lib/sanity.queries'


export default function ProjectsPageCategory(props: ProjectCategory) {
  const { name, description, color } = props

  return (
    <div className="flex items-center ">
      <div className="flex-col hover:visible">
        <div className="w-[200px] px-4 py-[7.15rem] hidden  " >
          <div className={`text-xs rounded tracking-tighter font-light ${`bg-[${color}]`} absolute block text-justify  px-5 py-2 `}>{description}</div>
        </div>
        <div className="text-base rounded tracking-wide font-semibold mx-2 mb-1 px-2 border-[#FDFFA6] border-2 bg-[#6590FF] shadow w-fit cursor-pointer text-[#FDFFA6]">{name}</div>
      </div>
    </div>
  )
}