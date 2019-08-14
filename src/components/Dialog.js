import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Button from "./Button";

const fadeIn = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity:1;
    }
    to {
        opacity: 0;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;
const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px);
    }
`;
const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  animation-duration: 0.25s; /* 애니메이션 지속시간 */
  animation-timing-function: ease-out; /*처음에는 빨랐다가 천천히 느려짐*/
  animation-name: ${fadeIn};
  animation-fill-mode: forwards; /*애니메이션 끝나고 어떻게 할지 forwards는 유지한다는 뜻*/

  ${props =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
  ${props =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

// 기존에 만든 Button component를 상속받아서 특정 style을 덮어 씌울 수 있다.
const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

function Dialog({
  title,
  children,
  confirmText,
  calcelText,
  visible,
  onConfirm,
  onCancel
}) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVislble] = useState(visible);

  useEffect(() => {
    //visible의 값이 true에서 false로 바뀌는 시점에 작업을 해준다.
    if (localVisible && !visible) {
      // localVisible이 true였고 현재 visible이 false라면
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVislble(visible); // visible값이 바뀔 때마다 localvisible값을 동기화
  }, [visible, localVisible]);

  if (!localVisible && !animate) return null;

  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton color={"gray"} onClick={onCancel}>
            {calcelText}
          </ShortMarginButton>
          <ShortMarginButton color={"pink"} onClick={onConfirm}>
            {confirmText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}

Dialog.defaultProps = {
  confirmText: "확인",
  calcelText: "취소"
};

export default Dialog;
