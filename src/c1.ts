type Gift = string;
type Gifts = Array<Gift>;

function wrapping(gifts: Gifts): Gifts {
  const wrappedGifts: Gifts = gifts.map((gift: Gift): Gift => {
    const giftSize: number = gift.length + 2;
    const wrapper: string = '*'.repeat(giftSize);
    const wrappedGift: Gift = `${wrapper}\n*${gift}*\n${wrapper}`;
    return wrappedGift;
  });

  return wrappedGifts;
}
