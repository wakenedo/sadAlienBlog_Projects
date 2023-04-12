import Avatar from 'components/System/AuthorAvatar'
import type { Post } from 'studio/lib/sanity.queries'
import PostTitle from './PostTitle'
import PostCategory from './PostCategory'
import PostCoverImage from './PostCoverImage'
import PostDate from './PostDate'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug' | 'category'>
) {
  const { title, coverImage, date, author, slug, category } = props
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-2 md:block">
        <div className="flex justify-between">
          {author && <Avatar name={author.name} picture={author.picture} />}
          {category && <PostCategory name={category.name} description={category.description} />}
        </div>
      </div>
      <div className="mb-6 text-lg font-light tracking-wide text-justify text-slate-800 uppercase">
        <PostDate dateString={date} />
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <PostCoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="mx- max-w-2xl">
        <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
          {category && <PostCategory name={category.name} description={category.description} />}

        </div>

      </div>
    </>
  )
}
