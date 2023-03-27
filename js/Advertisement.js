const HeaderComponent = {
    template: `
      <div>
        <ul>
          <li v-for="item in items" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
    `,
  
    data() {
      return {
        items: []
      };
    },
  
    async created() {
    //   const response = await fetch('https://api.example.com/items'); // Replace this with your API URL
    //   const data = await response.json();
    //   this.items = data;
    }
  };
  