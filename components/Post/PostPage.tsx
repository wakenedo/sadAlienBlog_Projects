"use client"
import '../../styles/global.css'
import Container from 'components/Blog/BlogContainer'
//import BlogHeader from 'components/BlogHeader'
import Layout from 'components/Blog/BlogLayout'
import MoreStories from 'components/Post/MoreStories'
import PostBody from 'components/Post/PostBody'
import PostHeader from 'components/Post/PostHeader'
import PostTitle from 'components/Post/PostTitle'
import SectionSeparator from 'components/Separators/DefaultSectionSeparator'
import * as demo from 'studio/lib/demo.data'
import type { Post, PostPageProps } from 'studio/lib/sanity.queries'
import { notFound } from 'next/navigation'
import Header from 'components/Header'




export default function PostPage(props: PostPageProps) {
  const { preview, loading, data, settings } = props
  const { post = {} as Post, morePosts = [] } = data || {}
  const { title = demo.title } = settings || {}

  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <Layout preview={preview} loading={loading}>
      <Header />
      <Container>
        {preview && !post ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                category={post.category}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}
