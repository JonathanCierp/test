import { App } from 'vue'
import PrimeVue from 'primevue/config'

import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Menubar from 'primevue/menubar'
import PanelMenu from 'primevue/panelmenu'
import Sidebar from 'primevue/sidebar'

const components = [Avatar, Button, Calendar, Card, InputText, Menubar, PanelMenu, Sidebar]

export default (app: App) => {
  for (const component of components) {
    app.component(`P${component.name}`, component)
  }

  app.use(PrimeVue)
}
