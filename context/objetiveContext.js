import { useContext, createContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";

export const ObjetiveContext = createContext();

export const useObjetive = () => context = useContext(ObjetiveContext);

export const objetiveProviders = ({children}) => {
    return(
        <ObjetiveContext.objetiveProviders value= {{}}>
            {children}
        </ObjetiveContext.objetiveProviders>
    )
}