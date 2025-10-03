// Toggle password visibility
function togglePassword(fieldId) {
    const passwordInput = document.getElementById(fieldId);
    const toggleIcon = document.getElementById(fieldId + '-toggle');

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

// Password strength checker
function checkPasswordStrength(password) {
    let strength = 0;
    let strengthText = '';
    let strengthColor = '';

    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    switch (strength) {
        case 0:
        case 1:
            strengthText = 'Very Weak';
            strengthColor = 'bg-red-500';
            break;
        case 2:
            strengthText = 'Weak';
            strengthColor = 'bg-orange-500';
            break;
        case 3:
            strengthText = 'Fair';
            strengthColor = 'bg-yellow-500';
            break;
        case 4:
            strengthText = 'Good';
            strengthColor = 'bg-blue-500';
            break;
        case 5:
            strengthText = 'Strong';
            strengthColor = 'bg-green-500';
            break;
    }

    // Update strength indicators
    for (let i = 1; i <= 4; i++) {
        const bar = document.getElementById(`strength-${i}`);
        bar.className = `h-1 w-full rounded ${i <= strength ? strengthColor : 'bg-gray-200'}`;
    }

    document.getElementById('strength-text').textContent = strengthText;
    document.getElementById('strength-text').className = `text-xs mt-1 ${strength >= 3 ? 'text-green-600' : 'text-red-500'}`;

    return strength >= 3;
}

// Form validation and submission
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const terms = document.getElementById('terms').checked;
    const submitBtn = this.querySelector('button[type="submit"]');

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => {
        error.classList.add('hidden');
        error.textContent = '';
    });

    // Basic validation
    let hasErrors = false;

    if (name.length < 2) {
        showError('name', 'Name must be at least 2 characters long');
        hasErrors = true;
    }

    if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address');
        hasErrors = true;
    }

    if (!checkPasswordStrength(password)) {
        showError('password', 'Password is too weak. Please use a stronger password.');
        hasErrors = true;
    }

    if (password !== confirmPassword) {
        showError('confirm-password', 'Passwords do not match');
        hasErrors = true;
    }

    if (!terms) {
        showError('terms', 'You must agree to the terms and conditions');
        hasErrors = true;
    }

    if (!hasErrors) {
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Creating Account...';
        submitBtn.disabled = true;

        // Simulate registration process
        setTimeout(() => {
            // Redirect to login page on successful registration
            window.location.href = 'login.html';
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

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Real-time password strength checking
document.getElementById('password').addEventListener('input', function () {
    checkPasswordStrength(this.value);
});

// Real-time password confirmation checking
document.getElementById('confirm-password').addEventListener('input', function () {
    const password = document.getElementById('password').value;
    const confirmPassword = this.value;

    if (confirmPassword && password !== confirmPassword) {
        this.classList.add('border-red-500');
    } else {
        this.classList.remove('border-red-500');
    }
});

// Add loading animation
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});