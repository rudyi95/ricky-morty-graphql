import React, { createContext, useState } from "react";

interface IProps {
  setFilter: (e: IFilter) => void;
  setPages: (e: number) => void;
  setPage: (e: number) => void;
}

export const DashboardContext = createContext<IDashboardContext & IProps>({
  pages: 1,
  page: 1,
  filter: {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  },
  setFilter: () => {},
  setPages: () => {},
  setPage: () => {}
});

export const DashboardContextProvider: React.FC<any> = ({ children }) => {
  const [pages, setPages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  });

  return (
    <DashboardContext.Provider
      value={{
        page,
        setPage,
        pages,
        setPages,
        filter,
        setFilter,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
