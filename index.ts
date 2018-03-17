import * as osLocale from 'os-locale';
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

function getOsLocale(): string {
    return osLocale.sync();
}
