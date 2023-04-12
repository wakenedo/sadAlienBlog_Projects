import Date from 'components/Post/PostDate'
import type { Post } from 'studio/lib/sanity.queries'
import Link from 'next/link'
import BlogAuthorAvatar from './BlogAuthorAvatar'
import BlogCoverImages from './BlogCoverImages'
import BlogPostCategory from './BlogPostCategory'
import './BlogPostPreviewText.module.css'

export default function BlogPostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category
}: Omit<Post, '_id'>) {

  return (
    <div className="bg-[#FDFFA6] h-fit min-h-[10rem]">
      <div className="mb-5">
        <BlogCoverImages
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <p className="mb-3 text-lg font-semibold tracking-wide uppercase text-slate-800 px-2">
        <Link href={`/posts/${slug}`} className=" hover:text-[#6590FF]">
          {title}
        </Link>
      </p>
      <div className="mb-4 text-base font-light tracking-wide text-justify text-slate-800 uppercase px-2">
        <Date dateString={date} />
      </div>
      <div className=" text-ellipsis  p-2 bg-[#6590FF] m-1 shadow ">
        {/* Only displaying one line, I want to display at least 3 lines with '...' at the end */}
        {excerpt && <p className="mb-1 text-xs leading-relaxed font-light tracking-wide text-justify text-[#FDFFA6] ">{excerpt}</p>}
      </div>
      <div className="flex justify-between">
        {author && <BlogAuthorAvatar name={author.name} picture={author.picture} />}
        {category && <BlogPostCategory name={category.name} description={category.description} />}
      </div>
    </div>
  )
}