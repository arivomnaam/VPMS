/*const backendUrl = "http://192.168.1.100:8081";

        function showSignup() {
            document.getElementById("login-form").style.display = "none";
            document.getElementById("signup-form").style.display = "block";
            document.getElementById("message").innerText = "";
        }

        function showLogin() {
            document.getElementById("signup-form").style.display = "none";
            document.getElementById("login-form").style.display = "block";
            document.getElementById("message").innerText = "";
        }

        async function login() {
            const username = document.getElementById("login-username").value.trim();
            const password = document.getElementById("login-password").value.trim();

            if (!username || !password) {
                document.getElementById("message").innerText = "Please fill in all fields.";
                return;
            }

            try {
                const response = await fetch(`${backendUrl}/api/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password })
                });
                const data = await response.json();
                document.getElementById("message").innerText = data.message;
            } catch (error) {
                document.getElementById("message").innerText = "Login failed. Please try again.";
            }
        }

        async function signup() {
            const username = document.getElementById("signup-username").value.trim();
            const email = document.getElementById("signup-email").value.trim();
            const password = document.getElementById("signup-password").value.trim();
            const emp_no = document.getElementById("signup-emp_no").value.trim();
            const emp_name = document.getElementById("signup-name").value.trim();
            const division = document.getElementById("signup-division").value.trim();

            if (!username || !email || !password || !emp_no || !emp_name || !division) {
                document.getElementById("message").innerText = "Please fill in all fields.";
                return;
            }

            try {
                const response = await fetch(`${backendUrl}/api/signup`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, email, password, emp_no, emp_name, division })
                });
                const data = await response.json();
                document.getElementById("message").innerText = data.message;
            } catch (error) {
                document.getElementById("message").innerText = "Sign-up failed. Please try again.";
            }
        }*/
            const backendUrl = "http://192.168.1.100:8081"; // Change to your backend IP

            function showSignup() {
                document.getElementById("login-form").style.display = "none";
                document.getElementById("signup-form").style.display = "block";
            }
            
            function showLogin() {
                document.getElementById("signup-form").style.display = "none";
                document.getElementById("login-form").style.display = "block";
            }
            
            async function login() {
                const username = document.getElementById("login-username").value;
                const password = document.getElementById("login-password").value;
                if (!username || !password) {
                    document.getElementById("message").innerText = "Please fill in all fields.";
                    return;
                }
                /*let response = await fetch(`${backendUrl}/api/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password })
                });
            
                let data = await response.json();
                document.getElementById("message").innerText = data.message;*/
            }
            
            async function signup() {
                const username = document.getElementById("signup-username").value;
                const email = document.getElementById("signup-email").value;
                const password = document.getElementById("signup-password").value;
                const emp_no = document.getElementById("signup-emp_no").value;
                const emp_name = document.getElementById("signup-name").value;
                const division = document.getElementById("signup-division").value;
            /*
                let response = await fetch(`${backendUrl}/api/signup`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, email, password, emp_no, emp_name, division })
                });
            
                let data = await response.json();
                document.getElementById("message").innerText = data.message;*/
                if (!username || !email || !password || !emp_no || !emp_name || !division) {
                    document.getElementById("message").innerText = "Please fill in all fields.";
                    return;
                }
            }
            
            async function adminLogin() {
                const email = document.getElementById("admin-email").value;
                const password = document.getElementById("admin-password").value;
            
                let response = await fetch(`${backendUrl}/api/admin/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                });
            
                let data = await response.json();
                document.getElementById("admin-message").innerText = data.message;
            
                if (data.success) {
                    window.location.href = "admin-dashboard.html"; // Redirect admin on successful login
                }
            }
            