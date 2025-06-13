import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchData = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return response.data
}

export const useFetchData = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
