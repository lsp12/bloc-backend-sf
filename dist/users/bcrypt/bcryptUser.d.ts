export declare const bcryptPassword: (password: string) => Promise<string>;
export declare const bcryptCompare: (password: string, hash: string) => Promise<boolean>;
