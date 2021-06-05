import wakatime from '../../../../../modules/wakatime/index.js';

const update = (req, res) => {
  const { id } = req.body;

  if (!global.db.mongoose.Types.ObjectId.isValid(id)) {
    res.send(global.listStatus.notExist());
    return null;
  }

  global.db.models.User.findById(id, async (err, doc) => {
    if (err) throw err;

    if (!doc) {
      res.send(global.listStatus.notExist());
      return null;
    }

    const resultWakatime = await wakatime.get('/api/v1/users/current/orgs/fabdc280-4d17-4f63-97af-39cbd64cf602/dashboards/6f4a75d8-0fae-42be-816d-d564a5981f4c/members');

    if (resultWakatime.data && resultWakatime.data.data) {
      const users = resultWakatime.data.data;

      for (let i = 0; i < users.length; i += 1) {
        if (users[i].email === doc.email) {
          // eslint-disable-next-line no-await-in-loop
          await global.db.models.User.updateOne({ _id: doc._id }, { wakatimeId: users[i].id });
          res.send(global.listStatus.success());
          return null;
        }
      }

      res.send(global.listStatus.notAccepted());
      return null;
    }

    res.send(global.listStatus.notSuccess());
    return null;
  });
};

export default update;
