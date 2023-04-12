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

import styles from './PostBody.module.css'

export default function PostBody({ content }) {
  return (
    <div className={`mx-auto max-w-4xl font-light tracking-wide text-justify text-slate-600  ${styles.portableText}`}>
      <PortableText value={content} />
    </div>
  )
}
