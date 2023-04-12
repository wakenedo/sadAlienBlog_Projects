import { ImageResponse } from '@vercel/og'
import { apiVersion, dataset, projectId } from 'studio/lib/sanity.api'
import type { NextRequest, NextResponse } from 'next/server'
import type { PageConfig } from 'next/types'
import { createClient } from 'next-sanity'

export const config: PageConfig = { runtime: 'experimental-edge' }

import { height, OpenGraphImage, width } from 'components/System/OpenGraphImage'
import * as demo from 'studio/lib/demo.data'
import { Settings, settingsQuery } from 'studio/lib/sanity.queries'

export default async function og(req: NextRequest, res: NextResponse) {
  const font = fetch(new URL('public/Inter-Bold.woff', import.meta.url)).then(
    (res) => res.arrayBuffer()
  )

  const { searchParams } = new URL(req.url)

  let title = searchParams.get('title')
  if (!title) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    })
    const settings = (await client.fetch<Settings>(settingsQuery)) || {}
    title = settings?.ogImage?.title
  }

  let currentPath: string
  if (typeof window !== 'undefined') {
    currentPath = window.location.pathname
  } else {
    currentPath = req.url
  }

  return new ImageResponse(
    <OpenGraphImage title={title || demo.ogImageTitle} />,
    {
      width,
      height,
      fonts: [
        {
          name: 'Inter',
          data: await font,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
