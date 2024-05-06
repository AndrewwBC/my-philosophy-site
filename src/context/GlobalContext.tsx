import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface StateProps {
  name: string;
  darkTheme: boolean;
}

interface ContextProps {
  data: {
    name: string;
    darkTheme: boolean;
  };
  setData: Dispatch<SetStateAction<StateProps>>;
}

export const UserContext = createContext<ContextProps>({
  data: {
    name: "",
    darkTheme: false,
  },
  setData: useState,
});

interface GlobalContextProps {
  children: ReactNode;
}

export function GlobalContext({ children }: GlobalContextProps) {
  const [data, setData] = useState<StateProps>({
    name: "",
    darkTheme: false,
  });

  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
}
