import { css } from '@emotion/react'
import { theme } from '../../config/themes/dark'

export const loginRoot = css`
  height: 100vh;
  background: ${theme.background};
  color: ${theme.mainTextColor};
  position: relative;
`

export const centerSectionContainer = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const logoContainer = css`
  text-align: center;
  margin-bottom: 50px;
`
export const logoImage = css``

export const loginSectionContainer = css`
  padding: 8px;
  width: 420px;
  background: ${theme.paper};
  padding: 40px 24px;
  position: relative;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    width: 80vw;
  }
`

export const secondaryHeading = css`
  color: ${theme.secondaryTextColor};
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`
export const mainHeading = css`
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.78px;
  color: ${theme.mainTextColor};
  margin-top: 8px;
`

export const inputsContainer = css`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const signupSectionContainer = css`
  text-align: left;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  color: ${theme.tertiaryTextColor};
`
export const registerHereLink = css`
  color: ${theme.linkColor};
  text-decoration: none;
`
