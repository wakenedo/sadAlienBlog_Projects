"use client"
import '../../styles/global.css'
import Container from 'components/Blog/BlogContainer'
import Layout from 'components/Blog/BlogLayout'
import type { BlogPageProps } from 'studio/lib/sanity.queries'
import Header from 'components/Header'
import BlogTitle from './BlogTitle'
import BlogBody from './BlogBody'
import BlogMeta from './BlogMeta'
import { Footer } from 'components/Footer'
import BlogMoreStories from './BlogMoreStories'




export default function BlogPage(props: BlogPageProps) {
  const { preview, loading, data } = props

  //console.log('BlogPage data:', data)
  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Header />
        <BlogMeta />
        <Container>
          {preview && !data ? (
            <BlogTitle> Loading... </BlogTitle>
          ) : (
            <>

              <BlogTitle> Blog </BlogTitle>
              <BlogBody>
                {data?.length > 0 && <BlogMoreStories posts={data} />}
              </BlogBody>
            </>
          )}
        </Container>

      </Layout>
    </>
  )
}
