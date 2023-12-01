<script>
  function toggleForm(formId) {
    document.getElementById('loginForm').style.display = formId === 'loginForm' ? 'block' : 'none';
    document.getElementById('registerForm').style.display = formId === 'registerForm' ? 'block' : 'none';
  }

  function login() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    // Add your authentication logic here
    // For simplicity, let's just log the input for now
    console.log('Login:', { username, password });
  }

  function register() {
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;

    // Add your registration logic here
    // For simplicity, let's just log the input for now
    console.log('Register:', { username, password });
  }
</script>