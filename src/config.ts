import { InjectionToken } from '@angular/core';
import { Answer } from './app/shared/answer';

export const CONFIG = new InjectionToken<Config>('CONFIG');

export interface Party {
    name: string;
};

export interface Thesis {
    image: string;
    category: string;
    thesis: string;
    description?: string;
    evaluation: { [party: string]: Answer };
};

export interface Config {
    logo: string,
    welcome_text: string,
    parties: { [key: string]: Party };
    theses: Thesis[];
};
