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
    const lcArr = ['LC_ALL', 'LC_MESSAGES', 'LANG', 'LANGUAGE'];
    beforeEach(() => {
        lcArr.forEach(e => {
            process.env[e] = '';
        });
    });
    it('should return undefined', () => {
        expect(getLocale()).toBeUndefined();
    });
    it('should get locale from process.env', () => {
        const expected = 'zh_CN';
        lcArr.forEach(e => {
            lcArr.forEach(ele => {
                process.env[ele] = '';
            });
            process.env[e] = expected;
            expect(getLocale()).toBe(expected);
        });
    });
    it('should return locale string like language_region', () => {
        const expected = 'zh_CN';
        process.env.LC_ALL = 'zh_CN.UTF8';
        expect(getLocale()).toBe(expected);
    });
});
