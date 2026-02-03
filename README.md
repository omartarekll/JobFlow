# 💼 JobFlow - Smart Job Board

JobFlow is a modern, responsive job search application that aggregates job listings from the Adzuna API. It allows users to search, filter, and view job details in real-time with a clean, mobile-first user interface.

🌐[JobFlow Demo](https://jobfllow.netlify.app/)

![App Screenshot](/assets/images/desktop.png)

---

## ✨ Features

- **🔍 Advanced Search:** Search for jobs by keywords (title, company).
- **⚡ Real-time Filtering:** Filter by job type (Full-time, Part-time, Contract), and Location (Remote).
- **📱 Responsive Design:** Fully optimized for mobile and desktop using **Tailwind CSS**.
- **🔄 Infinite Scroll:** Automatically loads more jobs as you scroll down.
- **❤️ Save Jobs:** Bookmark interesting jobs locally.
- **📄 Job Details:** View detailed information including salary, description, and apply links.
- **🎨 Dynamic UI:** Company logos generated dynamically from company names.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+).
- **Styling:** Tailwind CSS.
- **Architecture:** Modular JS (ES Modules) following MVC principles.
- **API:** Adzuna Job Search API.
- **Tools:** Git, VS Code.

---

## 📂 Project Structure

The project follows a modular architecture to separate concerns:

```text
├── index.html       # Main HTML structure
├── api.js           # Handles API requests & State Management
├── ui.js            # Handles DOM manipulation & Rendering
├── main.js          # Entry point & Event Listeners
├── config.js        # API Keys & Configuration (Ignored by Git)
└── style.css        # Custom styles & Tailwind directives
```

## 🚀 How to Run Locally

Since this project uses an API Key, you need to set up a configuration file manually.

1. **Clone the repository**

   ```bash
   git clone [https://github.com/omartarekll/JobFlow.git](https://github.com/omartarekll/JobFlow.git)
   cd JobFlow

   const CONFIG = {
   APP_ID: "YOUR_ADZUNA_APP_ID",
   APP_KEY: "YOUR_ADZUNA_APP_KEY",
   BASE_URL: "[https://api.adzuna.com/v1/api/jobs/us/search/](https://api.adzuna.com/v1/api/jobs/us/search/)",
   PROXY: "[https://corsproxy.io/](https://corsproxy.io/)?"
   };
   ```

## 👤 Author

🔗 LinkedIn: [Omar Tarek](https://www.linkedin.com/in/omartarekll/)
