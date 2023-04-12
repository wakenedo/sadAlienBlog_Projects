import 'server-only'

import { apiVersion, dataset, projectId, useCdn } from './sanity.api'
import {
  type Post,
  type Settings,
  indexQuery,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  settingsQuery,
  Project,
  projectIndexQuery,
  projectSlugsQuery,
  projectsBySlugQuery,
  projectAndMoreStoriesQuery,
} from './sanity.queries'
import { createClient } from 'next-sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {}
  }
  return {}
}

export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || []
  }
  return []
}
export async function getAllProjects(): Promise<Project[]> {
  if (client) {
    return (await client.fetch(projectIndexQuery)) || []
  }
  return []
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}
export async function getAllProjectsSlugs(): Promise<Pick<Project, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(projectSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}
export async function getProjectBySlug(slug: string): Promise<Project> {
  if (client) {
    return (await client.fetch(projectsBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getPostAndMoreStories(
  slug: string,
  token?: string | null
): Promise<{ post: Post; morePosts: Post[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(postAndMoreStoriesQuery, { slug })
  }
  return { post: null, morePosts: [] }
}
export async function getProjectAndMoreStories(
  slug: string,
  token?: string | null
): Promise<{ project: Project; allProjects: Project[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(projectAndMoreStoriesQuery, { slug })
  }
  return { project: null, allProjects: [] }
}

