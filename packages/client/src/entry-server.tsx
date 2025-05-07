import ReactDOM from 'react-dom/server';
import App from './app/App';

export default () => ReactDOM.renderToString(<App />);
