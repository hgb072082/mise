import FetchUI from './Fetch.presenter';
import axios from 'axios';
import { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from 'react';
export default function Fetch() {
  const [studentData, setStudentData] = useState({});
  const [ratingData, setRatingData] = useState({});
  const [grade, setGrade] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setGrade(event.target.value as string);
    console.log(event.target.value);
  };
  return (
    <FetchUI
      studentData={studentData}
      ratingData={ratingData}
      grade={grade}
      handleChange={handleChange}
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
