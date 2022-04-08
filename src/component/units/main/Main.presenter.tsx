import * as Styles from './Main.styles';
import { IMainUIProps } from './Main.types';
export default function MainUI(props: IMainUIProps) {
  return (
    <>
      <Styles.Position>
        <Styles.Wrapper>
          <Styles.CheryOnTopImg src={'/main/cheryOnTopImg.png'} />

          <Styles.MainTxt>CHERY 봉투모의고사 결과 확인</Styles.MainTxt>
          <Styles.CodeInput
            onKeyPress={props.onKeyPress}
            onChange={props.onChangeInputCode}
            placeholder="학원 코드 입력"
          />

          <Styles.FetchBtn onClick={props.onClickFetchBtn}>
            조회하기
          </Styles.FetchBtn>
        </Styles.Wrapper>
      </Styles.Position>
    </>
  );
}
