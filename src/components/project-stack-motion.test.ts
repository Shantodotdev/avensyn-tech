import { describe, expect, it } from 'vitest'

import { getProjectStackDepth } from './project-stack-motion'

describe('getProjectStackDepth', () => {
  it('keeps a card flat before the following project reaches the stack', () => {
    expect(getProjectStackDepth(1, 5, 0.25)).toEqual({
      scale: 1,
      translateY: 0,
      translateZ: 0,
      rotateX: 0,
      opacity: 1,
    })
  })

  it('adds one restrained depth layer as the following card arrives', () => {
    const depth = getProjectStackDepth(1, 5, 0.54)

    expect(depth.scale).toBeCloseTo(0.982)
    expect(depth.translateY).toBeCloseTo(-30)
    expect(depth.translateZ).toBeCloseTo(-42)
    expect(depth.rotateX).toBeCloseTo(-0.75)
    expect(depth.opacity).toBeCloseTo(0.955)
  })

  it('caps old cards at three depth layers', () => {
    expect(getProjectStackDepth(0, 5, 1)).toEqual({
      scale: 0.946,
      translateY: -90,
      translateZ: -126,
      rotateX: -2.25,
      opacity: 0.865,
    })
  })

  it('keeps the final project fully visible', () => {
    expect(getProjectStackDepth(4, 5, 1)).toEqual({
      scale: 1,
      translateY: 0,
      translateZ: 0,
      rotateX: 0,
      opacity: 1,
    })
  })
})
