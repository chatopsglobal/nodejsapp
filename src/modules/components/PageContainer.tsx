import * as React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Routes from "./Routes";
import { AllParts } from "./AllParts";
import { ApolloProvider } from "react-apollo";
import { createClient } from "../../services/api/GraphQLUtility"
import ButtonConnector from "../../connectors/SampleButtonConnector";
import { buttonClickReducer } from "../../reducers/SampleReducer";
import { Link } from "react-router-dom";
import './PageContainer.scss';

export let sampleStore = createStore(buttonClickReducer);
const client = createClient();
/**This component is created as a sample page container
 *  which needs to be changed and moved to new folder
 *  by the subsequent feature PRs **/
export class PageContainer extends React.Component {

    // this constructor is necessary to make the props work
    constructor(props) {
        super(props);
    }

    render() {
        return (<React.Fragment>
            <ApolloProvider client={client}>
                <Provider store={sampleStore}>

                    <React.Fragment>
                        <Router>
                            <div>
                                <Link to="/help">Help</Link><br />
                                <Link to="/parts/123">Parts</Link><br />
                                <div className="jumbotron">
                                    <Routes />
                                </div>
                            </div>
                        </Router>
                        <ButtonConnector />
                        <AllParts />
                    </React.Fragment>

                </Provider>
            </ApolloProvider>
        </React.Fragment>);
    }
}
