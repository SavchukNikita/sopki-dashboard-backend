import wakatime from '../../../../../../../modules/wakatime/index.js';

const day = async (req, res) => {
  global.db.models.User.find({ wakatimeId: { $ne: null } }, async (err, docs) => {
    if (err) throw err;

    if (!docs.length) {
      res.send(global.listStatus.notExist());
      return null;
    }

    const result = [];

    for (let i = 0; i < docs.length; i += 1) {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();
      today = `${yyyy}.${mm}.${dd}`;

      // eslint-disable-next-line no-await-in-loop
      const wakatimeRes = await wakatime.get(`/api/v1/users/current/orgs/fabdc280-4d17-4f63-97af-39cbd64cf602/dashboards/6f4a75d8-0fae-42be-816d-d564a5981f4c/members/${docs[i].wakatimeId}/durations?date=${today}`);
      if (wakatimeRes.data && wakatimeRes.data.data) {
        let duration = 0;

        for (let j = 0; j < wakatimeRes.data.data.length; j += 1) {
          duration += wakatimeRes.data.data[j].duration;
        }

        const userObj = {
          firstname: docs[i].firstname,
          lastname: docs[i].lastname,
          _id: docs[i]._id,
          duration,
        };

        result.push(userObj);
      }
    }

    res.send(global.listStatus.success(result));
    return null;
  });
};

export default day;
