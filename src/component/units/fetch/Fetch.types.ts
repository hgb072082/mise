import { SelectChangeEvent } from '@mui/material';

export interface IFetchStyleProps {
  flex?: number;
  isCorrect?: boolean;
  right?: boolean;
}
export interface IFetchUIProps {
  studentData: {
    academyName?: string;
    result?: [{ grade: number }];
  };
  ratingData: {
    name?: string;
    score?: number;
    problem?: [
      {
        correct?: boolean;
        type?: string;
        correctRate?: number;
        points?: number;
        solveTime?: number;
      }
    ];
  };
  grade: number;
  handleChange: (event: SelectChangeEvent) => void;
  onClickFetchScoreDetail: (id: string) => void;
}
export type CallbackType = (...args: string[]) => void;
