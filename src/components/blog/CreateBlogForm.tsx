import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCreateBlog } from "@/hooks/useCreateBlog"
import { toast } from "sonner"
import { X } from "lucide-react" // Import X icon

interface CreateBlogFormProps {
  onSuccess?: () => void
  onClose: () => void // New prop to handle closing the modal
}

export function CreateBlogForm({ onSuccess, onClose }: CreateBlogFormProps) {
  const { mutate, isPending, error } = useCreateBlog()

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [coverImage, setCoverImage] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutate(
      {
        title,
        category: category.split(",").map((c) => c.trim()),
        description,
        coverImage,
        content,
        date: new Date().toISOString(),
      },
      {
        onSuccess: () => {
          toast.success("Blog created", {
            description: "Your blog was published successfully",
          })

          // Reset form
          setTitle("")
          setCategory("")
          setDescription("")
          setCoverImage("")
          setContent("")

          // Notify parent and CLOSE modal
          onSuccess?.()
          onClose() 
        },
        onError: () => {
          toast.error("Error", {
            description: "Failed to create blog",
          })
        },
      }
    )
  }

  return (
    // 1. BACKDROP OVERLAY
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      
      {/* 2. CLICK OUTSIDE TO CLOSE (Optional) */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* 3. MODAL CONTENT */}
      <form
  onSubmit={handleSubmit}
  // Added 'no-scrollbar' here 👇
  className="relative z-10 w-full max-w-2xl bg-white border rounded-xl shadow-2xl p-6 max-h-[90vh] overflow-y-auto no-scrollbar animate-in fade-in zoom-in duration-200"
>
        
        {/* Header with Close Button */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Create New Blog</h3>
          <button 
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="space-y-4">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="text-lg font-medium"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Categories (comma separated)"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />

            <Input
              placeholder="Cover Image URL"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              required
            />
          </div>

          <Textarea
            placeholder="Short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            required
          />

          <Textarea
            placeholder="Full content (Markdown supported)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            required
          />

          {error && (
            <p className="text-sm text-red-500 font-medium">
              Failed to create blog. Please try again.
            </p>
          )}

          <div className="flex justify-end gap-3 pt-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              className="font-semibold min-w-[120px]"
            >
              {isPending ? "Creating..." : "Create Blog"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}