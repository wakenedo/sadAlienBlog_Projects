import Avatar from 'components/System/AuthorAvatar'
import CoverImage from 'components/System/CoverImage'
import type { Project } from 'studio/lib/sanity.queries'
import ProjectPageCategory from './ProjectPageCategory'
import ProjectTitle from './ProjectTitle'
import ProjectDate from './ProjectDate'

export default function ProjectHeader(
  props: Pick<Project, 'title' | 'coverImage' | 'date' | 'author' | 'slug' | 'projectCategory'>
) {
  const { title, coverImage, date, author, slug, projectCategory } = props
  return (
    <>
      <ProjectTitle>{title}</ProjectTitle>
      <div className="hidden md:mb-2 md:block">
        <div className="flex justify-between">
          {author && <Avatar name={author.name} picture={author.picture} />}
          {projectCategory && <ProjectPageCategory name={projectCategory.name} color={projectCategory.color} description={projectCategory.description} />}
        </div>
      </div>
      <div className="mb-6 text-lg font-light tracking-wide text-justify text-slate-800 uppercase">
        <ProjectDate dateString={date} />
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="mx- lg:max-w-2xl md:w-1 w-10" >
        <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
          {projectCategory && <ProjectPageCategory name={projectCategory.name} color={projectCategory.color} description={projectCategory.description} />}

        </div>

      </div>
    </>
  )
}
