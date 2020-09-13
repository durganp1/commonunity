
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Member, Comment } = require('../models');
//const { post } = require('./api');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            member_id: req.session.member_id
        },
        attributes: [
            'id',
            'post_message',
            'title',
            'created_at',
            //[sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)'), 'like_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'member_id', 'created_at'],
                include: {
                    model: Member,
                    attributes: ['username']
                }
            },
            {
                model: Member,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('yourpage', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
});

// router.get('/:id', withAuth, (req, res) => {
//     Post.findOne({
//         where: {
//             member_id: req.session.member_id
//         },
//         attributes: [
//             'id',
//             'post_url',
//             'title',
//             'created_at',
//             [sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)'), 'like_count']
//         ],
//         include: [
//             {
//                 model: Comment,
//                 attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                 include: {
//                     model: User,
//                     attributes: ['username']
//                 }
//             },
//             {
//                 model: User,
//                 attributes: ['username']
//             }
//         ]
//     })
//     .then(dbPostData => {
//         const post = dbPostData.get({ plain: true });
//         res.render('edit-post', {
//             post,
//             loggedIn: true
//         });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// })

module.exports = router