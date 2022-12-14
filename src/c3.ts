type PackOfGifts = Array<string>;
type Reindeers = Array<string>;

function distributeGifts(packOfGifts: PackOfGifts, reindeers: Reindeers) {
  const giftsWeight = packOfGifts.reduce((acc, gift) => acc + gift.length, 0);
  const reindeersWightLimit = reindeers.reduce((acc, reindeer) => acc + reindeer.length * 2, 0);
  const maximumGifts = Math.trunc(reindeersWightLimit / giftsWeight);

  return maximumGifts;
}
