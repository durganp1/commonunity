  
const sequelize = require('../config/connection');
const { Post, Member, Comment, Likes } = require('../models');
const router = require('express').Router();


router.get('/', (req, res) => {
    console.log(req.session);
    Post.findAll({
        // where: {
        //     member_zipcode: req.session.member_zipcode
        // },
      attributes: [
        'id',
        'post_message',
        'title',
        'created_at'
        //[sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)'), 'like_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'created_at'],
          include: {
            model: Member,
            attributes: ['username', 'id']
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
        res.render('homepage', { posts,
        loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/yourpage', (req, res) => {
  if (req.session.loggedIn) {
    // res.redirect('/');
    res.render('yourpage.handlebars');
    // return;
}
    

});

//attempt to render calendar-breaks server
router.get('/calendar', (req, res) => {
  if (req.session.loggedIn) {
    // res.redirect('/');
    res.render('./partials/calendar');
    // return;
}
    

 });



router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'post_message',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)'), 'like_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'created_at'],
          include: {
            model: Member,
            attributes: ['username', 'id']
          }
        },
        {
          model: Member,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        const post = dbPostData.get({ plain: true });
  
        res.render('post', { post,
        loggedIn: req.session.loggedIn });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;