import { TextFormatter } from "./TextFormatter";

export class TextEditor {
    private readonly textFormatter: TextFormatter;

    constructor(textFormatter: TextFormatter){
        this.textFormatter = textFormatter;
    }

    public publishText(text: string): void {
        this.textFormatter.format(text);
    }
}