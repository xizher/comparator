/**
 * 比较器
 */
export declare class Comparator {

  /**
   * 构造函数：比较器
   * @param compareFunction 比较函数
   */
  constructor (compareFunction?: (a: any, b: any) => number)

  /**
   * 两者是否等于
   * @param a 比较值
   * @param b 比较值
   */
  equal (a: any, b: any) : boolean

  /**
   * 前者是否小于后者
   * @param a 比较值
   * @param b 比较值
   */
  lessThan (a: any, b: any) : boolean

  /**
   * 前者是否大于后者
   * @param a 比较值
   * @param b 比较值
   */
  greaterThan (a: any, b: any) : boolean

  /**
   * 前者是否小于等于后者
   * @param a 比较值
   * @param b 比较值
   */
  lessThanOrEqual (a: any, b: any) : boolean

  /**
   * 前者是否大于等于后者
   * @param a 比较值
   * @param b 比较值
   */
  greaterThanOrEqual (a: any, b: any) : boolean

  /**
   * 反转比较
   */
  reverse () : Comparator

}