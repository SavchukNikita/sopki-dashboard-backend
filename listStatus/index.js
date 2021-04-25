export default {
  notExist: (data = null) => ({
    status: 'notExist',
    data,
  }),

  success: (data = null) => ({
    status: 'success',
    data,
  }),
};
