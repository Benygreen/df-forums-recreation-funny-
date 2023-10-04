function login() {
    history.back()
    let username = document.getElementById('usernamebox').value
    let password = document.getElementById('passwordbox').value
    console.log(username )
    console.log("DEBUG: Succesfully logged in as "+username+" with the password "+password)
    
}