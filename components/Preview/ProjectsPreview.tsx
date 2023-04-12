import type { Project } from 'studio/lib/sanity.queries'
import Link from 'next/link'
import ProjectDate from '../ActiveProjectPage/ProjectDate'
import 'components/Blog/BlogPostPreviewText.module.css'
import ProjectsPageCategory from '../ProjectsPage/ProjectsPageCategory'
import ProjectsPageCoverImages from '../ProjectsPage/ProjectsPageCoverImages'




export default function ProjectsPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  projectCategory,
}: Omit<Project, '_id'>) {


  return (
    <div className="lg:flex md:flex mb-10 pb-[0.01rem]  bg-[#94a3b8] shadow-sm">
      <div className="lg:w-[36rem] md:w-[136.55rem] w-[fit] ml-3 md:ml-0 lg:ml-0">
        <div className="flex-col">
          <div className="flex">
            <>
              <ProjectsPageCoverImages
                slug={slug}
                title={title}
                image={coverImage}
                priority={false}
              />
            </>

            <div className=" lg:mt-[17.825rem] lg:ml-[22rem] md:mt-[16.25rem] md:ml-[18.95rem] -ml-[1.05rem] mt-[40.325rem] flex flex-wrap absolute rounded ">
              {projectCategory && <ProjectsPageCategory name={projectCategory.name} description={projectCategory.description} color={projectCategory.color} />}
            </div>
          </div>

        </div>
      </div>
      <div className="flex-col lg:max-w-4xl ">
        <div className="lg:flex  justify-between lg:min-w-[660px] items-center mb-3 mt-1 lg:px-2 lg:pt-2">
          <div className="bg-[#FDFFA6] shadow-sm lg:py-[0.25rem] mx-[0.15rem]">
            <span className="lg:text-[1rem] md:text-sm text-base font-semibold tracking-tighter uppercase text-sky-900 lg:py-[0.25rem] lg:px-[0.15rem] lg:pr-[0.1rem]">
              <Link href={`/project/${slug}`} className=" lg:py-1 md:px-[1rem] lg:px-[0.6rem] px-[0.8rem] md:text-center hover:text-[#FDFFA6] hover:bg-[#6590FF] relative">
                {title}
              </Link>
            </span>
          </div>
          <div className="text-xs text-center m-0.5 font-normal tracking-tight italic lg:text-justify text-sky-900 bg-[#FDFFA6] p-2 shadow-sm">
            <ProjectDate dateString={date} />
          </div>
        </div>
        <div className="overflow-visible text-ellipsis mx-[0.15rem] bg-[#6590FF] bg-opacity-60 backdrop-blur-lg h-auto lg:min-h-[215px] lg:m-2 shadow-lg">
          {excerpt && <p className="mb-8 px-4 py-0.5 lg:text-sm text-xs leading-relaxed font-normal tracking-wide text-justify text-[#FDFFA6] ">{excerpt}</p>}
        </div>


      </div>
      {/*<div className="flex justify-between">
        {author && <BlogAuthorAvatar name={author.name} picture={author.picture} />}
      </div>*/}
    </div>
  )
}