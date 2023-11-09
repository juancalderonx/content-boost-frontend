document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  if (token) window.location.href = "../pages/dashboard/index.html";
});

const login = async () => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  try {
    const response = await fetch("http://localhost:3023/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userFullname", data.dataUser.fullname);
      window.location.href = "../../pages/dashboard/index.html";
    } else {
      alert("Email or Password is wrong!");
    }
  } catch (err) {
    console.error(err);
  }
};

const signUp = async () => {
  const email = document.querySelector("#signupEmail").value;
  const password = document.querySelector("#signupPassword").value;
  const fullname = document.querySelector("#signupFullname").value;

  try {
    const response = await fetch("http://localhost:3023/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, fullname }),
    });

    const data = await response.json();

    console.log({ data });

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userFullname", data.user.fullname);
      window.location.href = "../../pages/dashboard/index.html";
    } else {
      alert("Oops, already exists an account with that email!");
    }
  } catch (err) {
    console.log(err);
  }
};

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
