import { Plugin } from "../../types/options";
export interface Config {
    shorthand: boolean;
    dateFormat: string;
    altFormat: string;
    theme: string;
}
export declare type MonthElement = HTMLSpanElement & {
    dateObj: Date;
    $i: number;
};
declare function monthSelectPlugin(pluginConfig?: Partial<Config>): Plugin;
export default monthSelectPlugin;
