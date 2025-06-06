// version: 1.0.11
/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export type DeletePetPathParams = {
  /**
   * @description Pet id to delete
   * @type integer, int64
   */
  pet_id: number
}

export type DeletePetHeaderParams = {
  /**
   * @type string | undefined
   */
  api_key?: string
}

/**
 * @description Invalid pet value
 */
export type DeletePet400 = any

export type DeletePetMutationResponse = any

export type DeletePetMutation = {
  Response: any
  PathParams: DeletePetPathParams
  HeaderParams: DeletePetHeaderParams
  Errors: DeletePet400
}