import { createContext, useState } from "react";

export const WishListContext = createContext();

export const WishListContextProvider = ({children}) => {
  const [wishes, setWishes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <WishListContext.Provider value={[wishes, setWishes, setIsOpen, isOpen]}>
      {children}
    </WishListContext.Provider>
  )
}
