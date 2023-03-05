const original = document.getElementById("division");
const parent = original.parentNode;
for (let i = 0; i < 44; i++) {
  const clone = original.cloneNode(true);
  clone.textContent="Duplicated Divisons";
  parent.appendChild(clone);
  clone.style.marginLeft = "4px"; // Set the margin-left property
  clone.style.color = "green"; // Set the margin-left property

  
}
