//executar no terminal o nodemon escrevendo npm start

class Message{
    constructor(text = '', created = Date.now()){
        this.text = text;
        this.created = created;
    }
    get created(){
        return this._created;
        //return `${this.created} blablabla`;
    }
    set created(created){
        if (!created || isNaN(created)){
            throw new Error('Invalid created');
        }
        this._created = created;
    }
    toString(){
        //usando a crase em vez de aspas simples
        return `Message created at: ${this.created} - Text: ${this.text}`;
    }
}

class ImageMessage extends Message{
    constructor(text = '', created = Date.now(), url = '', thumbnail = ''){
        super(text, created);
        this.url = url;
        this.thumbnail = thumbnail;
    }
    toString(){
        return `Photo${super.toString()} ` +
                `- Url: ${this.url}` +
                `Thumbnail: ${this.thumbnail}`;
    }
}

var text = 'Some text';
var created = Date.now();

var duckTypeMessage = {
    text: text,
    created: created
};
console.log(duckTypeMessage);

var emptyMessage = new Message();
var textMessage = new Message('Yesterday message', Date.now() - 86400);
var photoMessage = new ImageMessage();

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);

console.log(emptyMessage instanceof ImageMessage);
console.log(textMessage instanceof ImageMessage);
