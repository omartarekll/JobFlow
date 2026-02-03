// DOM Elements Exports
export const loadingState = document.getElementById("loading-state");
export const emptyState = document.getElementById("empty-state");
export const erorrState = document.getElementById("erorr-state");
export const viewDetailsBtn = document.getElementById("view-details-btn");
export const numOfDisplayedJobs = document.getElementById("displayed-jobs-num");
export const checkEls = document.querySelectorAll(".check");
export const searchInput = document.getElementById("search-jobs");
export const jobsGrid = document.getElementById("grid-cards");
export const filterBox = document.getElementById("filter-box");
export const emptyStateBtn = document.getElementById("empty-state-btn");
export const resetFiltersBtn = document.getElementById("reset-btn");
const comapnyLogo = document.getElementById("company-logo");

// Sidebar & Overlay
export const sidebarBtn = document.getElementById("mobile-sidebar");
export const aside = document.getElementById("aside");
export const overlay = document.getElementById("overlay");

// Saved Jobs Elements
export const numOfSavedJobs = document.getElementById("saved-jobs-count");
export const saveJobBtn = document.getElementById("save-btn");

// Popup Elements
export const viewDetailsPopUp = document.getElementById("view-details-popup");

// Import Data needed for view details
import { allJobsData } from "./api.js";

// Show Jobs in DOM
export async function showJobs(jobs) {
  loadingState.classList.add("hidden");

  jobs.forEach((job) => {
    const firstLetterLogo =
      job.company.display_name.charAt(0).toUpperCase() || "Company";
    comapnyLogo.innerHTML = firstLetterLogo;
    const jobDiv = document.createElement("div");
    jobDiv.className =
      " job group bg-white rounded-xl border border-[#e5e7eb] p-4 sm:p-5 hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer";
    jobDiv.innerHTML = `<div class="flex justify-between items-start mb-3 sm:mb-4" data-id="${job.id}">
                <div class="flex gap-3 flex-1 min-w-0">
                  <div class="w-12 h-12 sm:w-12 sm:h-12 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100 flex-shrink-0">
                   <div class="w-8 h-8 sm:w-8 sm:h-8 text-center  flex items-center justify-center rounded font-bold text-sm text-white bg-blue-500">
                   ${firstLetterLogo}
                   </div>
                    </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="job-title font-semibold text-base sm:text-lg text-[#0f172a] group-hover:text-primary transition-colors truncate">${job.title || "Untitled Role"}</h3>
                    <p class="text-sm text-[#64748b] truncate">${job.company?.display_name || "Confidential Company"}</p>

                  </div>
                </div>
                          <button id="save-btn"
            class=" text-sm text-[#64748b] font-medium hover:text-[#ef4444] transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="1.5"

              class="size-5 w-5 h-5 fill-none stroke-current "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
                          </button>
              </div>
              <div class="flex items-center gap-3 flex-wrap mb-3 sm:mb-2">
                <span class="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lucide lucide-map-pin w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                     <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                     </svg>
                     ${job.location?.area?.at(-1) || job.location?.display_name || "Remote"}
                </span>
                <span class="px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-medium flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
${
  job.contract_time
    ? job.contract_time.charAt(0).toUpperCase() +
      job.contract_time.slice(1).replace("_", "-")
    : "Not specified"
}

                </span>
                <span class="px-2.5 py-1 rounded-md bg-green-50 text-green-600 text-xs font-medium flex items-center gap-1">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

      $${Math.floor(job.salary_min).toLocaleString() || "Negotiable "}k 

                </span>

              </div>
              <div class="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-100">
                <span class="text-xs text-[#64748b]">Posted on ${job.created ? new Date(job.created).toDateString() : "Recently"}</span>
                <button data-id="${job.id}" class="view-details-btn flex items-center gap-1 cursor-pointer text-xs sm:text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors flex items-center gap-1">
                  View Details
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
  <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>

                </button>
              </div>
              `;

    jobsGrid.appendChild(jobDiv);
  });
  emptyState.classList.add("hidden");
}

export function toggleSidebar() {
  aside.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");
}

// Search Logic (Visual Only)
export function searchJobs(event) {
  const searchTerm = event.target.value.toUpperCase();
  const jobs = document.querySelectorAll(".job");

  jobs.forEach((job) => {
    const jobTitle = job.querySelector(".job-title").innerText.toUpperCase();
    const isMatch = jobTitle.includes(searchTerm);

    job.classList.toggle("hidden", !isMatch);
    job.classList.toggle("block", isMatch);
    emptyState.classList.remove("hidden");
  });
}

// Saved Jobs Logic (Visual Only)
let savedJobsCount = 0;
export function savedJobs(event) {
  const jobStatus = event.target;

  if (jobStatus.classList.contains("added")) {
    //remove job
    jobStatus.classList.remove("added");
    jobStatus.classList.remove("text-[#ef4444]");
    jobStatus.classList.remove("fill-current");
    jobStatus.classList.add("fill-none");

    savedJobsCount--;
  } else {
    //addjob
    jobStatus.classList.add("added");
    jobStatus.classList.add("text-[#ef4444]");
    jobStatus.classList.remove("fill-none");
    jobStatus.classList.add("fill-current");

    savedJobsCount++;
  }

  //Update saved jobs count
  numOfSavedJobs.innerText = savedJobsCount.toString();
}

// View Details Logic
export function viewMoreDetails(btn) {
  viewDetailsPopUp.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  const jobId = btn.dataset.id;
  console.log("Job ID:", jobId);

  const job = allJobsData.find((item) => item.id == jobId);
  if (!job) return;

  document.getElementById("job-title").innerText = job.title;
  document.getElementById("comapny-name").innerText = job.company.display_name;
  document.getElementById("company-location").innerText = job.location.area[1];
  document.getElementById("contract-type").innerText = job.contract_time
    ? job.contract_time.charAt(0).toUpperCase() +
      job.contract_time.slice(1).replace("_", "-")
    : "Not specified";
  document.getElementById("salary").innerText =
    `${Math.floor(job.salary_min).toLocaleString() || "Negotiable"}k`;
  document.getElementById("about").innerText = job.description;
  document.getElementById("applay-now-btn").href = job.redirect_url;
}
