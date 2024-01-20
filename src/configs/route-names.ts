const routeNames = {
  staff: {
    path: 'staffs',
    key: 'staffs',
    list: {
      path: '',
      key: 'staffs'
    },
    create: {
      path: 'create',
      key: 'staffs/create'
    },
    edit: {
      path: 'edit/:id',
      key: 'staffs/edit/:id'
    },
  },
  setting: {
    path: 'settings',
    key: 'settings',
    password: {
      path: 'password',
      key: 'settings/password'
    },
  },
}

export const mapActiveRoutes: {
  [key: string]: {
    selectedKeys: string[],
    openKeys: string[],
  }
} = {
  [routeNames.staff.list.key]: {
    selectedKeys: [routeNames.staff.list.key],
    openKeys: [],
  },
  [routeNames.staff.create.key]: {
    selectedKeys: [routeNames.staff.list.key],
    openKeys: []
  },
  [routeNames.staff.edit.key]: {
    selectedKeys: [routeNames.staff.list.key],
    openKeys: []
  },
  [routeNames.setting.password.key]: {
    selectedKeys: [routeNames.setting.password.key],
    openKeys: [routeNames.setting.key]
  },
}

export default routeNames