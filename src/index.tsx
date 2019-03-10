/**
 * ======================================
 * This the root component for your app.
 * ======================================
 */
import * as React from "react";
import * as ReactDOM from "react-dom";

import { PageContainer } from "./modules/components/PageContainer";

ReactDOM.render(
    <PageContainer />,
    document.getElementById("app")
);
