import { Patch } from '~/types'
import { deepCopy } from '~/utils/deepCopy'
import { Utils } from '~/utils'

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

  constructor(initialState: T, id?: string) {
    this._idbId = id
    console.log(deepCopy(initialState),'?initialState')
    this._state = deepCopy(initialState)
    this.initialState = deepCopy(initialState)
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
    this.applyPatch(patch,id)

    return this
  }

  /**
   * apply a patch to the current state
   */
  private applyPatch = (patch: Patch<T>, id?: string) => {
    const next = Utils.deepMerge(this._state,patch)
    this._state = next
    console.log(this._state,'?')
    return this
  }
}
