const url = process.env.REACT_APP_API_URL

export async function getJokesData() {
    const response = await fetch(url)
    const result = await response.json()
    return result
}