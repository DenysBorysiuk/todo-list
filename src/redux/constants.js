export const statusFilters = Object.freeze({
  all: 'all',
  active: 'active',
  completed: 'completed',
});

// Используем метод Object.freeze() для того, чтобы «заморозить»
// объект значений фильтра и предотвратить
// случайное его изменение по ссылке в местах импорта.
