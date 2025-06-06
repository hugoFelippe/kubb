/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export type notification = {
  /**
   * @type integer
   */
  id: number
  /**
   * @type string, date-time
   */
  createdAt: string
  /**
   * @type boolean
   */
  isSeen: boolean
} & (
  | (documentDisapprovedNotification & {
      notificationType: 'DOCUMENT_DISAPPROVED'
    })
  | (documentApprovedNotification & {
      notificationType: 'DOCUMENT_APPROVED'
    })
)
