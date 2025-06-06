import type { FindPetsByStatusPathParams, FindPetsByStatus200, FindPetsByStatusQueryResponse } from '../../models/ts/petController/FindPetsByStatus.ts'
import { createPetFaker } from '../createPetFaker.ts'
import { faker } from '@faker-js/faker'

export function createFindPetsByStatusPathParamsFaker(data?: Partial<FindPetsByStatusPathParams>): FindPetsByStatusPathParams {
  return {
    ...{ step_id: faker.string.alpha() },
    ...(data || {}),
  }
}

/**
 * @description successful operation
 */
export function createFindPetsByStatus200Faker(data?: FindPetsByStatus200): FindPetsByStatus200 {
  return [...faker.helpers.multiple(() => createPetFaker(), { count: { min: 1, max: 3 } }), ...(data || [])]
}

/**
 * @description Invalid status value
 */
export function createFindPetsByStatus400Faker() {
  return undefined
}

export function createFindPetsByStatusQueryResponseFaker(data?: Partial<FindPetsByStatusQueryResponse>): FindPetsByStatusQueryResponse {
  return data || faker.helpers.arrayElement<any>([createFindPetsByStatus200Faker()])
}
