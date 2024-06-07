import { AudioFileHandler } from "./AudioFileHandler";
import { DocFileHandler } from "./DocFileHandler";
import { ExcelFileHandler } from "./ExcelFileHandler";
import { File } from "./File"
import { Handler } from "./Handler";
import { ImageFileHandler } from "./ImageFileHandler";
import { TextFileHandler } from "./TextFileHandler";
import { VideoFileHandler } from "./VideoFileHandler";

let file: File;
let textHandler: Handler = new TextFileHandler("Text Handler");
let docHandler: Handler = new DocFileHandler("Doc Handler");
let audioHandler: Handler = new AudioFileHandler("Audio Handler");
let excelHandler: Handler = new ExcelFileHandler("Excel Handler");
let videoHandler: Handler = new VideoFileHandler("Video Handler");
let imageHandler: Handler = new ImageFileHandler("Image Handler");

textHandler.setHandler(docHandler);
docHandler.setHandler(excelHandler);
excelHandler.setHandler(audioHandler);
audioHandler.setHandler(videoHandler);
videoHandler.setHandler(imageHandler);


file = new File('Abc.mp3', 'audio', 'C:');
textHandler.process(file);
console.log('');

file = new File('Abc.jpg', 'video', 'C:');
textHandler.process(file);
console.log('');

file = new File('Abc.doc', 'doc', 'C:');
textHandler.process(file);
console.log('');

file = new File('Abc.bat', 'bat', 'C:');
textHandler.process(file);