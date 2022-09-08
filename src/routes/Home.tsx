import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import Page from "../components/Page";
import * as Md from "../md/full";
import { Dashboard } from "@gooddata/sdk-ui-dashboard";
import { idRef } from "@gooddata/sdk-model";

const style = { height: 300 };
const dashboardRef = idRef("17bc51e0-a40e-44fb-b5fa-2600d79d5efa");

const Home: React.FC = () => {
    return <Page>
        <div style={style}>
            <InsightView insight={Md.Insights.Sumof}/>
        </div>
        <Dashboard dashboard={dashboardRef}/>;
    </Page>;
};

export default Home;
