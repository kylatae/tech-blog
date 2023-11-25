const router = require('express').Router();
const Message = require("../../models/Message");

router.post("/", async (req, res) => {
  if (req.session.loggedIn){
      try {
        const payload = await Message.create({
          'title': req.body.title, 
          'user_body': req.body.user_body, 
          'user_id': req.session.userID});
        res.status(200).json({ status: "success", payload });
      } catch (err) {
        res.status(500).json({ status: "error", payload: err.message });
    }
  }
});

router.post("/edit/:id", async (req, res) => {
  if (req.session.loggedIn)
    {
      try {
        const payload = await Message.update({
          'title': req.body.title, 
          'user_body': req.body.user_body, 
          'user_id': req.session.userID},
          {
            where:{
              id: req.params.id
            }
          });
        res.status(200).json({ status: "success", payload });
      } catch (err) {
        res.status(500).json({ status: "error", payload: err.message });
      }
    }
});

module.exports = router;