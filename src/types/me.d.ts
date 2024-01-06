type IMe = {
  data: {
    id: string
    type: 'users'
    attributes: {
      name: string
      email: string
      is_confirmed: boolean
    }
    relationships: {
      user_roles: {
        data: Array<{
          id: string
          type: 'user_roles'
        }>
      }
      companies: {
        data: Array<{
          id: string
          type: 'companies'
        }>
      }
      profile: {
        data: {
          id: string
          type: 'profiles'
        }
      }
    }
  }
  included: Array<{
    id: string
    type: 'user_roles'
    attributes: object
    relationships: object
  }>
}
