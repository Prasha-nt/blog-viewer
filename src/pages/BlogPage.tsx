import { useState } from "react"
import { BlogList } from "@/components/blog/BlogList"
import { BlogDetail } from "@/components/blog/BlogDetail"
import { CreateBlogForm } from "@/components/blog/CreateBlogForm"

export function BlogPage() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null)
  const [showCreateForm, setShowCreateForm] = useState(false)

  return (
    <div className="container mx-auto p-4">
      
      {/* LAYOUT: Changed to Flexbox for better fixed-width control */}
      <div className="flex flex-col md:flex-row gap-6 items-start">

        {/* LEFT PANEL (Fixed Width) 
            - md:w-[400px]: Sets a strict 400px width on desktop.
            - shrink-0: Prevents the sidebar from squishing if screen gets smaller.
        */}
        <div className="w-full md:w-[400px] shrink-0 space-y-4">

          {/* Create Blog Button */}
          <button
            onClick={() => setShowCreateForm(true)}
            className="w-full bg-yellow-400 text-black font-bold py-2.5 rounded-lg hover:bg-yellow-500 transition shadow-sm"
          >
            + Create Blog
          </button>

          {/* Blog List */}
          <BlogList
            selectedId={selectedBlogId}
            onSelect={setSelectedBlogId}
          />
        </div>

        {/* RIGHT PANEL (Fluid Width)
            - flex-1: Takes up all remaining space.
            - min-w-0: Critical for flex children to prevent overflow issues with long text/code.
        */}
        <div className="flex-1 w-full min-w-0 bg-white border rounded-lg p-6 min-h-[500px]">
          <BlogDetail
            blogId={selectedBlogId}
            onDeleted={() => setSelectedBlogId(null)}
          />
        </div>

      </div>

      {/* MODAL RENDER */}
      {showCreateForm && (
        <CreateBlogForm 
          onClose={() => setShowCreateForm(false)}
          onSuccess={() => {
            console.log("Blog created successfully")
          }}
        />
      )}
    </div>
  )
}