// @flow

const fetchGender = `
query sex($limit: Float
    $page: Float
    $orderBy: String
    $asc: Boolean
    $_id: ID
    $name: String
)
{
    sex(limit: $limit
        page: $page
        orderBy: $orderBy
        asc: $asc
        _id: $_id
        name: $name
    ){
        _id,
        name,
    }
}
`;

const fetchCategories = `
query categories($limit: Float
    $page: Float
    $orderBy: String
    $asc: Boolean
    $_id: ID
    $name: String
)
{
    categories(
        limit: $limit
        page: $page
        orderBy: $orderBy
        asc: $asc
        _id: $_id
        name: $name
    ){
        _id,
        name,
    }
}
`;

const fetchRegions = `
query regions($limit: Float
    $page: Float
    $orderBy: String
    $asc: Boolean
    $_id: ID
    $country: String
    $state: String
    $city: String
)
{
    regions(
        limit: $limit
        page: $page
        orderBy: $orderBy
        asc: $asc
        _id: $_id
        country: $country
        state: $state
        city: $city
    ){
        _id,
        country,
        state,
        city,
        iso2,
        iso3,
        thumbnail,
        geoPoint{type, coordinates}
    }
}
`;

export default {
    fetchGender,
    fetchRegions,
    fetchCategories
};
