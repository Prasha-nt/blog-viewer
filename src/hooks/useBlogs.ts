import { useQuery } from "@tanstack/react-query"
import { getBlogs } from "@/api/blogs"
import { Blog } from "@/types/blog"

export const useBlogs = () => {
  return useQuery<Blog[], Error>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })
}

export default useBlogs