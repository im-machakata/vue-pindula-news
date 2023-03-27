Vue.component('article-component', {
    template: `
      <div>
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
      </div>
    `,
    data() {
      return {
        title: 'My Component',
        message: 'Hello, world!'
      }
    }
  })