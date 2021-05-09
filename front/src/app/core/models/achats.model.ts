export interface AchatItem {
    name: string,
    quantity: string
}

export interface Achat {
    category: string,
    items: AchatItem[]
}