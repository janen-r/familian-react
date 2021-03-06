export const relationsList = ["aunt","brother","cousin","daughter","father","granddaughter","grandfather","grandmother","grandson","husband","mother","nephew","niece","sister","son","uncle","wife", "mother-in-law","father-in-law", "brother-in-law","sister-in-law","daughter-in-law","son-in-law"].sort();

export const relationTree = {
    "aunt_brother": "uncle",
    "aunt_brother-in-law": "uncle",
    "aunt_cousin": "uncle",
    "aunt_daughter": "cousin",
    "aunt_daughter-in-law": "",
    "aunt_father": "",
    "aunt_father-in-law": "",
    "aunt_granddaughter": "",
    "aunt_grandfather": "",
    "aunt_grandmother": "",
    "aunt_grandson": "",
    "aunt_husband": "uncle",
    "aunt_mother": "",
    "aunt_mother-in-law": "",
    "aunt_nephew": "",
    "aunt_niece": "",
    "aunt_sister": "sister",
    "aunt_sister-in-law": "",
    "aunt_son": "cousin",
    "aunt_son-in-law": "",
    "aunt_uncle": "",
    // "aunt_wife": "",
    "brother-in-law_aunt": "",
    "brother-in-law_brother": "",
    "brother-in-law_cousin": "",
    "brother-in-law_daughter": "",
    "brother-in-law_daughter-in-law": "",
    "brother-in-law_father": "",
    "brother-in-law_father-in-law": "",
    "brother-in-law_granddaughter": "",
    "brother-in-law_grandfather": "",
    "brother-in-law_grandmother": "",
    "brother-in-law_grandson": "",
    "brother-in-law_husband": "",
    "brother-in-law_mother": "",
    "brother-in-law_mother-in-law": "",
    "brother-in-law_nephew": "",
    "brother-in-law_niece": "",
    "brother-in-law_sister": "",
    "brother-in-law_sister-in-law": "",
    "brother-in-law_son": "",
    "brother-in-law_son-in-law": "",
    "brother-in-law_uncle": "",
    "brother-in-law_wife": "",
    "brother_aunt": "aunt",
    "brother_brother-in-law": "",
    "brother_cousin": "cousin",
    "brother_daughter": "",
    "brother_daughter-in-law": "",
    "brother_father": "father",
    "brother_father-in-law": "",
    "brother_granddaughter": "",
    "brother_grandfather": "grandfather",
    "brother_grandmother": "grandmother",
    "brother_grandson": "",
    // "brother_husband": "",
    "brother_mother": "mother",
    "brother_mother-in-law": "",
    "brother_nephew": "nephew",
    "brother_niece": "niece",
    "brother_sister": "sister",
    "brother_sister-in-law": "",
    "brother_son": "",
    "brother_son-in-law": "",
    "brother_uncle": "uncle",
    "brother_wife": "",
"cousin_aunt": "aunt",
"cousin_brother": "cousin",
"cousin_brother-in-law": "",
"cousin_daughter": "",
"cousin_daughter-in-law": "",
"cousin_father": "uncle",
"cousin_father-in-law": "",
"cousin_granddaughter": "",
"cousin_grandfather": "",
"cousin_grandmother": "",
"cousin_grandson": "",
"cousin_husband": "",
"cousin_mother": "aunt",
"cousin_mother-in-law": "",
"cousin_nephew": "",
"cousin_niece": "",
"cousin_sister": "cousin",
"cousin_sister-in-law": "",
"cousin_son": "nephew",
"cousin_son-in-law": "",
"cousin_uncle": "uncle",
"cousin_wife": "cousin-in-law",
"daughter-in-law_aunt": "",
"daughter-in-law_brother": "",
"daughter-in-law_brother-in-law": "",
"daughter-in-law_cousin": "",
"daughter-in-law_daughter": "",
"daughter-in-law_father": "",
"daughter-in-law_father-in-law": "",
"daughter-in-law_granddaughter": "",
"daughter-in-law_grandfather": "",
"daughter-in-law_grandmother": "",
"daughter-in-law_grandson": "",
"daughter-in-law_husband": "",
"daughter-in-law_mother": "",
"daughter-in-law_mother-in-law": "",
"daughter-in-law_nephew": "",
"daughter-in-law_niece": "",
"daughter-in-law_sister": "",
"daughter-in-law_sister-in-law": "",
"daughter-in-law_son": "",
"daughter-in-law_son-in-law": "",
"daughter-in-law_uncle": "",
"daughter-in-law_wife": "",
"daughter_aunt": "",
"daughter_brother": "",
"daughter_brother-in-law": "",
"daughter_cousin": "",
"daughter_daughter-in-law": "",
"daughter_father": "you",
"daughter_father-in-law": "",
"daughter_granddaughter": "",
"daughter_grandfather": "father",
"daughter_grandmother": "mother",
"daughter_grandson": "",
"daughter_husband": "",
"daughter_mother": "wife",
"daughter_mother-in-law": "",
"daughter_nephew": "",
"daughter_niece": "",
"daughter_sister": "daughter",
"daughter_sister-in-law": "",
"daughter_son": "grandson",
"daughter_son-in-law": "",
"daughter_uncle": "",
// "daughter_wife": "",
"father-in-law_aunt": "",
"father-in-law_brother": "",
"father-in-law_brother-in-law": "",
"father-in-law_cousin": "",
"father-in-law_daughter": "",
"father-in-law_daughter-in-law": "",
"father-in-law_father": "",
"father-in-law_granddaughter": "",
"father-in-law_grandfather": "",
"father-in-law_grandmother": "",
"father-in-law_grandson": "",
"father-in-law_husband": "",
"father-in-law_mother": "",
"father-in-law_mother-in-law": "",
"father-in-law_nephew": "",
"father-in-law_niece": "",
"father-in-law_sister": "",
"father-in-law_sister-in-law": "",
"father-in-law_son": "",
"father-in-law_son-in-law": "",
"father-in-law_uncle": "",
"father-in-law_wife": "",
"father_aunt": "",
"father_brother": "uncle",
"father_brother-in-law": "",
"father_cousin": "",
"father_daughter": "sister",
"father_daughter-in-law": "",
"father_father-in-law": "",
"father_granddaughter": "",
"father_grandfather": "",
"father_grandmother": "",
"father_grandson": "",
// "father_husband": "",
"father_mother": "grandmother",
"father_mother-in-law": "",
"father_nephew": "",
"father_niece": "",
"father_sister": "aunt",
"father_sister-in-law": "",
"father_son": "brother",
"father_son-in-law": "",
"father_uncle": "",
"father_wife": "mother",
"granddaughter_aunt": "",
"granddaughter_brother": "",
"granddaughter_brother-in-law": "",
"granddaughter_cousin": "",
"granddaughter_daughter": "",
"granddaughter_daughter-in-law": "",
"granddaughter_father": "",
"granddaughter_father-in-law": "",
"granddaughter_grandfather": "",
"granddaughter_grandmother": "",
"granddaughter_grandson": "",
"granddaughter_husband": "",
"granddaughter_mother": "",
"granddaughter_mother-in-law": "",
"granddaughter_nephew": "",
"granddaughter_niece": "",
"granddaughter_sister": "",
"granddaughter_sister-in-law": "",
"granddaughter_son": "",
"granddaughter_son-in-law": "",
"granddaughter_uncle": "",
"granddaughter_wife": "",
"grandfather_aunt": "",
"grandfather_brother": "",
"grandfather_brother-in-law": "",
"grandfather_cousin": "",
"grandfather_daughter": "",
"grandfather_daughter-in-law": "",
"grandfather_father": "",
"grandfather_father-in-law": "",
"grandfather_granddaughter": "",
"grandfather_grandmother": "",
"grandfather_grandson": "",
"grandfather_husband": "",
"grandfather_mother": "",
"grandfather_mother-in-law": "",
"grandfather_nephew": "",
"grandfather_niece": "",
"grandfather_sister": "",
"grandfather_sister-in-law": "",
"grandfather_son": "",
"grandfather_son-in-law": "",
"grandfather_uncle": "",
"grandfather_wife": "grandmother",
"grandmother_aunt": "",
"grandmother_brother": "",
"grandmother_brother-in-law": "",
"grandmother_cousin": "",
"grandmother_daughter": "",
"grandmother_daughter-in-law": "",
"grandmother_father": "",
"grandmother_father-in-law": "",
"grandmother_granddaughter": "",
"grandmother_grandfather": "",
"grandmother_grandson": "cousin",
"grandmother_husband": "grandfather",
"grandmother_mother": "",
"grandmother_mother-in-law": "",
"grandmother_nephew": "",
"grandmother_niece": "",
"grandmother_sister": "",
"grandmother_sister-in-law": "",
"grandmother_son": "",
"grandmother_son-in-law": "",
"grandmother_uncle": "",
"grandmother_wife": "",
"grandson_aunt": "",
"grandson_brother": "",
"grandson_brother-in-law": "",
"grandson_cousin": "",
"grandson_daughter": "",
"grandson_daughter-in-law": "",
"grandson_father": "",
"grandson_father-in-law": "",
"grandson_granddaughter": "",
"grandson_grandfather": "",
"grandson_grandmother": "",
"grandson_husband": "",
"grandson_mother": "",
"grandson_mother-in-law": "",
"grandson_nephew": "",
"grandson_niece": "",
"grandson_sister": "",
"grandson_sister-in-law": "",
"grandson_son": "",
"grandson_son-in-law": "",
"grandson_uncle": "",
"grandson_wife": "",
"husband_aunt": "",
"husband_brother": "",
"husband_brother-in-law": "",
"husband_cousin": "",
"husband_daughter": "daughter",
"husband_daughter-in-law": "",
"husband_father": "",
"husband_father-in-law": "",
"husband_granddaughter": "",
"husband_grandfather": "",
"husband_grandmother": "",
"husband_grandson": "",
"husband_mother": "",
"husband_mother-in-law": "",
"husband_nephew": "",
"husband_niece": "",
"husband_sister": "",
"husband_sister-in-law": "",
"husband_son": "son",
"husband_son-in-law": "",
"husband_uncle": "",
"husband_wife": "",
"mother-in-law_aunt": "",
"mother-in-law_brother": "",
"mother-in-law_brother-in-law": "",
"mother-in-law_cousin": "",
"mother-in-law_daughter": "",
"mother-in-law_daughter-in-law": "",
"mother-in-law_father": "",
"mother-in-law_father-in-law": "",
"mother-in-law_granddaughter": "",
"mother-in-law_grandfather": "",
"mother-in-law_grandmother": "",
"mother-in-law_grandson": "",
"mother-in-law_husband": "",
"mother-in-law_mother": "",
"mother-in-law_nephew": "",
"mother-in-law_niece": "",
"mother-in-law_sister": "",
"mother-in-law_sister-in-law": "",
"mother-in-law_son": "",
"mother-in-law_son-in-law": "",
"mother-in-law_uncle": "",
"mother-in-law_wife": "",
"mother_aunt": "",
"mother_brother": "uncle",
"mother_brother-in-law": "",
"mother_cousin": "uncle",
"mother_daughter": "sister",
"mother_daughter-in-law": "",
"mother_father": "grandfather",
"mother_father-in-law": "",
"mother_granddaughter": "",
"mother_grandfather": "",
"mother_grandmother": "",
"mother_grandson": "",
"mother_husband": "father",
"mother_mother-in-law": "",
"mother_nephew": "",
"mother_niece": "",
"mother_sister": "aunt",
"mother_sister-in-law": "",
"mother_son": "brother",
"mother_son-in-law": "",
"mother_uncle": "",
// "mother_wife": "",
"nephew_aunt": "",
"nephew_brother": "",
"nephew_brother-in-law": "",
"nephew_cousin": "",
"nephew_daughter": "",
"nephew_daughter-in-law": "",
"nephew_father": "",
"nephew_father-in-law": "",
"nephew_granddaughter": "",
"nephew_grandfather": "",
"nephew_grandmother": "",
"nephew_grandson": "",
"nephew_husband": "",
"nephew_mother": "",
"nephew_mother-in-law": "",
"nephew_niece": "",
"nephew_sister": "",
"nephew_sister-in-law": "",
"nephew_son": "",
"nephew_son-in-law": "",
"nephew_uncle": "",
"nephew_wife": "",
"niece_aunt": "",
"niece_brother": "",
"niece_brother-in-law": "",
"niece_cousin": "",
"niece_daughter": "",
"niece_daughter-in-law": "",
"niece_father": "",
"niece_father-in-law": "",
"niece_granddaughter": "",
"niece_grandfather": "",
"niece_grandmother": "",
"niece_grandson": "",
"niece_husband": "",
"niece_mother": "",
"niece_mother-in-law": "",
"niece_nephew": "",
"niece_sister": "",
"niece_sister-in-law": "",
"niece_son": "",
"niece_son-in-law": "",
"niece_uncle": "",
"niece_wife": "",
"sister-in-law_aunt": "",
"sister-in-law_brother": "",
"sister-in-law_brother-in-law": "",
"sister-in-law_cousin": "",
"sister-in-law_daughter": "",
"sister-in-law_daughter-in-law": "",
"sister-in-law_father": "",
"sister-in-law_father-in-law": "",
"sister-in-law_granddaughter": "",
"sister-in-law_grandfather": "",
"sister-in-law_grandmother": "",
"sister-in-law_grandson": "",
"sister-in-law_husband": "",
"sister-in-law_mother": "",
"sister-in-law_mother-in-law": "",
"sister-in-law_nephew": "",
"sister-in-law_niece": "",
"sister-in-law_sister": "",
"sister-in-law_son": "",
"sister-in-law_son-in-law": "",
"sister-in-law_uncle": "",
"sister-in-law_wife": "",
"sister_aunt": "aunt",
"sister_brother": "brother",
"sister_brother-in-law": "brother-in-law",
"sister_cousin": "cousin",
"sister_daughter": "",
"sister_daughter-in-law": "",
"sister_father": "father",
"sister_father-in-law": "",
"sister_granddaughter": "",
"sister_grandfather": "grandfather",
"sister_grandmother": "grandmother",
"sister_grandson": "",
"sister_husband": "",
"sister_mother": "mother",
"sister_mother-in-law": "",
"sister_nephew": "",
"sister_niece": "",
"sister_sister-in-law": "",
"sister_son": "",
"sister_son-in-law": "",
"sister_uncle": "uncle",
// "sister_wife": "",
"son-in-law_aunt": "",
"son-in-law_brother": "",
"son-in-law_brother-in-law": "",
"son-in-law_cousin": "",
"son-in-law_daughter": "",
"son-in-law_daughter-in-law": "",
"son-in-law_father": "",
"son-in-law_father-in-law": "",
"son-in-law_granddaughter": "",
"son-in-law_grandfather": "",
"son-in-law_grandmother": "",
"son-in-law_grandson": "",
"son-in-law_husband": "",
"son-in-law_mother": "",
"son-in-law_mother-in-law": "",
"son-in-law_nephew": "",
"son-in-law_niece": "",
"son-in-law_sister": "",
"son-in-law_sister-in-law": "",
"son-in-law_son": "",
"son-in-law_uncle": "",
"son-in-law_wife": "",
"son_aunt": "",
"son_brother": "son",
"son_brother-in-law": "",
"son_cousin": "",
"son_daughter": "granddaughter",
"son_daughter-in-law": "",
"son_father": "you",
"son_father-in-law": "",
"son_granddaughter": "",
"son_grandfather": "",
"son_grandmother": "",
"son_grandson": "",
// "son_husband": "",
"son_mother": "wife",
"son_mother-in-law": "",
"son_nephew": "",
"son_niece": "",
"son_sister": "daughter",
"son_sister-in-law": "",
"son_son-in-law": "",
"son_uncle": "cousin",
"son_wife": "",
"uncle_aunt": "",
"uncle_brother": "uncle",
"uncle_brother-in-law": "",
"uncle_cousin": "uncle",
"uncle_daughter": "cousin",
"uncle_daughter-in-law": "",
"uncle_father": "",
"uncle_father-in-law": "",
"uncle_granddaughter": "",
"uncle_grandfather": "",
"uncle_grandmother": "",
"uncle_grandson": "",
// "uncle_husband": "",
"uncle_mother": "",
"uncle_mother-in-law": "",
"uncle_nephew": "",
"uncle_niece": "",
"uncle_sister": "",
"uncle_sister-in-law": "",
"uncle_son": "cousin",
"uncle_son-in-law": "",
"uncle_wife": "",
"wife_aunt": "",
"wife_brother": "",
"wife_brother-in-law": "",
"wife_cousin": "",
"wife_daughter": "daughter",
"wife_daughter-in-law": "",
"wife_father": "",
"wife_father-in-law": "",
"wife_granddaughter": "",
"wife_grandfather": "",
"wife_grandmother": "",
"wife_grandson": "",
"wife_husband": "",
"wife_mother": "",
"wife_mother-in-law": "",
"wife_nephew": "",
"wife_niece": "",
"wife_sister": "",
"wife_sister-in-law": "",
"wife_son": "son",
"wife_son-in-law": "",
"wife_uncle": ""
}