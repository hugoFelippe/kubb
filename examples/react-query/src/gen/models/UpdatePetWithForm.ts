// version: 1.0.11
/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export type UpdatePetWithFormPathParams = {
  /**
   * @description ID of pet that needs to be updated
   * @type integer, int64
   */
  pet_id: number
}

export type UpdatePetWithFormQueryParams = {
  /**
   * @description Name of pet that needs to be updated
   * @type string | undefined
   */
  name?: string
  /**
   * @description Status of pet that needs to be updated
   * @type string | undefined
   */
  status?: string
}

/**
 * @description Invalid input
 */
export type UpdatePetWithForm405 = any

export type UpdatePetWithFormMutationResponse = any

export type UpdatePetWithFormMutation = {
  Response: any
  PathParams: UpdatePetWithFormPathParams
  QueryParams: UpdatePetWithFormQueryParams
  Errors: UpdatePetWithForm405
}