import type { FormType } from "@formio/react";
import React from "react";

export const useCustomConfig = (schema: FormType, config: unknown) => {
    return { schema };
};
