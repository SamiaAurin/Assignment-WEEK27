document.addEventListener("DOMContentLoaded", () => {
    // Only run if the blog container exists on the page
    const blogContainer = document.getElementById("blog-container");
    if (blogContainer) {
      fetch('https://<your-backend-domain>/api/content/blogs')
        .then(response => response.json())
        .then(blogs => {
          // Limit to 6 items for the Home page
          blogs.slice(0, 6).forEach(blog => {
            const col = document.createElement("div");
            col.className = "col-md-4 mb-3";
            col.innerHTML = `
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${blog.title}</h5>
                  <p class="card-text">${blog.content.substring(0, 100)}...</p>
                </div>
              </div>
            `;
            blogContainer.appendChild(col);
          });
        })
        .catch(error => console.error("Error fetching blogs:", error));
    }
  });
  