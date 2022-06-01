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
        this.items = this.items.map(item => {
                item = this.updateExpiration(item)
                item = this.updateQuality(item)
                return (item)
        })
        return (this.items)
    }

    updateExpiration(item) {
        item.sellIn += this.editExpirationNumber(item)
        return (item)
    }

    updateQuality(item) {
        (!this.isSulfuras(item) && item.sellIn <= 0) ? item.quality = 0 : item.quality += this.editQualityNumber(item)
        return (item)
    }

    editQualityNumber(item) {
        if (this.qualityGoesUp(item)) {
            if (item.quality >= 50) {
                return (0)
            }
            return (this.upgradeQuality(item))
        } else if (item.name.includes('Conjured')) {
            return (-2)
        }
        return (-1)
    }

    editExpirationNumber(item) {
        return (this.isSulfuras(item))? 0 : -1
    }

    qualityGoesUp(item) {
        return ((this.isAgedBrie(item) || this.isBackstagePasses(item) || this.isSulfuras(item)))
    }

    upgradeQuality(item) {
        let result = 1
        if (item.sellIn <= 5 && !this.isAgedBrie(item)) {
            result = (3)
        } else if (item.sellIn <= 10 && !this.isAgedBrie(item)) {
            result = (2)
        }
        return ( this.compareToHighest(result, item.quality) )
    }

    isAgedBrie(item) {
        return ( item.name.includes('Aged Brie') )
    }

    isBackstagePasses(item) {
        return  ( item.name.includes('Backstage passes') )
    }

    isSulfuras(item) {
        return ( item.name.includes('Sulfuras') )
    }

    compareToHighest(number, quality) {
        return ( quality + number > 50 ? 50 - quality : number )
    }
  }
  
  module.exports = {
    Item,
    Shop
  }
  