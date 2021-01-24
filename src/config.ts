import { InjectionToken } from '@angular/core';

export const CONFIG = new InjectionToken<Config>('CONFIG');

export interface Party {
    name: string;
};

export interface Thesis {
    short: string;
    long: string;
    evaluation: { [party: string]: boolean | null };
};

export interface Config {
    parties: { [key: string]: Party };
    theses: Thesis[];
};
