document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Placeholder for authentication logic
    console.log(`Login attempt with username: ${username} and password: ${password}`);
    
    // Redirect to dashboard on successful login
    // For now, we'll just redirect without validation
    window.location.href = 'dashboard.html';
});