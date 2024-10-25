const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return  blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
    return  blogs.reduce((max, blog) => blog.likes > max.likes ? blog : max, blogs[0])
}

const mostBlogs = (blogs) => {
    if (blogs.length === 0) return undefined;
  
    const authorCount = {};
    blogs.forEach(blog => {
      authorCount[blog.author] = (authorCount[blog.author] || 0) + 1;
    });
      
    const mostBlogsAuthor = Object.keys(authorCount).reduce((a, b) => 
      authorCount[a] > authorCount[b] ? a : b
    );
  
    return {
      author: mostBlogsAuthor,
      blogs: authorCount[mostBlogsAuthor]
    };
  };
  
module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}