import { SingleValue } from "react-select";
import { filterOption, IAppState } from "../models.ts";

const manageFilterOptions = (state: IAppState, payload: {
    event: SingleValue<filterOption>,
    selectorName: string
}) => {
    const { event, selectorName } = payload;

      switch (selectorName) {
        case 'species':
          if (event?.value) {
            state.filterOptions.species = event.value;
            break;
          }
          state.filterOptions.species = '';
          break;
        case 'origin':
          if (event?.value) {
            state.filterOptions.origin = event.value;
            break;
          }
          state.filterOptions.origin = '';
          break;
        case 'status':
          if (event?.value) {
            state.filterOptions.status = event.value;
            break;
          }
          state.filterOptions.status = '';
          break;

        default:
          break;
      }
}

export default manageFilterOptions;