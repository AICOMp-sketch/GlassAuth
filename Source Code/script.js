const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const formTitle = document.getElementById('formTitle');

    function toggleForm() {
      signInForm.classList.toggle('hidden');
      signUpForm.classList.toggle('hidden');
      formTitle.textContent = signInForm.classList.contains('hidden') ? 'Sign Up' : 'Sign In';
    }

    signInForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('signinEmail').value;
      const password = document.getElementById('signinPassword').value;

      // Replace with actual auth logic
      alert(`Signed in as: ${email}`);
    });

    signUpForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;

      // Replace with actual sign-up logic
      alert(`Signed up as: ${name}`);
      toggleForm(); // go to sign in after sign up
    });