import { useBlogById } from "@/hooks/useBlogById"
import { useDeleteBlog } from "@/hooks/useDeleteBlog"
import { BlogDetailSkeleton } from "./BlogDetailSkeleton"
import { Button } from "@/components/ui/button"

interface BlogDetailProps {
  blogId: number | null
  onDeleted?: () => void
}

export function BlogDetail({ blogId, onDeleted }: BlogDetailProps) {
  const { data, isLoading, error } = useBlogById(blogId)
  const deleteBlog = useDeleteBlog()

  // No blog selected
  if (!blogId) {
    return (
      <div className="text-muted-foreground flex items-center justify-center h-full w-full">
        Select a blog to view details
      </div>
    )
  }

  // Loading state
  if (isLoading) {
    return <BlogDetailSkeleton />
  }

  // Error state
  if (error || !data) {
    return (
      <div className="text-red-500">
        Failed to load blog
      </div>
    )
  }

  // Delete handler
  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this blog?")
    if (!confirmed) return

    deleteBlog.mutate(data.id, {
      onSuccess: () => {
        onDeleted?.()
      },
    })
  }

  return (
    <article className="space-y-6">
      {/* Cover Image */}
      {data.coverImage && (
        <img
          src={data.coverImage}
          alt={data.title}
          className="w-full h-60 object-cover rounded-lg"
        />
      )}

      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{data.title}</h1>

          
        </div>

        <div className="text-sm text-muted-foreground">
          {data.category.join(", ")} •{" "}
          {new Date(data.date).toLocaleDateString()}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700">
        {data.description}
      </p>

      {/* Content */}
      <div className="text-gray-800 leading-relaxed whitespace-pre-line border-l-2 border-amber-300 px-3 rounded-b-2xl rounded-t-2xl py-4">
        {data.content}
      </div>

      <div className="text-sm text-muted-foreground">
      <Button
            variant="destructive"
            size="sm"
            onClick={handleDelete}
            disabled={deleteBlog.isPending}
          >
            {deleteBlog.isPending ? "Deleting..." : "Delete"}
          </Button>
      </div>
    </article>
  )
}
