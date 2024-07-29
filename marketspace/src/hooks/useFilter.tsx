import { useContext } from "react";
import { FilterProductContext } from "@contexts/FilterProductContext";

export function useFilter(){
    const contextData = useContext(FilterProductContext);

    return contextData;
}