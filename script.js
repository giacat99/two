document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Kiểm tra thông tin đăng nhập
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert('Đăng nhập thành công!');
        window.location.href = 'dashboard.html'; // Chuyển đến trang quản lý
    } else {
        document.getElementById('message').innerText = 'Tên người dùng hoặc mật khẩu không đúng.';
    }
});

// Đăng ký tài khoản mới
document.getElementById('registerButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra xem email đã tồn tại chưa
    if (users.find(u => u.email === email)) {
        document.getElementById('message').innerText = 'Email đã tồn tại.';
        return;
    }

    // Thêm người dùng mới
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('message').innerText = 'Tài khoản đã được tạo thành công!';
});
