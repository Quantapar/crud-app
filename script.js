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
  createPost();
}

function createPost() {
  post.innerHTML += `
    <div>
      <p>${data.text}</p>
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
  let currentText = e.parentElement.previousElementSibling.innerHTML;

  let newText = prompt("Edit your post:");

  if (newText !== null) {
    e.parentElement.previousElementSibling.innerHTML = newText;
  }
};
