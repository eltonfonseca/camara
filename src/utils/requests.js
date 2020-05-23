import axios from 'axios';

const baseURL = 'https://dadosabertos.camara.leg.br/api/v2';

export default async function apiRequest(resource, params) {
  const response = await axios.get(`${baseURL}/${resource}`, params);
  return response.data.dados;
}
