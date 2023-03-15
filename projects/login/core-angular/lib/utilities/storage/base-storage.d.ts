import { IStorageService } from "./storage.interface";
export declare class BaseStorage implements IStorageService {
    protected readonly _storage: Storage;
    constructor(storage: Storage);
    setData(key: string, value: any): void;
    removeData(key: string): void;
    getData<T = object>(key: string): T;
}
