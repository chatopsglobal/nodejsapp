import * as React from "react";
import printToConsole from "../../shared/PrintToConsole";

/**This component is created to show a sample
 *  implementation for redux **/
export class SampleButton extends React.Component {

    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        printToConsole("Clicking on Sample Button !");
        this.props.actionButtonClick();
    }

    render() {
        return (<button onClick={this.onButtonClick}>Redux Sample</button>);
    }
}

export default SampleButton;
