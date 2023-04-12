/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText } from '@portabletext/react'

import styles from './ProjectBody.module.css'

export default function ProjectBody({ content }) {
  return (
    <div className={`mx-auto px-2 py-1 rounded-b-lg mb-5 lg:max-w-5xl font-light tracking-wide text-justify md:text-sm lg:text-base text-xs text-slate-600 bg-[#FDFFA6] shadow-lg  ${styles.portableText}`}>
      <PortableText value={content} />
    </div>
  )
}
