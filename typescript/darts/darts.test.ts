import { describe, it, expect, xit } from '@jest/globals'
import { score } from './darts.ts'

describe('Darts', () => {
  it('Missed target', () => {
    expect(score(-9, 9)).toEqual(0)//zero
  })

  it('On the outer circle', () => {
    expect(score(0, 10)).toEqual(1)//one
  })

  it('On the middle circle', () => {
    expect(score(-5, 0)).toEqual(5)//five
  })

  it('On the inner circle', () => {
    expect(score(0, -1)).toEqual(10)//v
  })

  it('Exactly on centre', () => {
    expect(score(0, 0)).toEqual(10)//v
  })

  it('Near the centre', () => {
    expect(score(-0.1, -0.1)).toEqual(10)//v
  })

  it('Just within the inner circle', () => {
    expect(score(0.7, 0.7)).toEqual(10)//v
  })

  it('Just outside the inner circle', () => {
    expect(score(0.8, -0.8)).toEqual(5)//five
  })

  it('Just within the middle circle', () => {
    expect(score(-3.5, 3.5)).toEqual(5)//five
  })

  it('Just outside the middle circle', () => {
    expect(score(-3.6, -3.6)).toEqual(1)//one
  })

  it('Just within the outer circle', () => {
    expect(score(-7.0, 7.0)).toEqual(1)//one
  })//

  it('Just outside the outer circle', () => {
    expect(score(7.1, -7.1)).toEqual(0) //zero
  })

  it('Asymmetric position between the inner and middle circles', () => {
    expect(score(0.5, -4)).toEqual(5)// five
  })
})
