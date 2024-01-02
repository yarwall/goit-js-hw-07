
const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

// 1-st var

// const profile = {};

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const email = form.elements.email.value;
//   const password = form.elements.password.value;
  
//   if (email === "" || password === "") {
//     return alert('All form fields must be filled in');
//   };

//   profile.email = email;
//   profile.password = password;

//   console.log(profile);
//   form.reset();
// }

// 2-nd var

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  // const {
  //   elements: { email, password },
  // } = e.currentTarget;

  if (!email.value.trim() || !password.value.trim()) {
    return alert('All form fields must be filled in');
  } else {
    const profile = {
      email: email.value,
      password: password.value,
    };

    console.log(profile);
    event.currentTarget.reset();
  }
}
