let outfits = [{
  isOutfitCard: true,
  id: 'addCard',
}];
const outfitRecord = {};

const updateOutfits = (newOutfits) => {
  outfits = newOutfits;
  for (let i = 0; i < outfits.length; i += 1) {
    outfitRecord[outfits[i].id] = outfits[i].id;
  }
  return 'success';
};

const addOutfit = (outfit) => {
  if (outfitRecord[outfit.id] === undefined) {
    outfits.push(outfit);
    outfitRecord[outfit.id] = outfit.id;
    return outfit;
  }
  return [];
};

const deleteOutfit = (outfitId) => {
  if (outfitRecord[outfitId] !== undefined) {
    delete outfitRecord[outfitId];
    outfits = outfits.filter((outfit) => outfit.id !== outfitId);
  }
  return outfits;
};

const getOutfits = () => outfits;

module.exports.addOutfit = addOutfit;
module.exports.getOutfits = getOutfits;
module.exports.deleteOutfit = deleteOutfit;
module.exports.updateOutfits = updateOutfits;
