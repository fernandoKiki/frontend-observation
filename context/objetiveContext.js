import { useContext, createContext } from "react";

export const ObjetiveContext = createContext();

export const useObjetive = () => context = useContext(ObjetiveContext);

export const objetiveProviders = ({children}) => {
    return(
        <ObjetiveContext.objetiveProviders value= {{}}>
            {children}
        </ObjetiveContext.objetiveProviders>
    )
}