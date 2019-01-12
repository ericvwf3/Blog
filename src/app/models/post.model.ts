export class Post {
    public created_at : Date   
    constructor(public title: string, public content: string, public loveIts = 0) {
        this.created_at = new Date()
    }
}

// 
// created_at: new Date();