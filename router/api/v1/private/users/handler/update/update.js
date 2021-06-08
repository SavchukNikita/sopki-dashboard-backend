const update = (req, res) => {
  const { body } = req;

  if (!global.db.mongoose.Types.ObjectId.isValid(body.id)) {
    res.send(global.listStatus.notExist());
    return null;
  }

  global.db.models.User.findById(body.id, async (err, doc) => {
    if (err) throw err;

    if (!doc) {
      res.send(global.listStatus.notExist());
      return null;
    }

    // eslint-disable-next-line max-len
    await global.db.models.User.updateOne({ _id: doc._id },
      {
        firstname: body.firstname || doc.firstname,
        lastname: body.lastname || doc.lastname,
        email: body.email || doc.email,
        role: body.role || doc.role,
      },

      (error, docUpd) => {
        if (error) {
          res.send(global.listStatus.notSuccess());
          return null;
        }

        if (!docUpd) {
          res.send(global.listStatus.notSuccess());
          return null;
        }

        global.db.models.User.findById(body.id, async (_error, usr) => {
          if (_error) throw err;

          if (!usr) {
            res.send(global.listStatus.notExist());
            return null;
          }

          res.send(global.listStatus.success(usr));
          return null;
        });

        return null;
      });
  });
};

export default update;
