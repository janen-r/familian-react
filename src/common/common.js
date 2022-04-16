import { relationTree } from "./relationData";

export function findRelation (inputRelationArray) {

inputRelationArray = inputRelationArray.map(v=>v.text)

if(inputRelationArray.length == 1) return inputRelationArray;
  
  // Find relation
  let currentRelation = inputRelationArray[0];
  inputRelationArray.shift();
  
  for(const relation of inputRelationArray) {
    currentRelation = relationTree[`${currentRelation}_${relation}`]
  }

  // Output
  return currentRelation || '';

}

export function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}