console.log("Hello Vue3");

const app = Vue.createApp({
  //template: "<h2>I am the template</h2>",
  data() {
    return {
      url: "https://www.linkedin.com/company/apinauten-gmbh/",
      books: [
        {
          title: "the final empire",
          author: "a",
          img: "Assests/1.jpg",
          isFav: true,
        },
        {
          title: "Empire 1",
          author: "kkk",
          img: "Assests/2.jpg",
          isFav: false,
        },
        { title: "Empire 2", author: "fff", img: "Assests/3.jpg", isFav: true },
      ],
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Peterson",
      age: 45,
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeBookTitle(title) {
      //   console.log("changeBookTitle");
      //   this.title = "Words of Empire";
      this.title = title;
    },
    toogleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    EvnetHandler(e) {
      console.log(e, e.type);
    },
    mousemoveEventHandler(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },

  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
