import PreviewPostPage from 'components/Preview/PreviewPostPage'
import { PreviewSuspense } from 'components/Preview/PreviewSuspense'
import {
  getAllProjectsSlugs,
  getProjectAndMoreStories,
  getSettings,
} from 'studio/lib/sanity.client'
import { previewData } from 'next/headers'
import type { ParamsProps } from 'studio/lib/sanity.queries'
import ProjectPage from 'components/ActiveProjectPage/ProjectPage'

export async function generateStaticParams() {
  return await getAllProjectsSlugs()
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

    const data = getProjectAndMoreStories(params.slug, token)
    return (
      <PreviewSuspense
        fallback={
          <ProjectPage
            loading
            preview
            data={await data}
            settings={await settings}
          />
        }
      >
        <PreviewPostPage token={token} slug={params.slug} />
      </PreviewSuspense>
    )
  }

  const data = getProjectAndMoreStories(params.slug)
  //console.log('page.tsx Slug:', params.slug, 'page.tsx Data:', data, 'page.tsx Settings:', settings)
  return <ProjectPage data={await data} settings={await settings} />

}

