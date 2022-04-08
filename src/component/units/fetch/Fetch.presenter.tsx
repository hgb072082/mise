import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import * as Styles from './Fetch.styles';
export default function FetchUI(props) {
  return (
    <>
      <Styles.Position>
        <Styles.Wrapper>
          <Styles.InnerRowWrapper>
            <Styles.ContentsBox>
              <Styles.AcademyNameTxt>분당 청솔 학원</Styles.AcademyNameTxt>
              <FormControl
                fullWidth
                style={{ marginTop: '20px', marginBottom: '20px' }}
              >
                <InputLabel id="demo-simple-select-label">학년</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={props.grade}
                  label="grade"
                  onChange={props.handleChange}
                >
                  <MenuItem value={''}>분당고등학교 1학년</MenuItem>
                  <MenuItem value={''}>분당고등학교 2학년</MenuItem>
                  <MenuItem value={''}>분당고등학교 3학년</MenuItem>
                </Select>
              </FormControl>
              {new Array(10).fill(8).map((e) => (
                <Styles.ListRow key={e}>
                  <Styles.NumberTxt>1</Styles.NumberTxt>
                  <Styles.CheryIcon flex={1}>
                    <img src={'/fetch/cheryIcon.png'} />
                  </Styles.CheryIcon>
                  <Styles.InfoTxtColBox flex={2}>
                    <Styles.GradeTxt>고3/N</Styles.GradeTxt>
                    <Styles.NameTxt>닉네임</Styles.NameTxt>
                  </Styles.InfoTxtColBox>
                  <Styles.ScoreTxt>98점</Styles.ScoreTxt>
                </Styles.ListRow>
              ))}
            </Styles.ContentsBox>
            <Styles.ContentsBox right={true}>
              <Styles.DetailInfoTxt style={{ marginLeft: '15px' }}>
                유동훈 학생
              </Styles.DetailInfoTxt>
              <Styles.DetailInfoTxt
                style={{
                  marginTop: '12px',
                  marginLeft: '15px',
                  marginBottom: '26px',
                }}
              >
                82점
              </Styles.DetailInfoTxt>
              <Styles.CheckScoreTable>
                <Styles.TableHeaderRow>
                  <Styles.HeaderEl style={{ marginLeft: '20px' }} flex={1}>
                    문항번호
                  </Styles.HeaderEl>
                  <Styles.HeaderEl flex={1}>문항유형</Styles.HeaderEl>

                  <Styles.HeaderEl flex={1}>정답률</Styles.HeaderEl>

                  <Styles.HeaderEl flex={1}>풀이시간</Styles.HeaderEl>

                  <Styles.HeaderEl flex={1}>배점</Styles.HeaderEl>
                </Styles.TableHeaderRow>
                {new Array(16).fill(0).map((e, idx) => (
                  <Styles.TableRow isWrong={false} key={e}>
                    <Styles.CircleBox flex={1}>
                      <Styles.Circle isWrong={false}>
                        <Styles.TableNumTxt isWrong={false}>
                          {idx + 1}
                        </Styles.TableNumTxt>
                      </Styles.Circle>
                    </Styles.CircleBox>

                    <Styles.TableRowEl flex={1}>주장찾기</Styles.TableRowEl>
                    <Styles.TableRowEl flex={1}>78%</Styles.TableRowEl>
                    <Styles.TableRowEl flex={1}>1:10</Styles.TableRowEl>
                    <Styles.TableRowEl flex={1}>3.1</Styles.TableRowEl>
                  </Styles.TableRow>
                ))}
              </Styles.CheckScoreTable>
            </Styles.ContentsBox>
          </Styles.InnerRowWrapper>
        </Styles.Wrapper>
      </Styles.Position>
    </>
  );
}
