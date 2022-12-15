import {
  Button,
  Header,
  Main,
  MessageBox,
  Message,
  Aside,
  Container,
  Menu,
  Scrollbar,
  Submenu,
  MenuItem,
  MenuItemGroup,
} from 'element-ui'

const element = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Header)
    Vue.use(Main)
    Vue.use(Aside)
    Vue.use(Container)
    Vue.use(Menu)
    Vue.use(Scrollbar)
    Vue.use(Submenu)
    Vue.use(MenuItem)
    Vue.use(MenuItemGroup)

    Vue.prototype.$msgbox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
    Vue.prototype.$confirm = MessageBox.confirm
    Vue.prototype.$prompt = MessageBox.prompt
    Vue.prototype.$message = Message
  },
}

export default element
