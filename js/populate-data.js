var dataParentContainer = document.querySelector("#data-container");

function produceDataItem(text, url, target) {
  var item = document.createElement("a");
  item.setAttribute("class", "data-item");
  item.setAttribute("target", target);
  item.href = url;
  item.innerHTML = text;
  return item;
}

JSON.parse(atob("W3sidGl0bGUiOiJMaW5rZWRJbiIsInVybCI6Imh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tYXJ0eW5hcy1tYWNpdWxldmljaXVzLyIsInRhcmdldCI6Il9ibGFuayJ9LHsidGl0bGUiOiJHaXRIdWIiLCJ1cmwiOiJodHRwczovL2dpdGh1Yi5jb20vSW52ZXJ0aXNtZW50IiwidGFyZ2V0IjoiX2JsYW5rIn0seyJ0aXRsZSI6Ik1haWwiLCJ1cmwiOiJtYWlsdG86bWFydHluYXMubWFjaXVsZXZpY2l1cyttbWFjaXVsLmx0QHBtLm1lIiwidGFyZ2V0IjoiX3NlbGYifV0=")).forEach(item => {
  dataParentContainer.appendChild(
    produceDataItem(
      item.title,
      item.url,
      item.target));
});

const appsInfo = [
  {
    "title": "Clojure events calendar UI",
    "href": "https://invertisment.gitlab.io/cljcalendar/",
    "body": [
      {
        "text": "Web preview of upcoming Clojure events."
      }
    ],
    "imgSrc": "img/cljcalendar.png",
  },
  {
    "title": "Tetris in browser",
    "href": "https://invertisment.gitlab.io/cljs-tetris/",
    "body": [
      {
        "text": "Simplistic tetris game written in ClojureScript and transpiled to JavaScript. Playable only with a keyboard. "
      }
    ],
    "imgSrc": "img/tetris.png",
  },
  {
    "title": "EOS block producer browser",
    "href": "https://invertisment.gitlab.io/honest-producers/",
    "body": [
      {
        "text": "Explore summarized data of EOS block producers. Vote for your favourite block producers through "
      },
      {
        "href": "https://github.com/CryptoLions/EOS-MainNet/blob/master/cleos.sh",
        "text": "cleos script"
      },
      {
        "text": "."
      }
    ],
    "imgSrc": "img/producers.png",
  },
]

var appsParentContainer = document.querySelector("#apps-container");

function toDescription(body) {
  const a = body.map((bodyItem) => {
    if (bodyItem.href) {
      return `<a href="${bodyItem.href}" target="_blank">${bodyItem.text}</a>`
    }
    return bodyItem.text
  }).reduce((out, item) => out.concat(item), "")
  console.log("data", a)
  return a
}

function produceAppsDataItem(title, href, body, imgSrc) {
  var item = document.createElement("div");
  item.className = "mui-col-md-6"
  item.innerHTML = `<div class="mui-container mui-panel">
    <h2>
      <a href="${href}" target="_blank">
        ${title}
      </a>
    </h2>
    <p>
      ${toDescription(body)}
    </p>
    <a href="${href}" target="_blank">
      <img src="${imgSrc}" class="card-img"></img>
    </a>
  </div>`;
  return item;
}

appsParentContainer.innerHTML = ''
appsInfo.forEach(({ title, href, body, imgSrc }) => {
  appsParentContainer.appendChild(
    produceAppsDataItem(title, href, body, imgSrc));
});
