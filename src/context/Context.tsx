import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export type ContextProps = {
  user: string | null;
  setUser: Dispatch<SetStateAction<string | null>>;
}

const Context = createContext<ContextProps | undefined>(undefined);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
