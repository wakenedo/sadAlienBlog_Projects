import type { Post } from 'studio/lib/sanity.queries'
import BlogPostPreview from './BlogPostPreview'


export default function BlogMoreStories({ posts }: { posts: Post[] }) {
  return (
    <section>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <BlogPostPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            category={post.category}
          />
        ))}
      </div>
    </section>
  )
}
