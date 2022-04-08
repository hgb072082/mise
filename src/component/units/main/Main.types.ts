import { ChangeEvent, KeyboardEvent } from 'react';

export interface IMainUIProps {
  onChangeInputCode: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickFetchBtn: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}
