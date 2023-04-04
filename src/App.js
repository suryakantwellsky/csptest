import './App.css';
import { Button } from "antd";
import useScript from './useScript';
import { useState} from 'react';


function App() {
  const [uniqueMountId, setUniqueMountId] = useState('id');

  const onClick = () => {
    alert('Button Click works');
  }

  window.WellskyWidgetSettings = window.WellskyWidgetSettings || {};
  window.WellskyWidgetSettings.widgets = window.WellskyWidgetSettings.widgets || [];

  //useScript(`https://www.wscc.dev.wellsky.io/cfp/dev/widgets/formsWidgets.js`, []);
  useScript(`https://cc-dev-payer.d2psfzmaxfsyzj.amplifyapp.com/widgets/formsWidgets.js`,[]);
  useScript(`https://www.wscc.dev.wellsky.io/wsapps/dev/wellskyWidgets.js`, [uniqueMountId]);

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={onClick} >Test</Button>
      </header>
      <div id={uniqueMountId} style={{ background: 'rgb(0,0,0,0)' }}>
       
      </div>
    </div>
  );
}

export default App;
