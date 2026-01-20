import { Blog } from "@/types/blog"

const API_URL = import.meta.env.VITE_API_URL

if (!API_URL) {
  throw new Error("VITE_API_URL is not defined")
}

export const getBlogs = async (): Promise<Blog[]> => {
  const response = await fetch(`${API_URL}/blogs`)
  if (!response.ok) throw new Error("Failed to fetch blogs")
  return response.json()
}

export const getBlogById = async (id: number): Promise<Blog> => {
  const response = await fetch(`${API_URL}/blogs/${id}`)
  if (!response.ok) throw new Error("Failed to fetch blog")
  return response.json()
}

export const createBlog = async (
  blog: Omit<Blog, "id">
): Promise<Blog> => {
  const response = await fetch(`${API_URL}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  })
  if (!response.ok) throw new Error("Failed to create blog")
  return response.json()
}
