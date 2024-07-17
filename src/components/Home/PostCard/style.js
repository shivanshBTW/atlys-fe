import { css } from '@emotion/react'
import { theme } from '../../../config/themes/dark'

export const createPostRoot = css`
  margin: 0 auto;
  padding: 24px 20px;
  background-color: ${theme.paper};
  border-radius: 8px;
`

export const headingStyle = css`
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.78px;
  text-align: left;
`

export const inputContainerStyle = css`
  position: relative;
  padding: 16px 0;
`

export const emojiSelectorButton = css`
  position: absolute;
  left: 15px;
  top: 32px;
`
// transform: translateY(-50%);

export const inputStyle = css`
  width: 100%;
  box-sizing: border-box;
  background: ${theme.paper1};
  padding: 16px 15px;
  min-height: 78px;
  padding-left: 80px;
  border: none;
  outline: none;
  border-radius: 8px;
  color: ${theme.tertiaryTextColor};

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;

  &::placeholder {
    color: ${theme.tertiaryTextColor};
  }
`

export const buttonContainer = css`
  text-align: left;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.tertiaryTextColor};
  cursor: pointer;
  &:hover {
    color: ${theme.mainTextColor};
  }
`
export const buttonStyle = css`
  padding: 12px 40px;
`
