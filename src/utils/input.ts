import { TouchEvent } from 'react'
import { PointerInfo } from '~/types'

export class Inputs {
  pointer?: PointerInfo<string>

  touchMove<T extends string>(
    e: TouchEvent | TouchEvent,
    target: T
  ): PointerInfo<T> {
    return {
      pointerId: 1,
      target,
    }
  }
}

export const inputs = new Inputs()
