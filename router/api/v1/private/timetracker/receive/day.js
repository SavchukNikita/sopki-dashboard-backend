import wakatime from '../../../../../../modules/wakatime/index.js';

const day = async (req, res) => {
  const { date } = req.body;

  global.db.models.User.find({ wakatimeId: { $ne: null } }, async (err, docs) => {
    if (err) throw err;

    if (!docs.length) {
      res.send(global.listStatus.notExist());
      return null;
    }

    const result = [];

    for (let i = 0; i < docs.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const wakatimeRes = await wakatime.get(`/api/v1/users/current/orgs/fabdc280-4d17-4f63-97af-39cbd64cf602/dashboards/6f4a75d8-0fae-42be-816d-d564a5981f4c/members/${docs[i].wakatimeId}/durations?date=2021.06.03`);
      console.log(wakatimeRes);
      console.log(docs[i]);
      if (wakatimeRes.data.data) {
        result.push(wakatimeRes.data.data);
      }
    }

    res.send(global.listStatus.success(result));
    return null;
  });
};

export default day;
