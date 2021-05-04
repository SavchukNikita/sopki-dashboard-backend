export default {
  notExist: (data = null) => ({
    status: 'notExist',
    data,
  }),

  success: (data = null) => ({
    status: 'success',
    data,
  }),

  notSuccess: (data = null) => ({
    status: 'notSuccess',
    data,
  }),

  notAuth: (data = null) => ({
    status: 'notAuth',
    data,
  }),

  invalidMethod: (data = null) => ({
    status: 'invalidMethod',
    data,
  }),

  invalidSubmethod: (data = null) => ({
    status: 'invalidSubmethod',
    data,
  }),
};
