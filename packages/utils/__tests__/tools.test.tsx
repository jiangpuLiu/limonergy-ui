import { describe, it, expect } from 'vitest';
import { isObject, isHasProperty } from '../src/tools.ts'; // 请根据实际模块路径修改

describe('Test utility functions', () => {
    describe('isObject function', () => {
        it('should return true for valid objects', () => {
            expect(isObject({})).toBe(true);
            expect(isObject({ a: 1 })).toBe(true);
            expect(isObject(new Object())).toBe(true);
        });

        it('should return false for non-object types', () => {
            expect(isObject(null)).toBe(false);
            expect(isObject(undefined)).toBe(false);
            expect(isObject(42)).toBe(false);
            expect(isObject('string')).toBe(false);
            expect(isObject([])).toBe(false); // 数组不算对象
        });
    });

    describe('isHasProperty function', () => {
        it('should return true if object has the property', () => {
            const obj = { a: 1, b: 2 };
            expect(isHasProperty(obj, 'a')).toBe(true);
            expect(isHasProperty(obj, 'b')).toBe(true);
        });

        it('should return false if object does not have the property', () => {
            const obj = { a: 1 };
            expect(isHasProperty(obj, 'b')).toBe(false);
            expect(isHasProperty(obj, 'c')).toBe(false);
        });

        it('should return false for non-object inputs', () => {
            expect(isHasProperty(42, 'a')).toBe(false);
            expect(isHasProperty(null, 'a')).toBe(false);
            expect(isHasProperty('string', 'a')).toBe(false);
        });
    });
});