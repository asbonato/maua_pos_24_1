import { TextFormatter } from "./TextFormatter";

export class LowerTextFormatter implements TextFormatter{
    public format(text: string): void {
        console.log('[LowerTextFormatter]:', text.toLowerCase());
    }
}