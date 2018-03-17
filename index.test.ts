jest.mock('os-locale');
import * as osLocale from 'os-locale';
import getLocale from './index';

describe('browser', () => {
    afterEach(() => {
        Reflect.deleteProperty(global, 'navigator');
    });
    it('should return navigator.language', () => {
        const expected = 'zh_CN';
        (global as any).navigator = {
            language: expected,
        };
        expect(getLocale()).toBe(expected);
    });
    it('should return undefined', () => {
        (global as any).navigator = {};
        expect(getLocale()).toBeUndefined();
    });
});

describe('node', () => {
    it('should call os-locale function', () => {
        getLocale();
        expect(osLocale.sync.mock.calls.length).toBe(1);
    });
});
