import { number, object, string } from "@hapi/joi";

export const createBook = object().keys({
    name: string().required(),
});


