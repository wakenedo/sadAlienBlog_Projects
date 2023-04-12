import type { Project } from 'studio/lib/sanity.queries'
import ProjectsPreview from './Preview/ProjectsPreview'


export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section>
      <div className="mb-32 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {projects.map((project) => (
          <ProjectsPreview
            key={project._id}
            title={project.title}
            coverImage={project.coverImage}
            date={project.date}
            author={project.author}
            slug={project.slug}
            excerpt={project.excerpt}
            projectCategory={project.projectCategory}
            projectCategory2={project.projectCategory2}
          />
        ))}
      </div>
    </section>
  )
}