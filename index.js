const App = {
  init() {
    const personForm = document.querySelector('form')
    personForm.addEventListener('submit', (ev) => this.handleSubmit(ev))
  },


  renderItem(name, value) {
    const item = document.createElement('li')
    item.innerHTML = `${name}: ${value}`
    return item
  },

  renderList(person) {
    const list = document.createElement('ul')
    Array.from(person).map((input, _i, _formElements) => {
      if (input.value) {
        let value = input.value
        const li = this.renderItem(input.name, value)
        list.appendChild(li)
      }
    })
    return list
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const list = this.renderList(form.elements)
    details.insertBefore(list, details.firstChild)
  },
}

App.init()