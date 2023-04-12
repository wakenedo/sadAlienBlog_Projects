import Container from 'components/Blog/BlogContainer'
import BlogHeader from 'components/Blog/BlogHeader'
import Layout from 'components/Blog/BlogLayout'
import HeroPost from 'components/Hero/HeroPost'
import MoreStories from 'components/Post/MoreStories'
import * as demo from 'studio/lib/demo.data'
import type { IndexPageProps } from 'studio/lib/sanity.queries'



export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  console.log('HeroPost:', heroPost, posts,)


  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} description={description} level={1} />

          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>

      </Layout>
    </>
  )
}
