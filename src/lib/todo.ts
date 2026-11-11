// Placeholders show in dev (and with SHOW_TODOS=1); the public build leaves them out.
export const showTodos = !import.meta.env.PROD || process.env.SHOW_TODOS === '1';
export const isTodo = (v: string) => v.startsWith('TODO');
