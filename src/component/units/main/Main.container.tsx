import { useRouter } from 'next/router';
import { ReactEventHandler, useState, KeyboardEvent } from 'react';
import MainUI from './Main.presenter';

export default function Main() {
  const router = useRouter();
  const [inputCode, setInputCode] = useState('');
  const onChangeInputCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCode(e.target.value);
    console.log(e.target.value);
  };
  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClickFetchBtn();
    }
  };
  const onClickFetchBtn = async () => {
    try {
      console.log(inputCode);
      router.push(`/fetch/${inputCode}`);
    } catch (err: any) {
      alert(err.message);
    }
  };
  return (
    <MainUI
      onChangeInputCode={onChangeInputCode}
      onClickFetchBtn={onClickFetchBtn}
      onKeyPress={onKeyPress}
    />
  );
}
