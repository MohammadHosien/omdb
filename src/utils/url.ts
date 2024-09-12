const urls = {
  OdmBySearch: (name: string, page = 1) =>
    `http://www.omdbapi.com/?s=${name}&page=${page}&apikey=b7961d17`,
  OmdbById: (id: string) => `http://www.omdbapi.com/?&i=${id}&apikey=b7961d17`,
};

export default urls;
