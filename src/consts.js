export const TASK_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed',
    PARTIAL: 'partial'
}

export const FILTERS_BUTTONS = {
    [TASK_FILTERS.ALL]: {
        literal: 'Todos',
        href: `/?filter=${TASK_FILTERS.ALL}`
    },
    [TASK_FILTERS.ACTIVE]: {
        literal: 'Activos',
        href: `/?filter=${TASK_FILTERS.ACTIVE}`
    },
    [TASK_FILTERS.COMPLETED]: {
        literal: 'Completados',
        href: `/?filter=${TASK_FILTERS.COMPLETED}`
    }
}