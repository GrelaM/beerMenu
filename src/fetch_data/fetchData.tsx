export const fetchData = async (page: number) => {
  const data = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=20`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return await data.json()
}

export const fetchSingleData = async (page: number) => {
  const data = await fetch(`https://api.punkapi.com/v2/beers/${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return await data.json()
}
