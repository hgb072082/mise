import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import * as Styles from './Fetch.styles';
import { IFetchUIProps } from './Fetch.types';
export default function FetchUI(props: IFetchUIProps) {
  const {
    studentData,
    ratingData,
    grade,
    handleChange,
    onClickFetchScoreDetail,
  } = props;
  return (
    <>
      <Styles.Position>
        <Styles.Wrapper>
          <Styles.InnerRowWrapper>
            <Styles.ContentsBox>
              <Styles.AcademyNameTxt>
                {studentData.academyName}
              </Styles.AcademyNameTxt>
              <FormControl
                fullWidth
                style={{ marginTop: '20px', marginBottom: '20px' }}
              >
                <InputLabel id="demo-simple-select-label">학년</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={0}
                  value={grade}
                  label="grade"
                  onChange={handleChange}
                >
                  {studentData.result.map((e, i) => (
                    <MenuItem key={i} value={i}>
                      {e.grade}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {studentData?.result[grade]?.students?.map((e, i) => (
                <Styles.ListRow key={e} onClick={onClickFetchScoreDetail(e.id)}>
                  <Styles.NumberTxt>{i + 1}</Styles.NumberTxt>
                  <Styles.CheryIcon flex={1}>
                    <img src={'/fetch/cheryIcon.png'} />
                  </Styles.CheryIcon>
                  <Styles.InfoTxtColBox flex={2}>
                    <Styles.GradeTxt>
                      {studentData.result[grade]?.grade}
                    </Styles.GradeTxt>
                    <Styles.NameTxt>{e.name}</Styles.NameTxt>
                  </Styles.InfoTxtColBox>
                  <Styles.ScoreTxt>{e.score}</Styles.ScoreTxt>
                </Styles.ListRow>
              ))}
            </Styles.ContentsBox>
            <Styles.ContentsBox right={true}>
              <Styles.DetailInfoTxt style={{ marginLeft: '15px' }}>
                {ratingData.name}
              </Styles.DetailInfoTxt>
              <Styles.DetailInfoTxt
                style={{
                  marginTop: '12px',
                  marginLeft: '15px',
                  marginBottom: '26px',
                }}
              >
                {ratingData.score}
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
                {ratingData.problem?.map((e, idx) => (
                  <Styles.TableRow isCorrect={e.correct} key={idx}>
                    <Styles.CircleBox flex={1}>
                      <Styles.Circle isCorrect={e.correct}>
                        <Styles.TableNumTxt isCorrect={e.correct}>
                          {idx + 1}
                        </Styles.TableNumTxt>
                      </Styles.Circle>
                    </Styles.CircleBox>

                    <Styles.TableRowEl flex={1}>{e.type}</Styles.TableRowEl>
                    <Styles.TableRowEl flex={1}>
                      {e.correctRate}
                    </Styles.TableRowEl>
                    <Styles.TableRowEl flex={1}>
                      {e.solveTime}
                    </Styles.TableRowEl>
                    <Styles.TableRowEl flex={1}>{e.points}</Styles.TableRowEl>
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
