import { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }
    to {
        filter: blur(0);
        opacity: 1;
    }
`
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInKeyframes} ${type};
`
const bounceDownKeyFrames = pos =>
  keyframes`
 0% {
 top: ${pos - 50}px;
  }

  25% {
    top: ${pos + 5}px;
  }

  40%{
    top: ${pos - 10}px
  }

  65%{
    top: ${pos + 3}px
  }

  100% {
    top: ${pos}px;
  }
`

export const bounceDown = ({ time = '1s', type = 'ease', pos = '0' } = {}) =>
  css`
    animation: ${time} ${bounceDownKeyFrames(pos)} ${type};
  `
