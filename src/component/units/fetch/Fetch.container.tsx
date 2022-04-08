import FetchUI from './Fetch.presenter';
import axios from 'axios';
import { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from 'react';
export default function Fetch() {
  const [studentData, setStudentData] = useState({});
  const [ratingData, setRatingData] = useState({});
  const [grade, setGrade] = useState('');

  useEffect(() => {}, []);
  const handleChange = (event: SelectChangeEvent) => {
    setGrade(event.target.value as string);
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