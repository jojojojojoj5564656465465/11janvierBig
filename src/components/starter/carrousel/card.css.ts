import { media } from '@/styles/ThemeContract.css'
import { fluid } from '~/styles/utils'
import { assignVars, createThemeContract, style } from '@vanilla-extract/css'

/* =====================================
=               theme contract         =
===================================== */

export const vars = createThemeContract({
  space: {
    items: null,
    gap: null,
  },
})

export const responsiveTheme = style({
  vars: assignVars(vars, {
    space: {
      items: '4',
      gap: '1rem',
    },
  }),
  '@media': {
    'screen and (width > 1224px)': {
      vars: assignVars(vars, {
        space: {
          items: '5',
          gap: '1.16rem',
        },
      }),
    },
    'screen and (394px < width < 790px ) and (pointer: coarse)': {
      vars: assignVars(vars, {
        space: {
          items: '3',
          gap: '0.60rem',
        },
      }),
    },
    'screen and (width < 394px) and (pointer: coarse)': {
      vars: assignVars(vars, {
        space: {
          items: '2',
          gap: '0.40rem',
        },
      }),
    },
  },
})

export const varsColor = createThemeContract({
  colorCard: {
    title: null,
    description: null,
    backgroundColor: null,
    btnColor: null,
  },
})

export const ColorTheme = style({
  vars: assignVars(varsColor, {
    colorCard: {
      title: '#DD7373',
      description: '#3B3561',
      backgroundColor: '#D1D1D1',
      btnColor: '#51A3A3',
    },
  }),
  '@media': {
    [media.dark]: {
      vars: assignVars(varsColor, {
        colorCard: {
          title: '#F0EDEE',
          description: '#EEC8E0',
          backgroundColor: '#0A090C',
          btnColor: '#90DDF0',
        },
      }),
    },
  },
})

export const wapperCard = style([
  {
    display: 'flex',
    flexDirection: 'column',
    width: '230px',
    maxInlineSize: `calc((100% - (${vars.space.items} - 1) * ${vars.space.gap}) / ${vars.space.items})`,

    minWidth: '200px',
    height: '280px',
    maxHeight: '330px',
    backgroundColor: varsColor.colorCard.backgroundColor,
    borderRadius: '10px',
    boxShadow:
      '0px 10px 12px rgba(0,0,0,0.08) , -4px -4px 12px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    transition: 'all 0.3s',
    cursor: 'pointer',
    boxSizing: 'border-box',
    padding: '10px',
    ':hover': {
      transform: 'translateY(-10px)',
      boxShadow:
        '0px 20px 20px rgba(0,0,0,0.1) , -4px -4px 12px rgba(0,0,0,0.08)',
    },
  },
  ColorTheme,
])

export const Btn = style({
  fontSize: '15px',
  fontFamily:
    'Lucida Sans , Lucida Sans Regular , Lucida Grande , Lucida Sans Unicode , Geneva , Verdana , sans-serif',
  color: varsColor.colorCard.title,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: varsColor.colorCard.btnColor,
  width: '25px',
  height: '25px',
  maxHeight: '25px',
  borderRadius: '10px',
  overflow: 'hidden',
  transition: 'all ease-in-out 0.5s',
  gap: '1px',
  boxSizing: 'border-box',
  paddingLeft: '5px',
  marginTop: '8px',
  ':hover': {
    boxShadow: '0px 10px 20px rgba(0,0,0,0.06)',
    width: '100%',
    borderRadius: '8px',
    height: '30px',
    gap: '10px',
    padding: '0',
  },
  selectors: {
    [`${wapperCard}:hover > &`]: {
      opacity: '1',
      fontSize: '15px',
      width: '100%',
      height: '30px',
      gap: '10px',
    },
  },
})

export const price = style([
  {
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: 'block',
    WebkitLineClamp: '1',
    lineClamp: '1',
    margin: '0',
    fontSize: '13px',
    fontFamily:
      'Lucida Sans , Lucida Sans Regular , Lucida Grande , Lucida Sans Unicode , Geneva , Verdana , sans-serif',
    color: varsColor.colorCard.description,
    cursor: 'default',
    '::before': {
      content: 'A partir de ',
    },
    '::after': {
      content: '€',
    },
  },
])

export const Title = style({
  margin: '0',
  fontSize: '17px',
  fontFamily:
    'Lucida Sans , Lucida Sans Regular , Lucida Grande , Lucida Sans Unicode , Geneva , Verdana , sans-serif',
  fontWeight: '600',
  color: varsColor.colorCard.title,
  cursor: 'default',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '1',
  lineClamp: '1',
})

export const videoIcon = style({
  fontSize: fluid(40,60),
})

export const BtnText = style({
  opacity: '0',
  fontSize: '1px',
  fontWeight: '500',
  transition: 'all ease-in-out 0.5s',
  selectors: {
    [`${Btn}:hover > &`]: {
      opacity: '1',
      fontSize: '15px',
    },

    [`${wapperCard}:hover > &`]: {
      opacity: '1',
      fontSize: '15px',
    },
  },
})

export const imageHoverContract = createThemeContract({
  image: null,
  gif: null,
})
 const ImageContainer = style([
  {
    width: '100%',
    height: '64%',
    borderRadius: '10px',
    marginBottom: '12px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    //aspectRatio: '16 / 9',
  },
])
export const hoverImg = style([
  ImageContainer,
  {
    backgroundImage: imageHoverContract.image,
    selectors: {
      [`${wapperCard}:hover > &`]: {
        backgroundImage: imageHoverContract.gif,
      },
    },
  },
])
