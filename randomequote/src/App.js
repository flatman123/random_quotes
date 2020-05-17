import React from 'react';
import BaseLayout from './components/BaseLayout/BaseLayout';
import QuoteArea from './containers/QuoteArea/QuoteArea';
import Header from './components/Header/Header';
import Aux from './hoc/aux/aux';


function App() {
  return (
    <Aux>
      <BaseLayout>
        <Header />
        <QuoteArea />
      </BaseLayout>
    </Aux>
  );
}

export default App;
