import { useEffect } from 'react';
import './app.scss';

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      // eslint-disable-next-line no-undef
      const url = `http://localhost:${__SERVER_PORT__}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };

    fetchServerData();
  }, []);
  return <div className="app">Вот тут будет жить ваше приложение :)</div>;
}

export default App;
