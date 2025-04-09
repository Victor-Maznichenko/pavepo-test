export const prepareDataForSelect = (array: string[]) => {
  const values = array.map((str) => ({ value: str, label: str }));
  values.unshift({
    value: 'Выберите значение',
    label: '',
  });

  return values;
};

export const cities = [
  'Gwenborough',
  'Wisokyburgh',
  'McKenziehaven',
  'South Elvis',
  'Roscoeview',
  'South Christy',
  'Howemouth',
  'Aliyaview',
  'Bartholomebury',
  'Lebsackbury',
];

export const companies = [
  'Romaguera-Crona',
  'Deckow-Crist',
  'Romaguera-Jacobson',
  'Robel-Corkery',
  'Keebler LLC',
  'Considine-Lockman',
  'Johns Group',
  'Abernathy Group',
  'Yost and Sons',
  'Hoeger LLC',
];
