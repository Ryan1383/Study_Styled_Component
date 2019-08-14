import React, { useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;
// const Circle = styled.div`
//   width: 5rem;
//   height: 5rem;
//   background: ${props => props.color};
//   border-radius: 50%;
//   ${props =>
//     props.huge &&
//     css`
//       width: 10rem;
//       height: 10rem;
//     `}
// `;

const palette = {
  blue: "#228be6",
  gray: "#596057",
  pink: "#f06595"
};

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };

  const onConfirm = () => {
    setDialog(false);
    console.log("확인");
  };

  const onCancel = () => {
    setDialog(false);
    console.log("취소");
  };
  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        {/* <ButtonGroup>
          <Button size={"large"}>BUTTON</Button>
          <Button color={"gray"}>BUTTON</Button>
          <Button color={"pink"} size={"small"}>
            BUTTON
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button size={"large"} outline>
            BUTTON
          </Button>
          <Button color={"gray"} outline>
            BUTTON
          </Button>
          <Button color={"pink"} size={"small"} outline>
            BUTTON
          </Button>
        </ButtonGroup> */}

        <ButtonGroup>
          {/* <Button size={"large"} fullWidth>
            BUTTON
          </Button>
          <Button color={"gray"} size={"large"} fullWidth>
            BUTTON
          </Button> */}
          <Button color={"pink"} size={"large"} fullWidth onClick={onClick}>
            삭제
          </Button>
        </ButtonGroup>

        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          calcelText="취소"
          visible={dialog}
          onConfirm={onConfirm}
          onCancel={onCancel}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </AppBlock>
    </ThemeProvider>
    // <>
    //   <Circle color={"blue"} huge />
    //   <Circle color={"black"} />
    // </>
  );
}

export default App;
