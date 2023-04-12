"use client"
import '../../styles/global.css'
import type { ProjectsPageProps } from 'studio/lib/sanity.queries'
import Header from '../Header'
import Projects from '../Projects'
import ProjectsPageTitle from './ProjectsPageTitle'
import ProjectsPageBody from './ProjectsPageBody'
import ProjectsPageMeta from './ProjectsPageMeta'
import ProjectsPageContainer from './ProjectsPageContainer'
import ProjectsPageLayout from './ProjectsPageLayout'




export default function ProjectsPage(props: ProjectsPageProps) {
  const { preview, loading, data } = props

  console.log('ProjectsPage data:', data)
  return (
    <>
      <ProjectsPageLayout preview={preview} loading={loading}>
        <Header />
        <ProjectsPageMeta />
        <ProjectsPageContainer>
          {preview && !data ? (
            <ProjectsPageTitle> Loading... </ProjectsPageTitle>
          ) : (
            <>
              <ProjectsPageTitle> Projects Page </ProjectsPageTitle>
              <ProjectsPageBody>
                {data?.length > 0 && <Projects projects={data} />}
              </ProjectsPageBody>
            </>
          )}
        </ProjectsPageContainer>

      </ProjectsPageLayout>
    </>
  )
}