const Contact = require("../models/Contact");

exports.addContact = async (req, res) => {
  try {
    const findContact = await Contact.findOne({ email: req.body.email });
    if (findContact) {
      return res.status(400).send("email already exists");
    }
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).send(newContact);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    // const first = () => new Promise((fulfill, reject) => fulfill("secret value"))
    // promise
    //   const allContacts = () =>
    //     new Promise((fulfill, reject) => fulfill(Contact.find()));
    //   allContacts()
    //       .then(res.status(200).send({ msg: "all contacts", allContacts })
    //       .catch((err) => console.log(err))
    //   );
    const allContacts = await Contact.find();
    res.status(200).send({ msg: "all contacts", allContacts });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getOneContact = async (req, res) => {
  try {
    const oneContact = await Contact.findById(req.params.id);
    res.status(200).send(oneContact);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.updateOne(
      { id: req.params.id },
      { $set: req.body } //req.body:{email:"aaaa", name:"aaaa", phone:55555}
    );
    res.status(200).send(updatedContact);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndRemove(req.params.id);
    res.status(200).send(deletedContact);
  } catch (error) {
    res.status(500).send(error);
  }
};
