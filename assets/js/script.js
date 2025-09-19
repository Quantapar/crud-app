const form = document.getElementById("form");
const input = document.getElementById("input");
const msg = document.getElementById("msg");
const post = document.getElementById("post");

let data = {};
let currentIndex = 0;
let editingId = null;
let editingContent = null;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted");
  formValidation();
});

function formValidation() {
  if (input.value.trim() === "") {
    msg.innerHTML = "<h3>Post cannot be empty</h3>";
    console.log("Validation failed: empty post");
  } else {
    console.log("Validation successful");
    msg.innerHTML = "";
    acceptData();
  }
}

function acceptData() {
  data["text"] = input.value.trim();
  console.log("Data accepted:", data);

  if (editingId) {
    updatePost();
  } else {
    createPost();
  }
}

function updatePost() {
  const currentPost = document.getElementById(editingId);
  if (currentPost) {
    currentPost.textContent = data.text;
    resetEditingState();
    console.log("Post updated successfully");
  }
}

function createPost() {
  const postHTML = `
    <div class="post-item">
      <p id="post-${currentIndex++}">${data.text}</p>
      <span class="options">
        <i onclick="editPost(this)" class="fas fa-edit" title="Edit post"></i>
        <i onclick="deletePost(this)" class="fas fa-trash-alt" title="Delete post"></i>
      </span>
    </div>
  `;

  post.innerHTML += postHTML;
  input.value = "";
  console.log("New post created");
}

function deletePost(element) {
  if (confirm("Are you sure you want to delete this post?")) {
    const postItem = element.parentElement.parentElement;

    const postParagraph = postItem.querySelector("p");
    if (postParagraph && postParagraph.id === editingId) {
      resetEditingState();
    }

    postItem.remove();
    console.log("Post deleted");
  }
}

function editPost(element) {
  if (editingId) {
    const editingPost = document.getElementById(editingId);
    if (editingPost) {
      editingPost.textContent = editingContent;
    }
  }

  const currentPost = element.parentElement.previousElementSibling;

  input.value = currentPost.textContent;

  editingContent = currentPost.textContent;
  editingId = currentPost.id;

  currentPost.textContent = "Editing...";

  input.focus();

  console.log("Editing post:", editingId);
}

function resetEditingState() {
  editingId = null;
  editingContent = null;
}
