import { DecimalPipe } from '@angular/common';

export class Utils {
    // Function to add string to another string
    static addString(url: string, string: string): string {
        if (url?.indexOf(string) < 0) {
            return url?.replace(/(\.[^\.\/]+)$/, `${string}$1`);
        }

        return url;
    }

    // FNV-1a 32-bit hash to generate a short string (cache)
    static fnv1aHash(str: string): string {
        let h: number = 0x811c9dc5 >>> 0;
        for (let i = 0; i < str?.length; i++) {
            h ^= str.charCodeAt(i);
            h = Math.imul(h, 0x01000193) >>> 0;
        }

        return (h >>> 0).toString(16).padStart(8, '0');
    }

    // Function to format value to X decimal places and convert language patter
    static formatValue(value: number, decimalPlaces: number = 2, locale: string = 'pt-BR'): string | null {
        return new DecimalPipe(locale).transform(value, '1.' + decimalPlaces + '-' + decimalPlaces, locale);
    }

    // Function to concat labels of any hierarchy of parent
    static getLabelByHierarchy(event: any): any {
        let item: string[] = [];

        if (event && (event instanceof Object)) {
            event.label = this.getLabelParent(event, item)?.reverse()?.join(' > ');
        }

        return event.label;
    }

    // Function to get parent of labels
    static getLabelParent(item: any, finalItem: string[]): string[] {
        finalItem?.push(item?.name);

        if (item?.parent?.createdAt) {
            return this.getLabelParent(item?.parent, finalItem);
        }

        return finalItem;
    }

    // Function to get similarity of strings
    static levenshtein(stringOne: string, stringTwo: string): number {
        const dp: number[][] = Array.from({ length: stringOne?.length + 1 }, (_, i) =>
            Array.from({ length: stringTwo?.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
        );

        for (let i = 1; i <= stringOne?.length; i++) {
            for (let j = 1; j <= stringTwo?.length; j++) {
                const cost: number = stringOne[i - 1] === stringTwo[j - 1] ? 0 : 1;
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j - 1] + cost
                );
            }
        }

        return dp[stringOne?.length][stringTwo?.length];
    }

    // Function to get remove accent and special character and spaces
    static normalize(text?: string): string {
        return text?.toLowerCase()?.normalize('NFD')?.replace(/[\u0300-\u036f]/g, '')?.trim() ?? '';
    }

    // public static deleteAccent(string?: string): string {
    //     return string?.normalize("NFD")?.replace(/[\u0300-\u036f-]/g, '')?.toLowerCase() ?? '';
    // }

    // Function to remove string to another string
    static removeString(url?: string, strings?: string[]): string {
        const pattern: string | undefined = strings?.map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
        const regex: RegExp = new RegExp(`(${pattern})(?=\\.[^\\.\\/]+$)`, 'g');

        return url?.replace(regex, '') ?? '';
    }

    // Reorder recursivelly properties of object to secure it is a same order
    static reorderObjectKeysStringfy(input: any): string {
        const seen: WeakSet<any> = new WeakSet<any>();

        const stringify: Function = (obj: any): string => {
            if (obj === null) return 'null';
            if (obj === undefined) return 'undefined';
            if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj);
            if (typeof obj === 'string') return JSON.stringify(obj);

            if (Array.isArray(obj)) {
                return '[' + obj.map(item => stringify(item)).join(',') + ']';
            }

            if (typeof obj === 'object') {
                if (seen.has(obj)) return '"[Circular]"';
                seen.add(obj);
                const keys: string[] = Object.keys(obj).sort();
                const parts: string[] = keys.map(k => `${JSON.stringify(k)}:${stringify(obj[k])}`);
                seen.delete(obj);
                return '{' + parts.join(',') + '}';
            }

            return JSON.stringify(String(obj));
        };

        return stringify(input);
    }
}