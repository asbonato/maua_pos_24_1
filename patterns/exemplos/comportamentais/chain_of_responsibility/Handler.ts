import { File } from "./File";

export interface Handler {
    setHandler(handler: Handler): void;
    process(file: File): void;
    getHandlerName(): string;
}