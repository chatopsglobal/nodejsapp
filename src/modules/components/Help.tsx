import * as React from "react";
import { } from "react-router"

/**This component is created as a sample for
 * routing and page navigation implementation
**/
export class Help extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="help">
                <div className="">
                    Routed to Help Page
                    <div className="help__caption">
                        Help Page
                    </div>
                </div>

                <br/>

                <div className="help help--modifier">
                    Repair Help
                    <div className="help__caption">
                        Here in the Sears PartsDirect repair help center, you'll find step-by-step instructions and videos for repairing kitchen and laundry appliances, small appliances, and lawn & garden equipment. If you're not sure what the problem is, our descriptions of symptoms can help you pinpoint the solution. If your appliance is flashing an error code, our error code tables explain what the code means and what the problem might be.  And Sears PartsDirect offers millions of replacement parts, making it easy to find the right part for your model.

To get started, scroll through the list below of the repair help categories and select the appliance or tool you need help with.
                    </div>
                </div>
            </div>
        )
    }
}
