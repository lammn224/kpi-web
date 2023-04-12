export default [
  {
    title: 'Dashboard',
    icon: 'flaticon2-architecture-and-city',
    route: '/',
  },
  {
    title: 'Quản lý hệ thống',
    icon: 'flaticon-users',
    subMenus: [
      {
        title: 'Tài khoản người dùng',
        route: '/student',
        icon: 'flaticon2-user',
      },
      {
        title: 'Ứng dụng',
        route: '/school-user/parents',
        icon: 'flaticon2-user',
      },
      {
        title: 'Module',
        route: '/school-user/admin',
        icon: 'flaticon2-user',
      },
    ],
  },
]
