export class Post {       
    created_at : string;
    constructor(public title: string, public content: string, public loveIts = 0) {
    }
}