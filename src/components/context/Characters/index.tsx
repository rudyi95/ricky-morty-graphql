import React, { BaseSyntheticEvent, createContext, useState } from "react";

interface IProps {
  pickCardHandler: (e: BaseSyntheticEvent) => void;
}

export const CharactersContext = createContext<ICharactersContext & IProps>({
  openModal: false,
  openModalHandler: () => {},
  cardId: null,
  pickCardHandler: () => {},
});

export const CharactersContextProvider: React.FC<any> =
  ({ children }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [cardId, setCardId] = useState<Nullable<number>>(null);

    const openModalHandler = () => {
      setOpenModal(!openModal);
    };

    const pickCardHandler = (e: BaseSyntheticEvent) => {
      const { id } = e.currentTarget;
      setCardId(+id);
      openModalHandler();
    };

    return (
      <CharactersContext.Provider
        value={{
          openModal,
          openModalHandler,
          cardId,
          pickCardHandler,
        }}
      >
        {children}
      </CharactersContext.Provider>
    );
  };
