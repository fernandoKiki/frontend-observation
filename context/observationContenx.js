import {createContext, useContext} from "react";

export const ObservationContext = createContext();

export const useObservation = () => context = useContext(ObservationContext);
   
export const observationProviders = ({children}) => (
    <ObservationContext value= {{}}>
        {children}
    </ObservationContext>
)