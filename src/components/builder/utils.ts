import type { FormType } from "@formio/react";
import { customConfigKey, defaultCustomConfig } from "./config";

export const addCustomConfigKey = (schema: FormType) => {
    const components = schema.components.map((c) => {
        // only assign value if the key is undefined
        // TODO the nested keys might not be assigned
        if (!c[customConfigKey]) {
            c[customConfigKey] = defaultCustomConfig;
        }
        return c;
    });
    return { ...schema, components };
};
