import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

interface Context {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<Context>({
  setModalOpen: () => undefined,
  modalOpen: false,
});

export function ModalProvider({ children }: { children?: ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
