export interface Observer {
    update(desc: string): void;
    subscribe(): void;
    unSubscribe(): void;
}