import { FC } from 'react';
import { css, useGlobals } from 'trousers';

import { Theme } from './';

const reset = css`
    @import url('https://fonts.googleapis.com/css?family=Inconsolata:400,700&display=swap');

    * {
        box-sizing: border-box;
    }
`;

const typography = css<Theme>`
    html,
    body {
        background-color: ${({ colors }) => colors.background};
    }

    body {
        font-family: ${({ fonts }) => fonts.base};
        font-size: ${({ fontSizes }) => fontSizes[1]}px;
        color: ${({ colors }) => colors.base};
    }
`;

const Globals: FC = () => {
    useGlobals<Theme>(reset);
    useGlobals<Theme>(typography);

    return null;
};

export default Globals;
