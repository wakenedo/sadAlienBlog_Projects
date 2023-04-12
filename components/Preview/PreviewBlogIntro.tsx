"use client"

import { usePreview } from 'studio/lib/sanity.preview'
import {
  type Post,
  type Settings,
  postAndMoreStoriesQuery,
  settingsQuery,
} from 'studio/lib/sanity.queries'
import BlogPage from 'components/Blog/BlogPage'

export default function PreviewBlogPage({
  token,
  slug,
}: {
  token: null | string
  slug: string
}) {
  const data: Post[] = usePreview(
    token,
    postAndMoreStoriesQuery,
    {
      slug,
    }
  ) || { post: null, morePosts: [] }
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <BlogPage loading preview data={data} settings={settings} />
}