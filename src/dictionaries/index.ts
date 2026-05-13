import en from './en.json';
import ar from './ar.json';

const dictionaries = { en, ar };

export const getDictionary = (locale: string) => dictionaries[locale as keyof typeof dictionaries] || dictionaries.en;
