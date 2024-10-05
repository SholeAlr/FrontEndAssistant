document.addEventListener("DOMContentLoaded", () => {
  const selectorValue = document.getElementById("selector").value;
  const resultDiv = document.getElementById("result");
  const widthAndHeights = {
    1: "-px",
    2: "-0.5",
    4: "-1",
    6: "-1.5",
    8: "-2",
    10: "-2.5",
    12: "-3",
    14: "-3.5",
    16: "-4",
    20: "-5",
    24: "-6",
    28: "-7",
    32: "-8",
    36: "-9",
    40: "-10",
    44: "-11",
    48: "-12",
    56: "-14",
    64: "-16",
    80: "-20",
    96: "-24",
    112: "-28",
    128: "-32",
    144: "-36",
    160: "-40",
    176: "-44",
    192: "-48",
    208: "-52",
    224: "-56",
    240: "-60",
    256: "-64",
    288: "-72",
    320: "-80",
    384: "-96",
  };

  const showWidthAndHeights = () => {
    Object.keys(widthAndHeights).forEach(function (key, index) {
      const node = document.createElement("p");
      const textnode = document.createTextNode(
        `${key}px : ${widthAndHeights[key]}`
      );
      node.appendChild(textnode);
      resultDiv.appendChild(node);
    });
  };

  console.log(selectorValue);
  switch (selectorValue) {
    case "w-h":
      showWidthAndHeights();
      break;
  }
});
