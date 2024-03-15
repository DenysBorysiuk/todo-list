import { useSelector, useDispatch } from 'react-redux';

import { Button } from '@/components';
import { setStatusFilter } from '@/redux/filtersSlice';
import { getStatusFilter } from '@/redux/selectors';

import { Status } from '@/types';

import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = (filter: Status) => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button selected={filter === 'all'} onClick={() => handleFilterChange('all')} type="button">
        All
      </Button>

      <Button
        selected={filter === 'active'}
        onClick={() => handleFilterChange('active')}
        type="button"
      >
        Active
      </Button>

      <Button
        selected={filter === 'completed'}
        onClick={() => handleFilterChange('completed')}
        type="button"
      >
        Completed
      </Button>
    </div>
  );
};
