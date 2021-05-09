export class AchatItem {
    constructor(
        public name: string, 
        public quantity: string){}
}

export class Achat {
    constructor(
        public category: string, 
        public items: AchatItem[]){}
}