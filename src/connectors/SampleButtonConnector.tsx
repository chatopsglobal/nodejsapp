import { connect } from "react-redux";
import { SampleButton } from "../modules/components/SampleButton";
import { ActionKeys } from "../shared/ActionKeys";
import initalState from "../store/SampleStore";
import printToConsole from "../shared/PrintToConsole";

/**Sample redux connector for reference
 **/
const sampleButtonClicked = () => {
    return {
        type: ActionKeys.SAMPLE_BUTTON_CLICK
    }
}

let mapDispatchToProps = (dispatch) => {
    printToConsole("In mapDispatchtoProps: value of Store" + initalState);
    return {
        actionButtonClick: () => {
            dispatch(sampleButtonClicked());
        }
    }
}

let mapStateToProps = (state) => {
    printToConsole("In mapStateToProps: value of Store" + JSON.stringify(state));
    return {
        todo: state.todo
    }
}

let SampleButtonConnector = connect(mapStateToProps, mapDispatchToProps)(SampleButton);

export default SampleButtonConnector;
