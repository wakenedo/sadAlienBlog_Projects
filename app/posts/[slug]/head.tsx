import BlogMeta from 'components/Blog/BlogMeta'
import * as demo from 'studio/lib/demo.data'
import { getPostBySlug, getSettings } from 'studio/lib/sanity.client'
import { urlForImage } from 'studio/lib/sanity.image'
import { ParamsProps } from 'studio/lib/sanity.queries'

export default async function SlugHead({
  params,
}: {
  params: ParamsProps
}) {
  const [{ title = demo.title }, post] = await Promise.all([
    getSettings(),
    getPostBySlug(params.slug),
  ])

  return (

    <>
      <title>{post.title ? `  BLog | ${post.title} ` : title}</title>
      <BlogMeta />
      {post.coverImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(post.coverImage)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )}
    </>
  )
}
