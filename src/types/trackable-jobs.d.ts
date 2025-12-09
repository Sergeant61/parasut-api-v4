// Trackable Job Types

type TrackableJobAttributes = {
  job_type?: string
  status?: string
  progress?: number
  created_at?: string
  updated_at?: string
}

type TrackableJobData = {
  id?: string
  type: 'trackable_jobs'
  attributes: TrackableJobAttributes
}

type TrackableJobResponse = {
  data: {
    id: string
    type: 'trackable_jobs'
    attributes: TrackableJobAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type TrackableJobQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}
