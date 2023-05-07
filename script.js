function sendWa(event) {
  event.preventDefault();
  const nama = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const birth = document.getElementById("birthPlace").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;

  const number = phone.split("");
  if (number[0] === "0") number.splice(0, 1, "62").join("");
  const phoneNumber = number.join("");

  window.open(`https://wa.me/${phoneNumber}?text=Nama : ${nama}%0AJenis Kelamin : ${gender}%0ATanggal Lahir : ${birth}%0AAlamat : ${address}`, "_blank");
}
