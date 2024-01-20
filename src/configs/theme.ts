import { ThemeConfig } from 'antd'
const colorPrimary:string = '#14b8a6'

const themeConfig:ThemeConfig = {
  token: {
    // colorPrimary: '#52c41a',
    colorPrimary: colorPrimary,
    borderRadius: 2,
  },
  components: {
    Card: {
      // headerBg: colorPrimary
    }
  }
}

export default themeConfig