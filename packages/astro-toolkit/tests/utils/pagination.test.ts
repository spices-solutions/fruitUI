import { describe, expect, it } from 'vitest'
import { usePagination } from '../../src/utils'

describe('usePagination hook', () => {
  it('should return the pages without mutations if the total pages are less than or equal to 5', () => {
    const pagination = usePagination(1, 5)
    expect(pagination).toStrictEqual([1, 2, 3, 4, 5])
  })

  it('should return paginated list with mutations when current page is 2 and total pages are greater than 5', () => {
    const pagination = usePagination(2, 7)
    expect(pagination).toStrictEqual([1, 2, 3, null, 7])
  })
  
  it('should return paginated list with mutations when current page is 3 and total pages are greater than 5', () => {
    const pagination = usePagination(3, 7)
    expect(pagination).toStrictEqual([1, 2, 3, 4, null, 7])
  })
  
  it('should return paginated list with mutations when current page is 4 and total pages are 7', () => {
    const pagination = usePagination(4, 7)
    expect(pagination).toStrictEqual([1, null, 3, 4, 5, null, 7])
  })
  
  it('should return paginated list with mutations when current page is 5 and total pages are 7', () => {
    const pagination = usePagination(5, 7)
    expect(pagination).toStrictEqual([1, null, 4, 5, 6, 7])
  })
  
  it('should return paginated list with mutations when current page is 6 and total pages are 7', () => {
    const pagination = usePagination(6, 7)
    expect(pagination).toStrictEqual([1, null, 5, 6, 7])
  })
  
  it('should return paginated list with mutations when current page is 7 and total pages are 7', () => {
    const pagination = usePagination(7, 7)
    expect(pagination).toStrictEqual([1, null, 5, 6, 7])
  })
})
