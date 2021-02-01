import { InjectionToken } from '@angular/core';

export const CONFIG = new InjectionToken<Config>('CONFIG');

export interface Party {
    name: string;
};

export interface Thesis {
    image: string;
    category: string;
    thesis: string;
    description?: string;
    evaluation: { [party: string]: boolean | null };
};

export interface Config {
    headline: string,
    welcome_text: string,
    parties: { [key: string]: Party };
    theses: Thesis[];
};
