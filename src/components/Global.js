import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body, header, footer, #nav {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text}
    }
    `