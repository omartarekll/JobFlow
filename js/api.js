import {
  loadingState,
  emptyState,
  erorrState,
  numOfDisplayedJobs,
  checkEls,
  searchInput,
  jobsGrid,
  showJobs,
} from "./ui.js";
import { CONFIG } from "./config.js";

let pageNum = 1;
export let allJobs = [];
export let allJobsData = [];
let isLoading = false; // For infinite scroll

export async function fetchJobs() {
  if (isLoading) return;

  isLoading = true;
  loadingState.classList.remove("hidden");
  const searchTerm = searchInput.value.trim();
  const query = searchTerm ? searchTerm : "developer";
  let filterParams = "";
  let locationParams = "";

  checkEls.forEach((checkbox) => {
    if (!checkbox.checked) return;

    if (checkbox.id === "remote") {
      locationParams = "&where=remote";
    } else {
      filterParams += `&${checkbox.id}=1`;
    }
  });
  try {
    const targetUrl = `${CONFIG.BASE_URL}1?app_id=${CONFIG.APP_ID}&app_key=${CONFIG.APP_KEY}&what=${query}`;
    const res = await fetch(targetUrl);
    const data = await res.json();
    const newJobs = data.results;

    if (newJobs.length === 0 && pageNum === 1) {
      emptyState.classList.remove("hidden");
      loadingState.classList.add("hidden");

      return;
    } else {
      emptyState.classList.add("hidden");
    }

    showJobs(newJobs);

    allJobs = data.results;
    allJobsData.push(...newJobs);
    numOfDisplayedJobs.innerText = allJobsData.length;

    // return allJobs;
  } catch {
    erorrState.classList.remove("hidden");
    loadingState.classList.add("hidden");
    emptyState.classList.add("hidden");
  } finally {
    isLoading = false;
    loadingState.classList.add("hidden");
  }
}

// Show all Jobs before filtering them
export async function init() {
  pageNum = 1;
  jobsGrid.innerHTML = "";
  await fetchJobs();
}

export async function handleFilterChange(newQuery, newLocation) {
  allJobsData = [];
  pageNum = 1;
  jobsGrid.innerHTML = "";

  await fetchJobs();
}

export function resetAllFilters() {
  checkEls.forEach((check) => (check.checked = false));
  searchInput.value = "";

  showJobs(allJobs);
}

// Scroll Logic (Load one more page when user reach the end of the page)
export function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoading) {
    pageNum++;
    fetchJobs();
  }
}
