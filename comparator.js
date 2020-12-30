/**
 * 比较器
 */
export class Comparator {

  /**
   * 比较函数
   * @type { (a: *, b: *) => number }
   */
  #compare

  /**
   * 构造函数：比较器
   * @param { (a: *, b: *) => number } compareFunction 比较函数
   */
  constructor (compareFunction) {
    this.#compare = compareFunction || Comparator.defaultCompareFunction
  }

  /**
   * 两者是否等于
   * @param { * } a 比较值
   * @param { * } b 比较值
   */
  equal (a, b) {
    return this.#compare(a, b) === 0
  }

  /**
   * 前者是否小于后者
   * @param { * } a 比较值
   * @param { * } b 比较值
   */
  lessThan (a, b) {
    return this.#compare(a, b) < 0
  }

  /**
   * 前者是否大于后者
   * @param { * } a 比较值
   * @param { * } b 比较值
   */
  greaterThan (a, b) {
    return this.#compare(a, b) > 0
  }

  /**
   * 前者是否小于等于后者
   * @param { * } a 比较值
   * @param { * } b 比较值
   */
  lessThanOrEqual (a, b) {
    return this.#compare(a, b) <= 0
  }

  /**
   * 前者是否大于等于后者
   * @param { * } a 比较值
   * @param { * } b 比较值
   */
  greaterThanOrEqual (a, b) {
    return this.#compare(a, b) >= 0
  }

  /**
   * 反转比较
   */
  reverse () {
    const compareOriginal = this.#compare
    this.#compare = (a, b) => compareOriginal(b, a)
    return this
  }

  /**
   * 默认比较函数
   * @param { * } a 比较值
   * @param { * } b 比较值
   */
  static defaultCompareFunction (a, b) {
    if (a === b) {
      return 0
    }

    return a < b ? -1 : 1
  }

}
