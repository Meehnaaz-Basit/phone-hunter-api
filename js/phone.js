// console.log("js connected");

const loadPhoneData = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  //   console.log(data); // {status: true, data: Array(15)} --- object wise ase so ..
  //   console.log(data.data); // to get only the data ---- put it in a variable to make access easy
  const phones = data.data;
  //   console.log(phones);
  displayPhones(phones);
};

/* // to understand how parameter works 
const displayPhones = (a) => {
  //   console.log(phone);
  for (const e of a) {
    console.log(e);
  }
};
*/

const displayPhones = (phone) => {
  //   console.log(phone);
  const phoneCardBody = document.getElementById("phone-card-body");
  phoneCardBody.textContent = "";
  for (const singlePhone of phone) {
    // console.log(singlePhone);
    // create phone card dynamically
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 shadow-xl`;
    phoneCard.innerHTML = `
                <figure class="pt-4">
                    <img
                    src = "${singlePhone.image}"
                    alt="phones"
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${singlePhone.phone_name}</h2>
                    <p></p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary text-white">Show Details</button>
                    </div>
                </div>
    `;
    phoneCardBody.appendChild(phoneCard);
  }
};

const searchHandel = () => {
  //   console.log("search btn clicked");
  const searchInput = document.getElementById("search-input");
  const inputValue = searchInput.value;
  console.log(inputValue);
  loadPhoneData(inputValue);
};

// loadPhoneData();
