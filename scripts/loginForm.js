// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('password-toggle');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Form validation and submission
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const submitBtn = this.querySelector('button[type="submit"]');

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => {
        error.classList.add('hidden');
        error.textContent = '';
    });

    // Basic validation
    let hasErrors = false;

    if (username.length < 3) {
        showError('username', 'Username must be at least 3 characters long');
        hasErrors = true;
    }

    if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters long');
        hasErrors = true;
    }

    if (!hasErrors) {
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Logging in...';
        submitBtn.disabled = true;

        // Simulate login process
        setTimeout(() => {
            // Redirect to dashboard on successful login
            window.location.href = 'dashboard.html';
        }, 2000);
    }
});

function showError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorDiv = field.closest('.form-group').querySelector('.error-message');
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
    field.classList.add('border-red-500');

    // Remove error styling on input
    field.addEventListener('input', function () {
        this.classList.remove('border-red-500');
        errorDiv.classList.add('hidden');
    });
}

// Add loading animation
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});