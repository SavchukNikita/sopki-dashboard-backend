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

  invalidFirstname: (data = null) => ({
    status: 'invalidFirstname',
    data,
  }),

  invalidLastname: (data = null) => ({
    status: 'invalidLastname',
    data,
  }),

  invalidUsername: (data = null) => ({
    status: 'invalidUsername',
    data,
  }),

  invalidPassword: (data = null) => ({
    status: 'invalidPassword',
    data,
  }),

  invalidSummary: (data = null) => ({
    status: 'invalidSummary',
    data,
  }),

  invalidDescription: (data = null) => ({
    status: 'invalidDescription',
    data,
  }),

  invalidType: (data = null) => ({
    status: 'invalidType',
    data,
  }),

  alreadyExist: (data = null) => ({
    status: 'alreadyExist',
    data,
  }),
};
