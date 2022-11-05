import create, { UseBoundStore } from 'zustand'
import createVanilla, { StoreApi } from 'zustand/vanilla'
import { Command, Patch } from '~/types'
import { Utils } from '~/utils'
import { deepCopy } from '~/utils/deepCopy'

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
    console.log(this._state, 'state')
    return this
  }

  /**
   *  update state use command
   * @returns
   */
  protected setState = (command: Command<T>, id = command.id) => {
    this.applyPatch(command.after, id)
    return this
  }
}
