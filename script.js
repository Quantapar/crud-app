let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let post = document.getElementById("post");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");
  formValidation();
});

function formValidation() {
  if (input.value === "") {
    msg.innerHTML = "<h3>post is empty<h3>";

    console.log("failure");
  } else {
    console.log("sucess");
    msg.innerHTMl = "";
    acceptdata();
  }
}
let data = {};
function acceptdata() {
  data["text"] = input.value;
  console.log(data);
  if (editingId) {
    updatePost();
  } else {
    createPost();
  }
}

function updatePost() {
  const currentPost = document.getElementById(editingId);
  currentPost.textContent = data.text;
  editingId = null;
  editingContent = null;
}

let currentIndex = 0;
let editingId = null;
let editingContent = null;

function createPost() {
  post.innerHTML += `
    <div>
      <p id=post-${currentIndex++}>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
  `;
  input.value = "";
}
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};
let editPost = (e) => {
  if (editingId) {
    let editingPost = document.getElementById(editingId);
    editingPost.textContent = editingContent;
  }

  let currentPost = e.parentElement.previousElementSibling;
  const input = document.getElementById("input");

  input.value = currentPost.textContent;
  editingContent = currentPost.textContent;
  currentPost.textContent = "Editing...";
  editingId = currentPost.id;
};
