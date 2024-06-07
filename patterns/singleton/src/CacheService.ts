class CacheService{
    private static instance: CacheService;
    private cache: Map<string, any>;

    private constructor(){
        this.cache = new Map();
    }

    public static getInstance(): CacheService{
        if(!CacheService.instance){
            CacheService.instance = new CacheService();
        }
        return CacheService.instance;
    }

    public get(key: string): any {
        return this.cache.get(key);
    }

    public set(key: string, value: any): void {
        this.cache.set(key, value);
    }
}

export default CacheService;