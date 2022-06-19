/* @refresh reload */
import { render } from 'solid-js/web'
import 'tailwindcss/tailwind.css'
import './index.css'
import App from './App'
import { LayoutDefault } from './layouts/default'

render(() => <LayoutDefault><App/></LayoutDefault>, document.getElementById('root') as HTMLElement)
