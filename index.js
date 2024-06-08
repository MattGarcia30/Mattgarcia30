const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("countLike1")

function clickLike1(){
  let totalLikes = parseInt(countLike1.value) + 1
  countLike1.textContent = totalLikes.toString()
}
btnLike1.addEventListener("click",clickLike1)

function clickLike2(){
  let totalLikes = parseInt(countLike2.value) + 1
  countLike2.textContent = totalLikes.toString()
}
btnLike2.addEventListener("click",clickLike2)

const comment = document.getElementById("comment");
const submit = document.getElementById("submit");
const commentbox = document.getElementById("commentbox");

function like() {
  let totalLikes = parseInt(countLikes.textContent) + 1;
  comment.textContent = totalLikes.toString();
  submit.style.display = "none";
  commentbox.style.display = "inline";
}

function unlike() {
  let totalLikes = parseInt(comment.textContent) - 1;
  comment.textContent = totalLikes.toString();
  submit.style.display = "inline";
  commentbox.style.display = "none";
}

btnLike.addEventListener("click", like);
btnUnlike.addEventListener("click", unlike);
