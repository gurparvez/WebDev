document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");

    loginBtn.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        fetch('/', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({ username: username, password: password }),
        }).then((response)=>{
            if (response.status === 200) {
                window.location.href = '/home.html'
            } else {
                response.text().then((data)=>{
                    alert(data)
                })
            }
        }).catch((err)=>console.error(err))
    });
});
