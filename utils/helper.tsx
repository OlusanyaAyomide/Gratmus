export const trimPost = (post:string,num:number)=>{  
    let words = post.split(" ");
    let excerpt = "";
    if (words.length > num) {
      for (let i = 0; i < num; i++) {
        excerpt += words[i] + " ";
      }
    } else {
      console.log("hereee")
      excerpt = post;

    }
    return excerpt
    }