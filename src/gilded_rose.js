class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateItems() {
    for (var i = 0; i < this.items.length; i++) { // LE CODE PARCOURS CHAQUE ITEM
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') { // ICI CHECK DES ALIMENTS QUI SE PÉRIMENT
        if (this.items[i].quality > 0) { // SI ENCORE VALIDE
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') { // SI AUTRE QUE CE PRODUIT, LA QUALITÉ BAISSE
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else { // SI C'EST UN DES ITEMS QUI GAGNENT EN QUALITÉ
        if (this.items[i].quality < 50) { // SI SA QUALITÉ EST INFÉRIEURE A 50
          this.items[i].quality = this.items[i].quality + 1; // ON AUGMENTE LA QUALITÉ DE 1
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') { // ET SI EN PLUS C'EST UN TICKET BACKSTAGE
            if (this.items[i].sellIn < 11) { // SI IL RESTE 10 JOURS ON AUGMENTE DE 1 EN PLUS
              if (this.items[i].quality < 50) { // REVÉRIFICATION DE QUALITÉ INFÉRIEURE À 50 
                this.items[i].quality = this.items[i].quality + 1; // ON AUGMENTE ENCORE LA QUALITÉ DE 1
              }
            }
            if (this.items[i].sellIn < 6) { // SI IL RESTE 5 JOURS ON AUGMENTE DE 1 EN PLUS
              if (this.items[i].quality < 50) { // REVÉRIFICATION DE QUALITÉ INFÉRIEURE À 50 
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {  // MODIFICATION DE LA DATE DE PEREMPTION DU SULFURAS DE RAGNAROS
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) { // SI CET ITEM EST DÉPASSÉ
        if (this.items[i].name != 'Aged Brie') { // SI DIFFÉRENT DE BRIE
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') { // ET DIFFÉRENT DE BACKSTAGE PASSES
            if (this.items[i].quality > 0) { // SI SA QUALITÉ EST ENCORE BONNE
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') { // ET QUE C'EST AUTRE CHOSE QUE SULFURAS DE RAGNAROS
                this.items[i].quality = this.items[i].quality - 1; // QUALITÉ BAISSE
              }
            }
          } else {
            this.items[i].quality = 0; // SI CET ITEM EST BACKSTAGE PASSES ON MET LA QUALITÉ A 0
          }
        } else { //SI CET ITEM EST BRIE
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1; // AUGMENTATION DE LA QUALITÉ JUSQU'À 50
          }
        }
      }
    }

    return this.items; // RENVOIE DES ITEMS
  }
}

module.exports = {
  Item,
  Shop
}
