export function throttle<T extends (...args: any[]) => void>(
  fn: T,
  wait: number
): (...args: Parameters<T>) => void {
  let time = Date.now();

  return function (this: any, ...args: Parameters<T>) {
    // Using 'any'
    if (time + wait - Date.now() < 0) {
      time = Date.now();
      return fn.apply(this, args);
    }
  };
}
