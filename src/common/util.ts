export class Debounced {
  static use(fn: Function, delay: number = 200, immediate: boolean = false) {
    let timer:any = null
    return (...args: any[]) => {
      if (timer) clearInterval(timer)
      if (immediate) {
        if (!timer) fn.apply(this, args)
        timer = setTimeout(function () {
          timer = null
        }, delay)
      } else {
        timer = setTimeout(() => { fn.apply(this, args) }, delay)
      }
    }
  }
}