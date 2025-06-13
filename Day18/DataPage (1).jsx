import { useFetchData } from './hooks/useFetchData'

const DataPage = () => {
  const { data, error, isLoading, refetch } = useFetchData()

  if (isLoading) return <p>Loading data...</p>
  if (error) return <p>Error fetching data: {error.message}</p>

  return (
    <div>
      <h2>Fetched Posts</h2>
      <button onClick={() => refetch()}>Refetch</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DataPage
