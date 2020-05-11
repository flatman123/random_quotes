import React from 'react';
import BaseLayout from './components/BaseLayout/BaseLayout';
import NextQuote from './containers/NextQuote/NextQuote';
import Header from './components/ToolBar/Header';
import Aux from './hoc/aux/aux';


function App() {
  return (
    <Aux>
      <Header />
      <BaseLayout>
        <NextQuote />
      </BaseLayout>
    </Aux>
  );
}

export default App;
