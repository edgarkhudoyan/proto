const string = 'abcdefghijklmnopqrstuvwxyz';

const pagination = {
  bookPages: function getPages(str = string, count = 4) {
    const alphabetArray = str.split('');
    let pageContent = [];

    for (let i = 0; i < alphabetArray.length; i += count) {
      pageContent.push(alphabetArray.slice(i, i + count));
    }
    return pageContent;
  },

  firstPage: 1,
  currentPage: 1,

  prevPage: function () {
    if (this.currentPage > 1) {
      return --this.currentPage;
    } else {
      return 'N/A';
    }
  },

  nextPage: function () {
    if (this.currentPage <= this.bookPages.length) {
      this.currentPage++;
    }
    return pagination;
  },

  lastPage: function () {
    return (this.currentPage = this.bookPages().length);
  },

  goToPage(pageN) {
    return (this.currentPage = pageN);
  },

  getPageItems: function () {
    return this.bookPages()[pagination.currentPage - 1];
  },
}; /* OBJECT CLOSURE BRACES */

pagination.prevPage();
pagination.nextPage().nextPage();
pagination.firstPage;
pagination.lastPage();
pagination.goToPage(2);
console.log(pagination.getPageItems());
