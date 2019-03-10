import * as React from "react";
import {Route, Switch} from "react-router-dom";
import {Help} from "./Help";
import {Parts} from "./Parts";

/**This component contains sample routes that needs
 ** to be updated by the susequent feature related PRs **/

class Routes extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/help" component={Help} />
          <Route path="/parts/:partnum" exact component={Parts} />
        </Switch>
      </div>
    )
  }
}

export default Routes;
