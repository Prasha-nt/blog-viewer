import { Card, CardContent } from "@/components/ui/card"
import { Blog } from "@/types/blog"
import { Calendar } from "lucide-react"

interface BlogCardProps {
  blog: Blog
  onSelect: (id: number) => void
  isSelected: boolean
}

export function BlogCard({ blog, onSelect, isSelected }: BlogCardProps) {
  return (
    <Card
      onClick={() => onSelect(blog.id)}
      className={`
        cursor-pointer transition-all border
        ${
          isSelected
            ? "border-[#3f6212] ring-1 ring-[#3f6212] bg-[#d9f99d] rounded-r-full shadow-2xl"
            : "hover:shadow-2xl hover:bg-[#fef9c3]"
        }
      `}
    >
      <CardContent className="p-3 flex gap-3 items-center">
        
        {/* TEXT */}
        <div className="flex flex-col gap-1 flex-1 overflow-hidden">
          <h3 className="font-bold text-md truncate">
            {blog.title}
          </h3>

          <p className="text-xs text-muted-foreground line-clamp-2">
            {blog.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-[#49790a] uppercase truncate">
              {blog.category?.length ? blog.category.join(", ") : "General"}
            </div>

            <div className="flex items-center gap-1 text-[11px] text-gray-600 bg-amber-300 py-1 px-2 rounded-full">
              <Calendar className="w-3 h-3" />
              {blog.date
                ? new Date(blog.date).toLocaleDateString()
                : ""}
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="w-20 h-20 flex-shrink-0">
          <img
            src={blog.coverImage || "/placeholder.jpg"}
            alt={blog.title}
            className={`
              w-full h-full object-cover transition-all duration-300
              ${isSelected ? "rounded-full" : "rounded-md"}
            `}
            onError={(e) => {
              e.currentTarget.src = "/placeholder.jpg"
            }}
          />
        </div>

      </CardContent>
    </Card>
  )
}

export default BlogCard
