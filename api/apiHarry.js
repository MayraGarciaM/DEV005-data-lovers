
export const apiHarry = async () => {
   const response  = await fetch("../data/harrypotter/harry.json");
   return response.json()
}