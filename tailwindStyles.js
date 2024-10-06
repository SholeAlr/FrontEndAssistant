document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("selector");
  const resultDiv = document.getElementById("result");

  if (!selector || !resultDiv) {
    console.error("Selector or Result Div not found!");
    return;
  }

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

  const fontSizes = {
    12: "text-xs",
    14: "text-sm",
    16: "text-base",
    18: "text-lg",
    20: "text-xl",
    24: "text-2xl",
    30: "text-3xl",
  };
  const fontWeights = {
    100: "font-thin",
    200: "font-extralight",
    300: "font-light",
    400: "font-normal",
    500: "font-medium",
    600: "font-semibold",
    700: "font-bold",
    800: "font-extrabold",
    900: "font-black",
  };
  const lineHeights = {
    12: "leading-3",
    16: "leading-4",
    20: "leading-5",
    24: "leading-6",
    28: "leading-7",
    32: "leading-8",
    36: "leading-9",
    40: "leading-10",
  };

  // Create width and height options dynamically
  Object.keys(widthAndHeights).forEach(function (key) {
    const node = document.createElement("p");
    const textnode = document.createTextNode(
      `${key}px : ${widthAndHeights[key]}`
    );
    node.appendChild(textnode);
    resultDiv.appendChild(node);
  });

  const showWidthAndHeights = () => {
    resultDiv.innerHTML = "";
    Object.keys(widthAndHeights).forEach(function (key, index) {
      const node = document.createElement("p");
      const textnode = document.createTextNode(
        `${key}px : ${widthAndHeights[key]}`
      );
      node.appendChild(textnode);
      resultDiv.appendChild(node);
    });
  };

  const showFontSizes = () => {
    resultDiv.innerHTML = "";
    Object.keys(fontSizes).forEach(function (key, index) {
      const node = document.createElement("p");
      const textnode = document.createTextNode(`${key}px : ${fontSizes[key]}`);
      node.appendChild(textnode);
      resultDiv.appendChild(node);
    });
  };

  const showFontWeights = () => {
    resultDiv.innerHTML = "";
    Object.keys(fontWeights).forEach(function (key, index) {
      const node = document.createElement("p");
      const textnode = document.createTextNode(`${key} : ${fontWeights[key]}`);
      node.appendChild(textnode);
      resultDiv.appendChild(node);
    });
  };
  const showLineHeights = () => {
    resultDiv.innerHTML = "";
    Object.keys(lineHeights).forEach(function (key, index) {
      const node = document.createElement("p");
      const textnode = document.createTextNode(
        `${key}px : ${lineHeights[key]}`
      );
      node.appendChild(textnode);
      resultDiv.appendChild(node);
    });
  };

  const handleSelectorChange = (selectorValue) => {
    switch (selectorValue) {
      case "w-h":
        showWidthAndHeights();
        break;
      case "font-size":
        showFontSizes();
        break;
      case "font-weight":
        showFontWeights();
        break;
      case "leading":
        showLineHeights();
        break;
      default:
        showWidthAndHeights();
    }
  };

  // Add event listener to the selector element
  selector.addEventListener("change", (event) => {
    handleSelectorChange(event.target.value);
  });
});
