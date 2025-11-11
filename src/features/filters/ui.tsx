import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { Select, Input, Button } from 'antd';
import { model } from './model';
import { cities, companies, prepareDataForSelect } from './lib';
import styles from './styles.module.scss';

interface Props {
  className?: string;
}

export const Filters = ({ className }: Props) => {
  const [
    cityValue,
    companyValue,
    searchName,
    cityChanged,
    companyChanged,
    searchNameChanged,
    searchNameSubmited,
    filtersCleared,
  ] = useUnit([
    model.$city,
    model.$company,
    model.$searchName,
    model.cityChanged,
    model.companyChanged,
    model.searchNameChanged,
    model.searchNameSubmited,
    model.filtersCleared,
  ]);

  return (
    <form className={clsx(className)}>
      <div>
        <div>Фильтры:</div>
        <div className={styles.selects}>
          <Select
            className={styles.select}
            value={cityValue}
            onSelect={cityChanged}
            placeholder="Выберите город"
            options={prepareDataForSelect(cities)}
          />
          <Select
            className={styles.select}
            value={companyValue}
            onChange={companyChanged}
            placeholder="Выберите компанию"
            options={prepareDataForSelect(companies)}
          />
        </div>
      </div>
      <div className={styles.search}>
        <div>Поиск:</div>
        <Input.Search
          value={searchName ?? ''}
          onChange={(e) => searchNameChanged(e.target.value)}
          onSearch={searchNameSubmited}
          placeholder="Введите имя человека"
          enterButton="Найти"
          size="large"
        />
      </div>
      <Button onClick={filtersCleared}>Очистить фильтры</Button>
    </form>
  );
};
