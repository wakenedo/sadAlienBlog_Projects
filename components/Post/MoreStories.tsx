import PostPreview from 'components/Post/PostPreview'
import type { Post } from 'studio/lib/sanity.queries'


export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section>
      <h2 className="mb-8 text-5xl font-thin tracking-wide uppercase text-slate-600">
        More Stories
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
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
