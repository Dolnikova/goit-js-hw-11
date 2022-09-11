export const fetchImages = async (inputValue, pageNr) => {
  return await fetch(
    `https://pixabay.com/api/?key=29818369-26f2aeadd77818b7a67304d74=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
  )
    .then(async response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return await response.json();
    })
    .catch(error => {
      console.error(error);
    });
};
