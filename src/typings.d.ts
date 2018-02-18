// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html
type TranslationValue = string | string[];
type Translation = { [section: string]: TranslationValue | Translation };
type Locale = { [domain: string]: Translation };

interface Node {
  after(element: Node): void;
}
