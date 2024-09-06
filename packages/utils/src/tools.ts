export function isObject(value: any): boolean {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * 判断对象中是否存在某个属性
 * @param obj： 对象
 * @param key: 属性名
 */
export function isHasProperty(obj: any, key: string): boolean {
    return isObject(obj) && Object.prototype.hasOwnProperty.call(obj, key);
}