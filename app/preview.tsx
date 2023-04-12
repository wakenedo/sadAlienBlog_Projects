import IndexPage from 'components/IndexPage'
import PreviewIndexPage from 'components/Preview/PreviewIndexPage'
import { PreviewSuspense } from 'components/Preview/PreviewSuspense'
import { getAllPosts, getSettings } from 'studio/lib/sanity.client'
import { previewData } from 'next/headers'

export default async function IndexRoute() {
  // Fetch queries in parallel
  const [settings, posts] = await Promise.all([getSettings(), getAllPosts()])

  if (previewData()) {
    const token = previewData().token || null


    return (
      <PreviewSuspense
        fallback={
          <IndexPage loading preview posts={posts} settings={settings} />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return <IndexPage posts={posts} settings={settings} />
}

