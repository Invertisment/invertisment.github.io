var data = [
  {
    "title": "LinkedIn",
    "url": "https://www.linkedin.com/in/martynas-maciulevi%C4%8Dius-7479a599/",
    "target": "_blank"
  },
  {
    "title": "GitHub",
    "url": "https://github.com/Invertisment",
    "target": "_blank"
  },
  {
    "title": "Mail",
    "url": "mailto:martynas.maciulevicius@pm.me",
    "target": "_self"
  }
];

var dataParentContainer = document.querySelector("#data-container");

function produceDataItem(text, url, target) {
  var item = document.createElement("a");
  item.setAttribute("class", "data-item");
  item.setAttribute("target", target);
  item.href = url;
  item.innerHTML = text;
  return item;
}

data.forEach(item => {
  dataParentContainer.appendChild(
    produceDataItem(
      item.title,
      item.url,
      item.target));
});

