import axios from 'axios';

export const fetchPhotos = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos/`, {
    params: {
      query,
      page,
      per_page: 28,
      client_id: 'Mgm-Iommn11K-0RcYfffpr49lRiXYRUltRfB2YhDxnI',
    },
  });

  return response.data;
};
