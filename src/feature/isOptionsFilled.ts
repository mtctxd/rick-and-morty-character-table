import { IFilterOptions } from "../models.ts";

const isOptionsFiled = (options: IFilterOptions<string[]>) => {
    return Object.values(options).some((checkProperty) => checkProperty.length)
}

export default isOptionsFiled;