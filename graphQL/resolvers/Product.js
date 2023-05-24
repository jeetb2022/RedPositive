exports.Product = {
    category: (parent, args, {db})=>{
        const categories = db.categories;
      const ans = categories.find(category => category.id===parent.categoryId);
      return ans;
    },
    review: (parent, args, {db})=>{
        const reviews = db.reviews;
       const ans = reviews.filter(review => review.productId===parent.id);
       return ans;
    }
  }