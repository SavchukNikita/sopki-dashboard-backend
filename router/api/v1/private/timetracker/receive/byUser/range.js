import wakatime from '../../../../../../../modules/wakatime/index.js';

const day = async (req, res) => {
  const { body } = req;

  global.db.models.User.find({ wakatimeId: { $ne: null }, _id: body.userId }, async (err, docs) => {
    if (err) throw err;

    if (!docs.length) {
      res.send(global.listStatus.notExist());
      return null;
    }

    const doc = docs[0];

    const result = [];
    let totalDuration = 0;
    const dates = [];

    // eslint-disable-next-line no-await-in-loop
    const wakatimeRes = await wakatime.get(`/api/v1/users/current/orgs/fabdc280-4d17-4f63-97af-39cbd64cf602/dashboards/6f4a75d8-0fae-42be-816d-d564a5981f4c/members/${doc.wakatimeId}/summaries?range=${body.range}`);
    if (wakatimeRes.data && wakatimeRes.data.data) {
      let duration = 0;
      const days = [];

      console.log(wakatimeRes.data.data);

      for (let j = 0; j < wakatimeRes.data.data.length; j += 1) {
        const data = wakatimeRes.data.data[j];

        duration += data.grand_total.total_seconds;

        const obj = {
          total: data.grand_total.total_seconds,
          projects: data.projects,
          date: data.range.date,
        };

        if (dates.length < wakatimeRes.data.data.length) dates.push(data.range.date);

        days.push(obj);
      }

      const userObj = {
        firstname: doc.firstname,
        lastname: doc.lastname,
        _id: doc._id,
        days,
        duration,
      };

      totalDuration += duration;
      result.push(userObj);
    }

    res.send(global.listStatus.success({ dates, totalDuration, data: result }));
    return null;
  });
};

export default day;
