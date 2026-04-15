/* export function clearDishIds(onConfirm: () => void): void {
  const saved = localStorage.getItem('dishIds');
  if (saved) {
    onConfirm();
  }
} */

export function hasStoredDishIds(): boolean {
  return !!localStorage.getItem('dishIds');
}
