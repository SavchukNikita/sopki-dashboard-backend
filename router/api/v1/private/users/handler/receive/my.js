const my = (req, res) => {
  res.send(global.listStatus.success(req.user));
};

export default my;
