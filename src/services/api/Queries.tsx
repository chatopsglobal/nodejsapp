import gql from "graphql-tag";

export const QUERY_PARAM_TYPE_Q = "q";
export const QUERY_PARAM_TYPE_ID = "id";

/** API Queries to be added here */

export const modelsAndPartsSearchQuery = gql`
  query combinedQuery($q: String!){
    modelSearch(q: $q) {
      totalCount,
      models {id,number,title,brand{name},vocabularies{name},partCount}
    },
    partSearch(q: $q) {
      totalCount,
      parts{ id, number, title, divisionId, sourceId, images, divisionDescription, price, availability, substitute, returnable, subscribable, otcStockIndicator, restrictions}
    }
  }`;

export const partSearchQuery = gql`
query partSearch($q: String!) {
    partSearch(q: $q) {
      totalCount,
      parts{ id, number, title, divisionId, sourceId, images, divisionDescription, price, availability, substitute, returnable, subscribable, otcStockIndicator, restrictions}
    }
  }`;

export const partDetailSearchQuery = gql`
  query getPart($id: ID!) {
    part(id: $id) {
        id,number,title,divisionId,sourceId,images,divisionDescription,price,availability,substitute,
        substitutePart{
            number,
            divisionId,
            sourceId
        },
        returnable,subscribable,otcStockIndicator,restrictions 
  }
}`;

export const modelDetailSearchQuery = gql`
  query getModel($id: ID!) {
    model(id: $id) {
        id, number,
        brand{
        name
        },
    vocabularies {
        name
    },
    schematicCount,
    partCount
  }
}`;

export const modelSearchQuery = gql`
  query modelSearch($q: String!) {
      modelSearch(q: $q) {
        totalCount,
        models{ id, number, title, 
          brand{
            name
            },
          vocabularies {
            name
          },
          partCount
        }
      }
  }`;
  