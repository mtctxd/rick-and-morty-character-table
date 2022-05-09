// style constants
export const SELECT_WIDTH = 140;
export const SELECT_FONT_COLOR = '#5f6569';
export const SELECT_FONT_SIZE = '0.75rem';
export const SELECT_PLACEHOLDER_COLOR = '#484F53';
export const SORT_ICON_DARKEN = '#C6C8C9'
export const SORT_ICON_LIGHTEN = '#5F6569'

export const selectStyles = {
  valueContainer: (base: any) => ({
    ...base,
    width: SELECT_WIDTH,
  }),
  group: (base: any) => ({
    ...base,
    width: SELECT_WIDTH,
  }),
  container: (base: any) => ({
    ...base,
    width: SELECT_WIDTH,

    fontSize: SELECT_FONT_SIZE,
  }),
  control: (base: any) => ({
    ...base,
    fontSize: SELECT_FONT_SIZE,
    width: SELECT_WIDTH,
  }),
  singleValue: (base: any) => ({
    ...base,
    width: SELECT_WIDTH,
  }),
  input: (base: any) => ({
    ...base,
    width: SELECT_WIDTH,
    color: SELECT_FONT_COLOR,
    '& input': {
      font: 'inherit',
    },
  }),
  placeholder: (base: any) => ({
    ...base,
    color: SELECT_PLACEHOLDER_COLOR,
  }),
};
