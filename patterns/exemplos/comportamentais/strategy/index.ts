import { CapTextFormatter } from "./CapTextFormatter";
import { LowerTextFormatter } from "./LowerTextFormatter";
import { TextEditor } from "./TextEditor";
import { TextFormatter } from "./TextFormatter";

let formatter: TextFormatter = new CapTextFormatter();
let editor: TextEditor = new TextEditor(formatter);
editor.publishText('Testing text in caps formatter');

formatter = new LowerTextFormatter();
editor = new TextEditor(formatter);
editor.publishText('Testing text in lower formatter');