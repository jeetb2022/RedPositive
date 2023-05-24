
exports.Query = {
    hello: () => "World",
    products: (parent, {filter}, {db})=>{
        let filteredProducts = db.products;
        if(filter){
            if(filter.onSale===true){
                filteredProducts = filteredProducts.filter(product=>{
                    return product.onSale;
                })
            }
        }
        return filteredProducts;
    },
    product: (parent, args, context)=>{
        const products = context.products;
        const requiredProduct = products.find(product => product.id===args.id);
        if(!requiredProduct){return null}
        return requiredProduct;
    },
    catagories: (parent, args, {db})=>{
        
      return db.categories;
    },
    category: (parent,args,{db})=>{
      return (db.categories.find(category => category.id===args.id));
    }
}