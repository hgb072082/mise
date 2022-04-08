import { SelectChangeEvent } from '@mui/material';

export interface IFetchStyleProps {
  flex?: number;
  isWrong?: boolean;
  right?: boolean;
}
export interface IFetchUIProps {
  studentData: {};
  ratingData: {};
  grade: string;
  handleChange: (event: SelectChangeEvent) => void;
}
