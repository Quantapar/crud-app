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
    msg.innerHTML = "post is empty";
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
  post.innerHTML += `<div>
            <p> data.text</p>
            <span class="options">
              <i onClick="editPost(this)" class="fas fa-edit"></i>
              <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
          </div>`;
}
