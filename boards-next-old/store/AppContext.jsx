import { createContext, useState } from 'react';

const AppContext = createContext({
  'realm': 'eu',
});

export function AppContextProvider(props) {
  const [realm, setRealm] = useState('eu');
  const context = { realm, setRealm };
  return (
    <AppContext.Provider value={context}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;