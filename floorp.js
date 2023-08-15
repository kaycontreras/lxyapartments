function openTab(event, tabName) {
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  const tabButtons = document.getElementsByClassName("tab-button");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  const selectedTabContent = document.getElementById(tabName);
  const selectedTabButton = event.currentTarget;
  selectedTabContent.style.display = "block";
  selectedTabButton.classList.add("active");
}