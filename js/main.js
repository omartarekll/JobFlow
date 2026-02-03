// main.js
import {
  toggleSidebar,
  searchJobs,
  savedJobs,
  viewMoreDetails,
  sidebarBtn,
  overlay,
  aside,
  searchInput,
  jobsGrid,
  filterBox,
  resetFiltersBtn,
  emptyStateBtn,
  viewDetailsPopUp,
} from "./ui.js";

import {
  fetchJobs,
  init,
  handleFilterChange,
  resetAllFilters,
  handleScroll,
} from "./api.js";

// Initialize App
init();

// Event Listeners

// Sidebar
sidebarBtn.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar);

// Search
searchInput.addEventListener("input", searchJobs);

// Filters
filterBox.addEventListener("change", handleFilterChange);
resetFiltersBtn.addEventListener("click", resetAllFilters);
emptyStateBtn.addEventListener("click", resetAllFilters);

// Infinite Scroll
window.addEventListener("scroll", handleScroll);

// Saved Jobs (Event Delegation)
jobsGrid.addEventListener("click", function (event) {
  const clickedBtn = event.target.closest("#save-btn");

  if (clickedBtn) {
    savedJobs({ target: clickedBtn });
  }
});

// View Details (Event Delegation)
jobsGrid.addEventListener("click", function (e) {
  const clickedViewDetails = e.target.closest(".view-details-btn");

  if (clickedViewDetails) {
    viewMoreDetails(clickedViewDetails);
  }
});

// Popup Close
viewDetailsPopUp.addEventListener("click", function (e) {
  if (e.target === viewDetailsPopUp) {
    viewDetailsPopUp.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
});
