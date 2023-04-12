import { PreviewSuspense } from 'components/Preview/PreviewSuspense'
import {
  getAllProjects,
  getSettings,
} from 'studio/lib/sanity.client'
import { previewData } from 'next/headers'
import type { ParamsProps } from 'studio/lib/sanity.queries'
import ProjectsPage from 'components/ProjectsPage/ProjectsPage'
import PreviewProjectPage from 'components/Preview/PreviewProjectPage'

export async function generateStaticParams() {
  return await getAllProjects()
}

export default async function SlugRoute({
  params,
}: {
  params: ParamsProps
}) {
  // Start fetching settings early, so it runs in parallel with the post query
  const settings = getSettings()


  if (previewData()) {

    const token = previewData().token || null
    const data = await getAllProjects()
    const allProjects = data.map(project => project)
    return (
      <>
        <PreviewSuspense
          fallback={
            <ProjectsPage
              loading
              preview
              data={allProjects}
              settings={await settings}
            />
          }
        >
          <PreviewProjectPage token={token} slug={params.slug} />
        </PreviewSuspense>
      </>
    )
  }

  const data = await getAllProjects()
  const allProjects = data.map(project => project)

  return (
    <>
      <ProjectsPage data={allProjects} settings={await settings} />
    </>
  )
}