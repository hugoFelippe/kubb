/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */
import { z } from 'zod'

export const getThingsQueryParams = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(100).describe('Maximum number of things to return'),
  skip: z.coerce.number().int().min(0).default(0).describe('Number of things to skip'),
})

/**
 * @description A list of things
 */
export const getThings200 = z.object({
  items: z.array(z.lazy(() => thing)),
})

export const getThingsQueryResponse = z.lazy(() => getThings200)
