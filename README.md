## Styled_component 연습

- 1. yarn add styled-components
- 2. import styled from 'styled-components';
- 3. <code> const Circle = styled.div`width: 5rem; height: 5rem; background: black; border-radius: 50%;`;
     </code>
- 4. props를 줄경우 : background: \${props => props.color};
- 5. props 내부에서는 props를 또 못 불러와서 응용력이 떨어지게 되므로css 를 선언
