const card = document.getElementById('user-card');
const newUserBtn = document.getElementById('new-user');

async function fetchUser() {
  card.innerHTML = "<h2>Loading...</h2>";
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  const user = data.results[0];

  card.innerHTML = `
    <img src="${user.picture.large}" alt="User Picture">
    <h2>${user.name.first} ${user.name.last}</h2>
    <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
    <p><strong>Email:</strong> ${user.email}</p>
  `;
}

newUserBtn.addEventListener('click', fetchUser);


fetchUser();
