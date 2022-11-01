import { Patch } from '~/types'
import { deepCopy } from '~/utils/deepCopy'
import { Utils } from '~/utils'
import create, { UseBoundStore } from 'zustand'
import createVanilla, { StoreApi } from 'zustand/vanilla'

export class StateManager<T extends Record<string, any>> {
  /**
   * id in indexDb
   */
  protected _idbId?: string

  /**
   * the current state
   */
  private _state: T

  /**
   * initial state
   */
  private initialState: T

  /**
   * a zustand store
   */
  private store: StoreApi<T>

  /**
   * a react hook store
   *
   */
  public readonly useStore: UseBoundStore<StoreApi<T>>

  constructor(initialState: T, id?: string) {
    this._idbId = id
    this._state = deepCopy(initialState)
    this.initialState = deepCopy(initialState)
    this.store = createVanilla(() => this._state)
    this.useStore = create(this.store)
  }

  /**
   * thi current state
   * @param patch
   * @param id
   * @returns
   */
  public get state(): T {
    return this._state
  }

  /**
   * apply a patch to the current state
   */
  patchState = (patch: Patch<T>, id?: string): this => {
    this.applyPatch(patch, id)

    return this
  }

  /**
   * apply a patch to the current state
   */
  private applyPatch = (patch: Patch<T>, id?: string) => {
    const next = Utils.deepMerge(this._state, patch)
    this._state = next
    this.store.setState(this._state, true)

    return this
  }
}
