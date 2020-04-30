export interface Products {
    id: number,
    name: string,
    imageURL: string,
    description: string,
    price: string,
    category: {
        id: number,
        name: string
    }
}
