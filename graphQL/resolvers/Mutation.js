const {v4:uuid} = require('uuid');
exports.Mutation = {
    addCategory: (parent,{input},{db})=>{
        const newCategory = {
            id: uuid(),
            name:input.name
        }
        db.categories.push(newCategory);
        return newCategory;
    },
    deleteCategory: (parent,{id},{db})=>{
        db.categories = db.categories.filter(category => category.id !== id);
        db.products = db.products.map(product => {
            if(product.categoryId === id) return {
                ...product,categoryId:null
            }
            else product;
        });
        return true;
    }
}