export const TASKS_FILTERS = {
  ALL: "all",
  PENDING: "pending",
  COMPLETED: "completed",
} as const;

export const FILTERS_BUTTONS = {
  [TASKS_FILTERS.ALL]: {
    literal: "Todos",
    href: `/?filters=${TASKS_FILTERS.ALL}`,
  },

  [TASKS_FILTERS.PENDING]: {
    literal: "Pendientes",
    href: `/?filters=${TASKS_FILTERS.PENDING}`,
  },

  [TASKS_FILTERS.COMPLETED]: {
    literal: "Completados",
    href: `/?filters=${TASKS_FILTERS.COMPLETED}`,
  },
} as const;
