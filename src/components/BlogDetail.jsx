// import { useBlogs } from "@/hooks/useBlogs"
// import { Card, CardContent } from "@/components/ui/card"

// export default function BlogDetail({ blogId }) {
//   // 🟡 No blog selected
//   if (!blogId) {
//     return (
//       <Card className="flex items-center justify-center h-full">
//         <CardContent className="text-center text-muted-foreground">
//           <p className="text-sm">
//             Select a blog from the list to view details
//           </p>
//         </CardContent>
//       </Card>
//     )
//   }

//   const { data: blog, isLoading, error } = useBlogs(blogId)

//   if (isLoading) {
//     return (
//       <Card>
//         <CardContent className="p-6">
//           Loading blog...
//         </CardContent>
//       </Card>
//     )
//   }

//   if (error) {
//     return (
//       <Card>
//         <CardContent className="p-6 text-red-500">
//           Failed to load blog
//         </CardContent>
//       </Card>
//     )
//   }

//   return (
//     <Card>
//       <CardContent className="p-6 space-y-4">
//         {/* Cover Image */}
//         {blog.coverImage && (
//           <img
//             src={blog.coverImage}
//             alt={blog.title}
//             className="w-full h-56 object-cover rounded-md"
//           />
//         )}

//         {/* Category & Date */}
//         <div className="text-xs text-blue-600 font-semibold">
//           {blog.category.join(", ")} •{" "}
//           {new Date(blog.date).toLocaleDateString()}
//         </div>

//         {/* Title */}
//         <h1 className="text-xl font-bold">{blog.title}</h1>

//         {/* Description */}
//         <p className="text-sm text-muted-foreground">
//           {blog.description}
//         </p>

//         {/* Content */}
//         <p className="text-sm whitespace-pre-line">
//           {blog.content}
//         </p>
//       </CardContent>
//     </Card>
//   )
// }
