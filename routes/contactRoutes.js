const express = require("express");

const router = express.Router();

const {
  addContact,
  getAllContacts,
  getOneContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.get("/test", (req, res) => {
  res.send("testing routes");
});
router.post("/add", addContact);
router.get("/allContacts", getAllContacts);
router.get("/oneContact/:id", getOneContact);
router.put("/updateContact/:id", updateContact);
router.delete("/deleteContact/:id", deleteContact);
module.exports = router;
