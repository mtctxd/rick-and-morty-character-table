import { IFilterOptions } from '../models.ts';

const preparedOptions = (filterOptions: IFilterOptions) => {
  return Object.entries(filterOptions).reduce(
    (acc: IFilterOptions<string[]>, [parentKey, parentValue]) => {
      acc[parentKey] = Object.entries(parentValue)
        .filter(([key, value]) => value)
        .map((item) => item[0]);

      return acc;
    },
    {}
  );
};

export default preparedOptions;