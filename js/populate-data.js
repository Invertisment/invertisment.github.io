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

