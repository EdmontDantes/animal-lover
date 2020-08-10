
let searchIt = (query) => (element) =>
  element.type.toLowerCase().includes(query.toLowerCase())

export default searchIt;