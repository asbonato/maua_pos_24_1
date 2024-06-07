import { TextFormatter } from "./TextFormatter";

export class CapTextFormatter implements TextFormatter{
    public format(text: string): void {
        console.log('[CapTextFormatter]:', text.toUpperCase());
    }
}