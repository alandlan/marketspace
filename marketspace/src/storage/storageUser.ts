import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserDTO } from "src/dtos/UserDto";
import { USER_STORAGE } from "./storageConfig";

export async function storageSaveUser(user: UserDTO){
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
}

export async function storageLoadUser(){
    const storage = await AsyncStorage.getItem(USER_STORAGE);
    const user: UserDTO = storage ? JSON.parse(storage) : {};
    return user;
}

export async function storageDeleteUser(){
    await AsyncStorage.removeItem(USER_STORAGE);
}