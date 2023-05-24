
exports.Category={
    products: (parent, args,{db})=>{
      console.log(parent);
      const products = db.products;
      const ans = products.filter(product => product.categoryId===parent.id);
      return ans;
    }
  }