/** Junta classes condicionais, ignorando valores vazios. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
