import CacheService from "./CacheService";

const cache = CacheService.getInstance();
cache.set('João', '123456');

const cache2 = CacheService.getInstance();
console.log(cache2.get('João'));