const logout = (req, res) => {
  req.session.destroy();
  req.logout();
  res.send(global.listStatus.success());
  return null;
};

export default logout;
