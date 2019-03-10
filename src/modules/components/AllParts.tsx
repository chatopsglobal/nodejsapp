import * as React from "react";
import * as Queries from "../../services/api/Queries";
import { Query } from "react-apollo";

/**This component is created as an example for
 * Graphql API integration. This will be refined into a common function
 * and will be integrated through redux in subsequent PRs
**/
export class AllParts extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="jumbotron">
            <h3>Graphql Sample inetgration results --Listing all parts for the model 9030 </h3>
            <Query query={Queries.partSearchQuery} variables={{ q: "9030" }} >
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    if (!data) return <div>No data!!!</div>;
                    return (
                        <ul className="list-group">
                            Total Count  for parts: {data.totalCount}
                            {data.partSearch.parts.map(parts => <li className="list-group-item" key={parts.id}>
                                part number: {parts.number}
                                <dd> part name: {parts.title}</dd>
                                <dd>price: {parts.price}</dd>
                                <dd>Availability: {parts.availability}</dd>
                                <dd><img src={parts.images} style={{ height: 200, width: 200 }} /> </dd>
                            </li>)}

                        </ul>
                    );
                }}
            </Query>
        </div>);
    }
}
