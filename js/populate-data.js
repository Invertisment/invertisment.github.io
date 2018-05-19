var dataParentContainer = document.querySelector("#data-container");

function produceDataItem(text, url, target) {
  var item = document.createElement("a");
  item.setAttribute("class", "data-item");
  item.setAttribute("target", target);
  item.href = url;
  item.innerHTML = text;
  return item;
}

JSON.parse(atob("W3sidGl0bGUiOiJMaW5rZWRJbiIsInVybCI6Imh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tYXJ0eW5hcy1tYWNpdWxldmklQzQlOERpdXMtNzQ3OWE1OTkvIiwidGFyZ2V0IjoiX2JsYW5rIn0seyJ0aXRsZSI6IkdpdEh1YiIsInVybCI6Imh0dHBzOi8vZ2l0aHViLmNvbS9JbnZlcnRpc21lbnQiLCJ0YXJnZXQiOiJfYmxhbmsifSx7InRpdGxlIjoiTWFpbCIsInVybCI6Im1haWx0bzptYXJ0eW5hcy5tYWNpdWxldmljaXVzQHBtLm1lIiwidGFyZ2V0IjoiX3NlbGYifV0=")).forEach(item => {
  dataParentContainer.appendChild(
    produceDataItem(
      item.title,
      item.url,
      item.target));
});

