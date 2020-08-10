let searchIt = (query) => (element) =>
  element.subject.toLowerCase().includes(element.toLowerCase())

export default searchIt;