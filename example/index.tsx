import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useThrottle } from '../.';

const App = () => {
  const [text, setText] = React.useState('');
  const throttledSetText = useThrottle(text => setText(text));

  return (
      <div>
          <input type="text" onChange={e => throttledSetText(e.target.value)} />
          <br />
          <label>{text}</label>
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
