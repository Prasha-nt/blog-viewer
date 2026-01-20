import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const API_URL = "http://localhost:3001/blogs"

export function useDeleteBlog() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`${API_URL}/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
    },
  })
}
