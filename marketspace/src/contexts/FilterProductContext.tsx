import { FilterProductDto } from "@dtos/FilterProductDto";
import { storageLoadFilter, storageSaveFilter } from "@storage/storageFilter";
import { createContext, useEffect, useState } from "react";

export type FilterProductProps = {
    setFilterProduct: (filter: FilterProductDto) => Promise<void>;
    clearFilter: () => Promise<void>;
    filter: FilterProductDto;
}

export const FilterProductContext = createContext<FilterProductProps>({} as FilterProductProps);

type FilterProductDtoProps = {
    children: React.ReactNode;
}

export function FilterProductContextProvider({children}:FilterProductDtoProps){
    const [filter, setFilter] = useState<FilterProductDto>({} as FilterProductDto);

    async function setFilterProduct(filter: FilterProductDto){
        setFilter(filter);

        await storageSaveFilter(filter);
    }

    async function loadFilter(){
        const filterStorage = await storageLoadFilter();
        setFilter(filterStorage);
    }

    async function clearFilter(){
        setFilter({} as FilterProductDto);
        await storageSaveFilter({} as FilterProductDto);
    }

    useEffect(() => {
        loadFilter();
    },[]);

    return (
        <FilterProductContext.Provider value={{
            setFilterProduct,
            clearFilter,
            filter
        }}>
            {children}
        </FilterProductContext.Provider>
    )
}