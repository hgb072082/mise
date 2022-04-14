import styled from '@emotion/styled';
import { IFetchStyleProps } from './Fetch.types';
export const Position = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
`;
export const InnerRowWrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  padding-top: 77px;
`;
export const ContentsBox = styled.div<IFetchStyleProps>`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 150px;
  border-left: ${(props) => (props.right ? '1px solid #707070' : 'none')};
  width: 750px;
`;

export const AcademyNameTxt = styled.div`
  margin-top: 37px;
  font-size: 40px;
  font-weight: bold;
  color: #707070;
`;

export const ListRow = styled.div`
  width: 568px;
  height: 82px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
  justify-content: space-between;
`;

export const NumberTxt = styled.div<IFetchStyleProps>`
  font-size: 32px;
  font-weight: bold;
  color: #707070;
  flex: ${(props) => props.flex || 'none'};
`;
export const CheryIcon = styled.div<IFetchStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: ${(props) => props.flex || 'none'};
`;

export const InfoTxtColBox = styled.div<IFetchStyleProps>`
  display: flex;
  flex-direction: column;
  flex: ${(props) => props.flex || 'none'};
  margin-left: 40px;
`;
export const LeftBox = styled.div`
  display: flex;
  align-items: center;
`;

export const GradeTxt = styled.div`
  font-size: 24px;
  color: #5471ff;
`;
export const NameTxt = styled.div`
  font-size: 28px;
  color: #909398;
`;
export const ScoreTxt = styled.div<IFetchStyleProps>`
  font-size: 26px;
  color: #5c5f66;
  flex: ${(props) => props.flex || 'none'};
  margin-left: 30px;
`;
export const DetailInfoTxt = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #707070;
`;
export const CheckScoreTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const TableHeaderRow = styled.div`
  display: flex;
  width: 620px;
  height: 22px;
  border-bottom: 1px solid #f5f5f5;
`;

export const HeaderEl = styled.div<IFetchStyleProps>`
  flex: ${(props) => props.flex || 'none'};
  color: #909398;
  font-size: 12px;
  display: flex;
`;
export const TableRow = styled.div<IFetchStyleProps>`
  display: flex;
  align-items: center;
  width: 620px;
  height: 43px;
  background-color: ${(props) =>
    props.isCorrect ? 'none' : 'rgb(242,85,85,0.1)'};
  border-bottom: 1px solid #f5f5f5;
`;
export const TableRowEl = styled.div<IFetchStyleProps>`
  display: flex;
  align-items: center;
  flex: ${(props) => props.flex || 'none'};
  font-size: 12px;
`;
export const Circle = styled.div<IFetchStyleProps>`
  border: 1px solid
    ${(props) => (props.isCorrect ? '#E6EBFF' : 'rgb(242, 85, 85, 0.2)')};
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
export const CircleBox = styled.div<IFetchStyleProps>`
  border-radius: 50%;
  flex: ${(props) => props.flex || 'none'};
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const TableNumTxt = styled.div<IFetchStyleProps>`
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => (props.isCorrect ? '#5471FF' : '#f25555')};
`;
