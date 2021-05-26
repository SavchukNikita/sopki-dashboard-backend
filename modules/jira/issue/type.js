const types = [
  {
    id: '10006',
    name: 'story',
  },
  {
    id: '10007',
    name: 'task',
  },
  {
    id: '10009',
    name: 'bug',
  },
  {
    id: '10008',
    name: 'subTask',
  },
  {
    id: '10000',
    name: 'epic',
  },
];

function findType(name) {
  const findedType = types.find((type) => type.name === name);

  if (findedType) return { id: findedType.id };

  return null;
}

export default {
  findType,
};
