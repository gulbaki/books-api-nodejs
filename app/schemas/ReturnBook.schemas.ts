import { number, object, string } from "@hapi/joi";

export const returnBook = object().keys({
    score: number().required(),
});


