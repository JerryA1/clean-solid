type Size = "" | "S" | "M" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>this[key]).length <= 0)
            throw Error(`The ${key} is empty`);
          break;
        case "number":
          if (<number>this[key] <= 0) throw Error(`The ${key} is invalid`);
          break;
        default:
          throw Error(`Unexpected type for ${key}`);
      }
    }

    return true;
  }

  toString() {
    // if (this.name.length <= 0) throw Error("The name is empty");
    // if (this.price <= 0) throw Error("The price is invalid");
    // if (this.size.length <= 0) throw Error("The size is invalid");
    if (!this.isProductReady()) return;

    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("blue large pants", 10, "M");
  console.log(bluePants.toString());
})();
