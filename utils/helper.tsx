export const trimPost = (post:string,num:number)=>{  
    let words = post.split(" ");
    let excerpt = "";
    if (words.length > num) {
      for (let i = 0; i < num; i++) {
        excerpt += words[i] + " ";
      }
    } else {
      excerpt = post;

    }
    return excerpt
    }