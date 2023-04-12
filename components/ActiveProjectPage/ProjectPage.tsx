"use client"
import '../../styles/global.css'
//import BlogHeader from 'components/BlogHeader'
import * as demo from 'studio/lib/demo.data'
import type { Project, ProjectPageProps } from 'studio/lib/sanity.queries'
import { notFound } from 'next/navigation'
import Header from '../Header'
import ProjectHeader from './ProjectHeader'
import ProjectTitle from './ProjectTitle'
import ProjectContainer from './ProjectContainer'
import ProjectLayout from './ProjectLayout'
import ProjectBody from './ProjectBody'




export default function ProjectPage(props: ProjectPageProps) {
  const { preview, loading, data, settings } = props
  const { project = {} as Project } = data || {}
  const { title = demo.title } = settings || {}

  const slug = project?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <ProjectLayout preview={preview} loading={loading}>
      <Header />
      <ProjectContainer>
        {preview && !project ? (
          <ProjectTitle>Loading…</ProjectTitle>
        ) : (
          <>
            <article>
              <ProjectHeader
                title={project.title}
                coverImage={project.coverImage}
                date={project.date}
                author={project.author}
                projectCategory={project.projectCategory}
              />
              <ProjectBody content={project.content} />
            </article>
            {/*morePosts?.length > 0 && <MoreStories posts={morePosts} />*/}
          </>
        )}
      </ProjectContainer>
    </ProjectLayout>
  )
}