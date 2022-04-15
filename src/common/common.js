export function findRelation (inputRelationArray) {

inputRelationArray = inputRelationArray.map(v=>v.text)

if(inputRelationArray.length == 1) return inputRelationArray; 
// Config
const relationTree = {
    'father_brother': 'uncle',
    'uncle_father': 'grandpa'
  }
  
  // Find relation
  let currentRelation = inputRelationArray[0];
  inputRelationArray.shift();
  
  for(const relation of inputRelationArray) {
    currentRelation = relationTree[`${currentRelation}_${relation}`]
  }

  // Output
  return currentRelation;

}