
async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/GabrielCorreia19/tia-gabi/refs/heads/main/data/profile.json'
  const fetching = await fetch(url)
  return await fetching.json()
}