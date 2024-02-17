export default class Product {
    constructor(
        id = '',
        title = '',
        image = '',
        price = '',
        description = '',
        category = '',
    ) {
        this.id = id
        this.title = title
        this.image = image
        this.price = price
        this.description = description
        this.category = category
    }

    static fromData (data) {
        return new Product(
            data.id,
            data.title,
            data.image,
            data.price,
            data.description,
            data.category,
        );
    }
}