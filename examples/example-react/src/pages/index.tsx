import { Link } from 'umi';
import { Box } from '@fower/react';
import {
  createStyle,
  setConfig,
  setTheme,
  addAtom,
  injectGlobalStyle,
} from '@fower/core';
import { useState } from 'react';
import { styled } from '@fower/styled';

const pages = [
  'background',
  'CSSProp',
  'Flex',
  'Layout',
  'Opacity',
  'Position',
  'Shadow',
  'TextSize',
  'popper',
  'Border',
  'Color',
  'FlexBox',
  'Leading',
  'OutLine',
  'Pseudo',
  'Size',
  'Width',
  'Box',
  'Cursor',
  'FontWeight',
  'Margin',
  'Overflow',
  'Responsive',
  'Space',
  'ZIndex',
  'BoxAlignment',
  'Display',
  'Grid',
  'Nested',
  'Padding',
  'Rounded',
  'TextAlignment',
];

setConfig({
  // inline: true,
  pseudos: ['hover'],
});

setTheme({
  colors: {
    brandLight: '#e0f2fe',
    brandLighter: '#bae6fd',
    brandLightest: '#7dd3fc',
    brandPrimary: '#38bdf8',
    brandDark: '#0ea5e9',
    brandDarker: '#0284c7',
    brandDarkest: '#0369a1',

    foo: '#f90',
  },
  spacings: {
    100: 400,
  },
  breakpoints: {
    '4xl': '',
  },
});

addAtom(/heading(sm|md|lg)/i, (atom) => {
  const size = atom.propKey.replace('heading', '').toLowerCase();
  switch (size) {
    case 'sm':
      atom.style = { fontSize: 16 };
      break;
    case 'md':
      atom.style = { fontSize: 24 };
      break;
    case 'lg':
      atom.style = { fontSize: 32 };
      break;
    default:
      break;
  }
  return atom;
});

addAtom('textBody', {
  fontSize: 20,
});

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    textBody?: boolean;
    info?: boolean;
    bgInfo?: boolean;
    borderInfo?: boolean;

    brandLight?: boolean;
    brandLighter?: boolean;
    brandLightest?: boolean;

    brandPrimary?: boolean;

    brandDark?: boolean;
    brandDarker?: boolean;
    brandDarkest?: boolean;

    bgBrandPrimary?: boolean;

    borderBrandPrimary?: boolean;
  }
}

export default function IndexPage() {
  const [colorMode, setColorMode] = useState('default');
  return (
    <Box p10>
      <Box toCenter gray500--dark spaceX2 flexWrap gap-10>
        {pages.map((i) => (
          <Link key={i} to={'/' + i}>
            {i}
          </Link>
        ))}
      </Box>
      <Box
        as="button"
        onClick={() => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
          if (colorMode === 'default') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }}
      >
        切换 {colorMode}
      </Box>
    </Box>
  );
}
