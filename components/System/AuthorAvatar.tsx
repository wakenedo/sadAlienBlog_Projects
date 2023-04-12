import { urlForImage } from 'studio/lib/sanity.image'
import type { Author } from 'studio/lib/sanity.queries'
import Image from 'next/image'

export default function AuthorAvatar(props: Author) {
  const { name, picture } = props
  return (
    <div className="flex items-center lg:p-1 lg:h-50 rounded-l-lg bg-slate-600">
      <div className="relative lg:h-[2.2rem] h-12 lg:w-[2.2rem] md:w-[0.15rem] w-12 lg:p-[0.15rem]">
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture).height(96).width(96).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-[50%] lg:block md:hidden hidden"
          height={110}
          width={110}
          // @TODO add alternative text to avatar image schema
          alt=""
        />
      </div>
      <div className="text-xl tracking-wide font-bold ml-2 p-2 bg-[#FDFFA6] border-2 text-[#6590FF]">{name}</div>
    </div>
  )
}
