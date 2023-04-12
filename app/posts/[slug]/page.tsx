
import PostPage from 'components/Post/PostPage'
import PreviewPostPage from 'components/Preview/PreviewPostPage'
import { PreviewSuspense } from 'components/Preview/PreviewSuspense'
import {
  getAllPostsSlugs,
  getPostAndMoreStories,
  getSettings,
} from 'studio/lib/sanity.client'
import { previewData } from 'next/headers'
import type { ParamsProps } from 'studio/lib/sanity.queries'

export async function generateStaticParams() {
  return await getAllPostsSlugs()
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
    console.log('page.tsx Token:', token)
    const data = getPostAndMoreStories(params.slug, token)
    return (
      <PreviewSuspense
        fallback={
          <PostPage
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

  const data = getPostAndMoreStories(params.slug)
  //console.log('page.tsx Slug:', params.slug, 'page.tsx Data:', data, 'page.tsx Settings:', settings)
  return <PostPage data={await data} settings={await settings} />

}

