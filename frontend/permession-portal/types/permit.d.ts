export interface Permit {
  id: number
  applicant_name: string
  applicant_email: string
  permit_type: string
  application_status: 'Pending' | 'Approved' | 'Rejected'
  submitted_at: string
  created_at?: string
  updated_at?: string
}



