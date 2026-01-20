import { useBlogs } from "@/hooks/useBlogs"
import { BlogCard } from "./BlogCard"
import { BlogSkeleton } from "./BlogSkeleton"
// import React = require("react")

interface BlogListProps {
  onSelect: (id: number) => void
  selectedId: number | null
}

export function BlogList({ onSelect , selectedId}: BlogListProps) {
  const { data, isLoading, error } = useBlogs()

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <BlogSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 text-sm">
        Failed to load blogs
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {data?.map((blog) => (
  <BlogCard
    key={blog.id}
    blog={blog}
    onSelect={onSelect}
    isSelected={selectedId === blog.id}
  />
))}

    </div>
  )
}

export default BlogList
