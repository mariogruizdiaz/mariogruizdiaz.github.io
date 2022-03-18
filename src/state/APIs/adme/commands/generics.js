
// Subscriptions

const genericSubscriptionCommand = (model) => `
subscription ${model}(
  $_id: ID!
  $observedFields: [${model}ObservableFields]!
) 
{ ${model} (
  _id:$_id, 
  observedFields: $observedFields
){
  success,
  data
}
}`;

export default {
    genericSubscriptionCommand
 };