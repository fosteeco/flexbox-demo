const addBox = document.querySelector("#add-box");
const extraText = "Lorem ipsum dolor sit amet.";
const addTextBox = document.querySelector("#add-text-box");

const reset = document.querySelector("#reset");
const removeDivs = document.querySelector("#remove-divs");

const alignItemSelect = document.querySelector("#align-items-select");
const justifyContentSelect = document.querySelector("#justify-content-select");
const flexDirectionSelect = document.querySelector("#flex-direction-select");
const flexWrapSelect = document.querySelector("#flex-wrap-select");
const flexContainer = document.querySelector(".flexbox-container");
let flexCount = 1;

addBox.addEventListener("click", () => {
  const box = document.createElement("div");
  box.innerHTML = flexCount;
  flexCount++;
  box.classList.add("box");
  flexContainer.appendChild(box);
});

addTextBox.addEventListener("click", () => {
  const box = document.createElement("div");
  box.innerHTML = flexCount + " " + extraText;
  flexCount++;
  box.classList.add("box");
  flexContainer.appendChild(box);
});

reset.addEventListener("click", () => {
  resetInputs();
});

alignItemSelect.addEventListener("change", () => {
  flexContainer.style.alignItems = alignItemSelect.value;
});

justifyContentSelect.addEventListener("change", () => {
  flexContainer.style.justifyContent = justifyContentSelect.value;
});

flexDirectionSelect.addEventListener("change", () => {
  flexContainer.style.flexDirection = flexDirectionSelect.value;
});

flexWrapSelect.addEventListener("change", () => {
  flexContainer.style.flexWrap = flexWrapSelect.value;
});

function resetInputs() {
  alignItemSelect.value = "flex-start";
  justifyContentSelect.value = "flex-start";
  flexDirectionSelect.value = "row";
  flexWrapSelect.value = "nowrap";
  flexContainer.style.alignItems = alignItemSelect.value;
  flexContainer.style.justifyContent = justifyContentSelect.value;
  flexContainer.style.flexDirection = flexDirectionSelect.value;
  flexContainer.style.flexWrap = flexWrapSelect.value;
}

removeDivs.addEventListener("click", () => {
  flexContainer.innerHTML = ``;
  flexCount = 1;
});
