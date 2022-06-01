var { Shop, Item } = require('../src/gilded_rose_refacto.js');

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 39),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new Item("Conjured Mana Cake", 3, 6),
  new Item("Backstage passes to a TAFKAL80ETC concert", 1, 49),
  new Item("Elixir of the Mongoose", 1, 7),
];

describe("Gilded Rose", function () {

  const gildedRose = new Shop(items);
  const itemms = gildedRose.updateItems();

  it("should return the name", function () {
    expect(itemms[0].name).toEqual("+5 Dexterity Vest");
    expect(itemms[1].name).toEqual("Aged Brie");
    expect(itemms[3].name).toEqual("Sulfuras, Hand of Ragnaros")
    expect(itemms[8].name).toEqual("Conjured Mana Cake");
  });

  it("should lose 1 point of expiration", function () {
    expect(itemms[0].sellIn).toEqual(9);
    expect(itemms[1].sellIn).toEqual(1);
    expect(itemms[5].sellIn).toEqual(14)
    expect(itemms[8].sellIn).toEqual(2);
  });

  it("should not lose expiration", function () {
    expect(itemms[3].sellIn).toEqual(0);
  });

  it("should lose in quality", function () {
    expect(itemms[0].quality).toEqual(19);
    expect(itemms[8].quality).toEqual(4);
  });

  it("should gain in quality", function () {
    expect(itemms[1].quality).toEqual(1);
    expect(itemms[7].quality).toEqual(50);
    expect(itemms[6].quality).toEqual(41);
    expect(itemms[5].quality).toEqual(21);
  });

  it("should get equivalent quality", function () {
    expect(itemms[3].quality).toEqual(80);
  });

  it("should come to quality 0", function () {
    expect(itemms[9].quality).toEqual(0);
    expect(itemms[10].quality).toEqual(0);
  });
});
