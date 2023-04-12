import PreviewPostPage from 'components/Preview/PreviewPostPage'
import { PreviewSuspense } from 'components/Preview/PreviewSuspense'
import {
  getAllPosts,
  getSettings,
} from 'studio/lib/sanity.client'
import { previewData } from 'next/headers'
import type { ParamsProps } from 'studio/lib/sanity.queries'
import BlogPage from 'components/Blog/BlogPage'

export async function generateStaticParams() {
  return await getAllPosts()
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
    const data = await getAllPosts()
    const allPosts = data.map(post => post)
    return (
      <PreviewSuspense
        fallback={
          <BlogPage
            loading
            preview
            data={allPosts}
            settings={await settings}
          />
        }
      >
        <PreviewPostPage token={token} slug={params.slug} />
      </PreviewSuspense>
    )
  }

  const data = await getAllPosts()
  const allPosts = data.map(post => post)

  return <BlogPage data={allPosts} settings={await settings} />
}
