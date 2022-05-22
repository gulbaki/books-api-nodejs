import { number, object, string } from "@hapi/joi";

export const createUser = object().keys({
    name: string().required(),
});

