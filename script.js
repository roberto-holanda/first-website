const year = document.getElementById("year-now");
const year_now = new Date().getFullYear();

year.prepend(` - ${year_now}`);