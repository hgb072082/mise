import { useRouter } from 'next/router';
import { useState } from 'react';
import MainUI from './Main.presenter';

export default function Main() {
  const router = useRouter();
  const [inputCode, setInputCode] = useState(0);
  const onChangeInputCode = (e) => {
    setInputCode(e.target.value);
    console.log(e.target.value);
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClickFetchBtn();
    }
  };
  const onClickFetchBtn = async () => {
    try {
      console.log(inputCode);
      router.push(`/fetch/${inputCode}`);
    } catch (err) {
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
