import * as browserLocale from 'browser-locale';

export default function getLocale(): string | undefined {
    if (typeof navigator !== 'undefined') {
        return getBrowserLocale();
    } else if (typeof process !== 'undefined') {
        return getOsLocale();
    } else {
        return undefined;
    }
}

function getBrowserLocale(): string | undefined {
    return browserLocale();
}

function getOsLocale(): string | undefined {
    const env = process.env;
    const localeStr = env.LC_ALL || env.LC_MESSAGES || env.LANG || env.LANGUAGE;
    const res = localeStr
        && localeStr.replace(/[.:].*/, '').replace('_', '-');
    return res ? res : undefined;
}
