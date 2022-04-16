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

export function generateWhatsAppSharingContent (entries) {

  let shareContent1 = `Quick Game :)`;
  let shareContent2 = `Which relation is your ${entries.map(v=>v.text).join(`'s `)} ?`;
  let shareContent3 = `1. Uncle`;
  let shareContent4 = `2. Cousin`;
  let shareContent5 = `3. Nephew`;
  let shareContent6 = ``;
  let shareContent7 = `Click below link to see correct answer !!`;
  let shareContent8 = `https://familian.vercel.app/?relations=${entries.map(v=>v.text).join(`%2b`)}`;

  return `${shareContent1}
  ${shareContent2}
  ${shareContent3}
  ${shareContent4}
  ${shareContent5}
  ${shareContent6}
  ${shareContent7}
  ${shareContent8}`;
}