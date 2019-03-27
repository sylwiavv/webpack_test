//const root = document.createElement("div")
//root.innerHTML = `<p>Hello Webpack.</p>`
//document.body.appendChild(root)

import { groupBy } from "lodash-es"
import people from "./people"
import './style.scss'
import './image-example'

const managerGroups = groupBy(people, "manager")

const root = document.createElement("div")
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`
document.body.appendChild(root)

 [1,2,3,4].map(el => el * 2);