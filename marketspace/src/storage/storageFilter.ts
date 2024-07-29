import AsyncStorage from "@react-native-async-storage/async-storage";
import { FILTER_STORAGE } from "./storageConfig";
import { FilterProductDto } from "@dtos/FilterProductDto";


export async function storageSaveFilter(filter: FilterProductDto){
    await AsyncStorage.setItem(FILTER_STORAGE, JSON.stringify(filter));
}

export async function storageLoadFilter(){
    const storage = await AsyncStorage.getItem(FILTER_STORAGE);
    const filter: FilterProductDto = storage ? JSON.parse(storage) : {};
    return filter;
}

export async function storageDeleteFilter(){
    await AsyncStorage.removeItem(FILTER_STORAGE);
}