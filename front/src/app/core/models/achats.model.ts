export class AchatItem {
    constructor(
        public name: string, 
        public quantity: string,
        public id: number){}
}

export class Achat {
    constructor(
        public category: string, 
        public items: AchatItem[],
        public id: number){}
}