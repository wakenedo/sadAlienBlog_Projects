import cn from 'classnames'
import { urlForImage } from 'studio/lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

interface CoverImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean
}

export default function ProjectsPageCoverImages(props: CoverImageProps) {
  const { title, slug, image: source, priority } = props
  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
    >
      <Image
        className="h-auto w-full"
        width={1020}
        height={1020}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(940).width(1020).url()}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/project/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}