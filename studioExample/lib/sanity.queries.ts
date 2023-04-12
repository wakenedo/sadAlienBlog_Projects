import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
  "category": category->{name, description}
`
const projectFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
  "projectCategory": projectCategory->{name, description, color},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const projectIndexQuery = groq`
*[_type == "project"] | order(date desc, _updatedAt desc) {
  ${projectFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`
export const projectAndMoreStoriesQuery = groq`
{
  "project": *[_type == "project" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "allProjects": *[_type == "project" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`
export const projectSlugsQuery = groq`
*[_type == "project" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`
export const projectsBySlugQuery = groq`
*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}
`

export interface Category {
  name: string
  description: string
}
export interface ProjectCategory {
  name: string
  color: string
  description: string
}

export interface ProjectCategories {
  data: ProjectCategory[]
}


export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
  category?: Category
}
export interface Project {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
  projectCategory?: ProjectCategory
  projectCategory2?: ProjectCategory
  projectCategory3?: ProjectCategory

}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
export interface ParamsProps {
  slug: string
}
export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  data: { post: Post; morePosts: Post[] }
  settings: Settings
}
export interface ProjectPageProps {
  preview?: boolean
  loading?: boolean
  data: { project: Project; allProjects: Project[] }
  settings: Settings
}
export interface BlogPageProps {
  preview?: boolean
  loading?: boolean
  data: Post[]
  settings: Settings
}
export interface ProjectsPageProps {
  preview?: boolean
  loading?: boolean
  data: Project[]
  settings: Settings
}
export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

