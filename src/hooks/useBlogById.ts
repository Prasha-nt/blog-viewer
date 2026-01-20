import { useQuery } from "@tanstack/react-query"
import { getBlogById } from "@/api/blogs"
import { Blog } from "@/types/blog"

export const useBlogById = (id: number | null) => {
  return useQuery<Blog, Error>({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id as number),
    enabled: !!id,
  })
}

export default useBlogById