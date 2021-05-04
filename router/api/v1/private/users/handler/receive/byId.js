const byId = (req, res) => {
  const { id } = req.body;

  if (!global.db.mongoose.Types.ObjectId.isValid(id)) {
    res.send(global.listStatus.notExist());
    return null;
  }

  global.db.models.User.findById(id, (err, doc) => {
    if (err) throw err;

    if (!doc) {
      res.send(global.listStatus.notExist());
      return null;
    }

    res.send(global.listStatus.success(doc));
    return null;
  });
};

export default byId;
