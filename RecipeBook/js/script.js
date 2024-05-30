function addComment() {
  var commentText = document.getElementById("commentText").value;
  var commentNode = document.createElement("p");
  var textNode = document.createTextNode(commentText);
  commentNode.appendChild(textNode);
  document.getElementById("allComments").appendChild(commentNode);
  document.getElementById("commentText").value = ""; // Clear the textarea after adding the comment
}
