const Member = require('./Member.js');
const Post = require('./Post');
const Comment = require('./Comment');
const Like = require('./Likes');

Member.hasMany(Post, {
    foreignKey: 'member_id'
});

Post.belongsTo(Member, {
    foreignKey: 'member_id'
});

Member.belongsToMany(Post, {
    through: Like,
    as: 'liked_posts',
    foreignKey: 'member_id'
});

Post.belongsToMany(Member, {
    through: Like,
    as: 'liked_posts',
    foreignKey: 'member_id'
});

Comment.belongsTo(Member, {
    foreignKey: 'member_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { Member, Post, Comment, Like }