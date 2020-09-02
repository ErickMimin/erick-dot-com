import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import Home from './Pages/Home/Home';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';

const App: React.FC<{}> = () => {
	return (
		<ThemeProvider theme={Theme}>
			<CssBaseline />
			<Home/>
		</ThemeProvider>
	); 
}

export default App;
