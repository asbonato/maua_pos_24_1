export class File {
    private readonly fileName: string;
    private readonly fileType: string;
    private readonly filePath: string;

    constructor(fileName: string, fileType: string, filePath: string){
        this.fileName = fileName;
        this.fileType = fileType;
        this.filePath = filePath;
    }
    public getFileName(): string{
        return this.fileName;
    }
    public getFileType(): string{
        return this.fileType;
    }
    public getFilePath(): string{
        return this.filePath;
    }
}