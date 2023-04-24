const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля форми повинні бути заповнені");
  }

  let obj = {};
  obj.Email = email.value;
  obj.password = password.value;

  console.log(obj);

  evt.currentTarget.reset();
}
