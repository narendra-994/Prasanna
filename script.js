document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const dashboard = document.getElementById('dashboard');
    const loginContainer = document.getElementById('login-container');
    const loginError = document.getElementById('login-error');
    const attendanceTableBody = document.querySelector('#attendance-table tbody');

    const VALID_USERNAME = 'admin';
    const VALID_PASSWORD = 'password123';
    
    // List of student names
    const students = [
        'Prasanna', 'Manisha', 'Ravi', 'Prathyusha', 'Mounika', 'Vaishnavi',
        'Bindhu', 'Keerthi', 'Akhila', 'Ruthu', 'Sanjana', 'Anjana',
        'Madhu', 'Ramesh', 'Suresh', 'Raju', 'Kittu', 'Mintu', 'Malathi', 'Maha'
    ].map(name => ({
        name: name,
        daysPresent: Math.floor(Math.random() * 31) // Random days present between 0 and 30
    }));

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
            loginContainer.style.display = 'none';
            dashboard.style.display = 'block';
            populateAttendanceTable();
        } else {
            loginError.style.display = 'block';
        }
    });

    function populateAttendanceTable() {
        students.forEach(student => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const presentCell = document.createElement('td');
            const percentageCell = document.createElement('td');

            const attendancePercentage = ((student.daysPresent / 30) * 100).toFixed(2);

            nameCell.textContent = student.name;
            presentCell.textContent = student.daysPresent;
            percentageCell.textContent = `${attendancePercentage}%`;

            row.appendChild(nameCell);
            row.appendChild(presentCell);
            row.appendChild(percentageCell);

            attendanceTableBody.appendChild(row);
        });
    }
});
