import { css } from '@emotion/react'
import { theme } from './config/themes/dark'

export const appRoot = css`
  min-height: 100vh;
  background: ${theme.background};
  color: ${theme.mainTextColor};
`
