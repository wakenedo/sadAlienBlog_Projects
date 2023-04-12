"use client"

import { usePreview } from 'studio/lib/sanity.preview'
import {
  type Settings,
  settingsQuery,
  projectIndexQuery,
  Project,
} from 'studio/lib/sanity.queries'
import ProjectPage from 'components/ActiveProjectPage/ProjectPage'

export default function PreviewProjectPage({
  token,
  slug,
}: {
  token: null | string
  slug: string
}) {
  const data: { project: Project; allProjects: Project[] } = usePreview(
    token,
    projectIndexQuery,
    {
      slug,
    }
  ) || { project: null, allProjects: [] }
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <ProjectPage preview data={data} settings={settings} />
}