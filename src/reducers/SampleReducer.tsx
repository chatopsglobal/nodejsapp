import { ActionKeys } from "../shared/ActionKeys";
import printToConsole from "../shared/PrintToConsole";

/**A sample redux reducer for reference
 **/
export let buttonClickReducer = (state = {isButtonClicked : false}, action ) => {
    switch (action.type) {
        case ActionKeys.SAMPLE_BUTTON_CLICK :
            state.isButtonClicked = !state.isButtonClicked;
            printToConsole(state.isButtonClicked + "");
            return state;
        default:
            return state;
    }
}
