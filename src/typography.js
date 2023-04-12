// ----------------------------------------------------------------------

function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ xs, sm, md, lg, xl }) {
  return {
    "@media (max-width:600px)": {
      fontSize: pxToRem(xs),
      lineHeight: pxToRem(xs),
    },
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
      lineHeight: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
      lineHeight: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
      lineHeight: pxToRem(lg),
    },
    "@media (min-width:1400px)": {
      fontSize: pxToRem(xl),
      lineHeight: pxToRem(xl),
    },
  };
}

// const FONT_PRIMARY = "BRLNSR"; // Google Font
// const FONT_PRIMARY = "Mochiy Pop P One, sans-serif"; // Google Font
const FONT_PRIMARY = "Inter"; // Local Font
// const FONT_SECONDARY = "American";

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    ...responsiveFontSizes({ xs: 40, sm: 52, md: 58, lg: 64, xl: 64 }),
  },
  h2: {
    ...responsiveFontSizes({ xs: 32, sm: 40, md: 44, lg: 48, xl: 48 }),
  },
  h3: {
    ...responsiveFontSizes({ xs: 20, sm: 26, md: 30, lg: 32, xl: 36 }),
  },
  h4: {
    ...responsiveFontSizes({ xs: 18, sm: 20, md: 24, lg: 24, xl: 24 }),
  },
  h5: {
    ...responsiveFontSizes({ xs: 17, sm: 19, md: 20, lg: 22, xl: 22 }),
  },
  h6: {
    ...responsiveFontSizes({ xs: 16, sm: 18, md: 18, lg: 18, xl: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.8,
    fontSize: pxToRem(19),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(12),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
};

export default typography;
