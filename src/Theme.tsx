import { createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';
import OpenSans_Regular from './Resources/Fonts/OpenSans-Regular.ttf';
import OpenSans_Bold from './Resources/Fonts/OpenSans-Bold.ttf';
import OpenSans_SemiBold from './Resources/Fonts/OpenSans-SemiBold.ttf';
import OpenSans_Light from './Resources/Fonts/OpenSans-Light.ttf';

const OpenSansRegular: any = {
  fontFamily: 'OpenSans-Regular',
  fontDisplay: 'swap',
	fontStyle: 'normal',
  fontWeight: 400,
  src: `
	 url(${OpenSans_Regular}) format('truetype')
  `,
	};

const OpenSansBold: any = {
  fontFamily: 'OpenSans-Bold',
	fontDisplay: 'swap',
  fontWeight: 700,
  fontStyle: "normal",
	src: `
    url(${OpenSans_Bold}) format('truetype')
  `,
};

const OpenSansSemiBold: any = {
  fontFamily: 'OpenSans-SemiBold',
  fontStyle: 'normal',
	fontDisplay: 'swap',
  fontWeight: 600,
  src: `
    url(${OpenSans_SemiBold}) format('truetype')
  `,
};

const OpenSansLight: any = {
  fontFamily: 'OpenSans-Light',
  fontWeight: 300,
  fontDisplay: 'swap',
	fontStyle: "normal",
	src: `
    url(${OpenSans_Light}) format('truetype')
  `,
};

let Theme = createMuiTheme({
	spacing: 10,
	palette:{
		primary:{
			main: '#3e83d1',
		},
		secondary: {
			main: '#dd820d',
		},
		info:{
			main: '#d6d6d6',
		},
	},
  typography: {
    fontFamily: 'OpenSans-Regular, OpenSans-Bold, OpenSans-Light, OpenSans-SemiBold',
		fontSize: 12,
		h1: {
			fontFamily: 'OpenSans-Light',
			fontSize: "3rem",
		},
		h2: {
			fontFamily: 'OpenSans-Light',
			fontSize: '1.5rem',
		},
		h3: {
			fontFamily: 'OpenSans-Light',
			fontSize: "1rem",
		},
		h4: {
			fontFamily: 'OpenSans-SemiBold',
			fontSize: "1rem",
		},
  },
	overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [OpenSansRegular, OpenSansBold, OpenSansSemiBold, OpenSansLight],
      },
    },
  },
});

Theme = responsiveFontSizes(Theme);

export default Theme;
