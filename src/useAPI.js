import axios from 'axios';

function useAPI() {
  // const [cookies, setCookies] = useCookies();

  const API = axios.create({
    baseURL: 'https://rtf9pax219.execute-api.ap-northeast-2.amazonaws.com/api',
    // baseURL:
    //   Platform.OS === 'ios' ? 'http://localhost:3010' : 'http://10.0.2.2:3010',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      return data;
    }),
  });

  const academy = {
    fetchAcademyInfo: (params) =>
      API.get(`/academy/fetchacademyinfo?code=${params.code}`),
    fetchScoreDetail: (params) =>
      API.get(`/academy/fetchscoredetail?id=${params.id}`),
  };
  return [
    {
      academy,
    },
  ];
}

export default useAPI;
