const remove = (req, res) => {
  const { body } = req;

  if (!global.db.mongoose.Types.ObjectId.isValid(body.id)) {
    res.send(global.listStatus.notExist());
    return null;
  }

  global.db.models.User.deleteOne({ _id: body.id }, async (err, result) => {
    if (err) throw err;

    if (!result) {
      res.send(global.listStatus.notSuccess());
      return null;
    }

    res.send(global.listStatus.success());
    return null;
  });
};

export default remove;
