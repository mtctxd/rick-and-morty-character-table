import { filterOption } from '../models.ts';

const checkAndAdd = (
  selector: any,
  list: filterOption[],
  flag: {
    [key: string]: string;
  }
) => {
  if (!flag[selector]) {
    flag[selector] = selector;

    list.push({
      value: selector,
      label: selector,
    });
  }
};

export default checkAndAdd;
