
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let post1 = new Post('haa', 'yea', 'Pires');
console.log(post1);