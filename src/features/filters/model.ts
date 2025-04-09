import { createEvent, createStore, sample } from 'effector';
import { reset } from 'patronum/reset';

/* TODO: Переделать на effector-forms */

const $city = createStore<Nullable<string>>(null);
const $company = createStore<Nullable<string>>(null);
const $searchName = createStore<Nullable<string>>(null);

const cityChanged = createEvent<string>();
const companyChanged = createEvent<string>();
const searchNameChanged = createEvent<string>();
const searchNameSubmited = createEvent<string>();
const filtersCleared = createEvent();

const filtersChanged = sample({
  clock: [cityChanged, companyChanged, searchNameSubmited],
  source: [$city, $company, $searchName],
});

$city.on(cityChanged, (_, newCity) => newCity);
$company.on(companyChanged, (_, newCompany) => newCompany);
$searchName.on(searchNameChanged, (_, searchName) => searchName);

reset({
  clock: filtersCleared,
  target: [$city, $company, $searchName],
});

export const model = {
  $city,
  $company,
  $searchName,
  cityChanged,
  companyChanged,
  searchNameChanged,
  searchNameSubmited,
  filtersChanged,
  filtersCleared,
};
