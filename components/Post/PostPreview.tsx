import Avatar from 'components/System/AuthorAvatar'
import Date from 'components/Post/PostDate'
import type { Post } from 'studio/lib/sanity.queries'
import Link from 'next/link'
import PostCategory from './PostCategory'
import PostCoverImage from './PostCoverImage'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category
}: Omit<Post, '_id'>) {

  return (
    <div>
      <div className="mb-5">
        <PostCoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl font-thin tracking-wide uppercase text-slate-800">
        <Link href={`/posts/${slug}`} className="hover:underline hover:text-emerald-800">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg font-light tracking-wide text-justify text-slate-800 uppercase">
        <Date dateString={date} />
      </div>
      <div className="overflow-hidden text-ellipsis whitespace-nowrap ">
        {excerpt && <p className="mb-4 text-lg leading-relaxed font-light tracking-wide text-justify text-slate-600 ">{excerpt}</p>}
      </div>
      <div className="flex justify-between">
        {author && <Avatar name={author.name} picture={author.picture} />}
        {category && <PostCategory name={category.name} description={category.description} />}
      </div>
    </div>
  )
}
