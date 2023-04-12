import ProjectsPageMeta from 'components/ProjectsPage/ProjectsPageMeta'
import * as demo from 'studio/lib/demo.data'
import { getProjectBySlug, getSettings } from 'studio/lib/sanity.client'
import { urlForImage } from 'studio/lib/sanity.image'
import { ParamsProps } from 'studio/lib/sanity.queries'

export default async function SlugHead({
  params,
}: {
  params: ParamsProps
}) {
  const [{ title = demo.title }, post] = await Promise.all([
    getSettings(),
    getProjectBySlug(params.slug),
  ])

  return (

    <>
      <title>{post.title ? ` Projects | ${post.title}  ` : title}</title>
      <ProjectsPageMeta />
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
