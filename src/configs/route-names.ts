const routeNames = {
  STAFF_LIST: 'staffs',
  STAFF_CREATE: 'create',
  STAFF_EDIT: 'edit/:id',
  TEST: 'test',
}

const STAFF_LIST = 'staffs'
const STAFF_CREATE = 'staffs/create'
const STAFF_EDIT = 'staffs/edit/:id'
const TEST = 'test'

type Type = {
  [key: string]: {
    selectedKeys: string[],
    openKeys: string[],
  }
}

export const mapActiveRoutes: Type = {
  [STAFF_LIST]: {
    selectedKeys: [STAFF_LIST],
    openKeys: [],
  },
  [STAFF_CREATE]: {
    selectedKeys: [STAFF_LIST],
    openKeys: []
  },
  [STAFF_EDIT]: {
    selectedKeys: [STAFF_LIST],
    openKeys: []
  },
  [TEST]: {
    selectedKeys: [TEST],
    openKeys: []
  },
}

export default routeNames