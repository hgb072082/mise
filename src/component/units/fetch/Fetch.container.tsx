import FetchUI from './Fetch.presenter';
import axios from 'axios';
import { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState, useCallback } from 'react';
import useAPI from '../../../useAPI';
import { useRouter } from 'next/router';
import { CallbackType } from './Fetch.types';
export default function Fetch() {
  const [studentData, setStudentData] = useState({
    result: [
      {
        students: [],
      },
    ],
  });
  const [ratingData, setRatingData] = useState({});
  const [grade, setGrade] = useState(0);

  const [API] = useCallback<CallbackType>(useAPI(), []);
  const router = useRouter();
  const handleChange = (event: SelectChangeEvent) => {
    setGrade(Number(event.target.value as string));
  };
  useEffect(() => {
    const fetchAcademyInfo = async () => {
      const params = { code: router.query.code };
      const result = await API.academy.fetchAcademyInfo(params);
      setStudentData(result.data);
    };
    fetchAcademyInfo();
  }, []);

  const onClickFetchScoreDetail = (id: string) => async () => {
    const params = { id };
    const result = await API.academy.fetchScoreDetail(params);
    setRatingData(result.data);
  };
  return (
    <FetchUI
      studentData={studentData}
      ratingData={ratingData}
      grade={grade}
      handleChange={handleChange}
      onClickFetchScoreDetail={onClickFetchScoreDetail}
    />
  );
}

// function Example() {
//   const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
//     fetch(
//       "https://api.github.com/repos/tannerlinsley/react-query"
//     ).then((res) => res.json())
//   );

//   if (isLoading) return "Loading...";

//   if (error) return "An error has occurred: " + error.message;

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.description}</p>
//       <strong>👀 {data.subscribers_count}</strong>{" "}
//       <strong>✨ {data.stargazers_count}</strong>{" "}
//       <strong>🍴 {data.forks_count}</strong>
//       <div>{isFetching ? "Updating..." : ""}</div>
//       <ReactQueryDevtools initialIsOpen />
//     </div>
//   );
// }
