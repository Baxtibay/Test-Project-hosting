let sidebar = document.querySelector('.sidebar');
let familyName = document.querySelector('.familyName')
let avatarFullName = document.querySelector('.avatar-full-name')
let mainIconText = document.querySelector('.main-icon-text')
let companiyes = document.querySelector('.companiyes')
let Customers = document.querySelector('#customers')
let settings = document.querySelector('#setting')
let footerBtn = document.querySelector('#footer-btn')


let menu = document.querySelector('.menu');
menu.onclick = function(){
    
    if(sidebar.classList.contains('sidebar')){
        sidebar.classList.add('min-sidebar')
        sidebar.classList.remove('sidebar')
    } else {
        sidebar.classList.add('sidebar')
        sidebar.classList.remove('min-sidebar')
    }

    familyName.classList.toggle('min-familiyName');
    avatarFullName.classList.toggle('min-avatar-full-name');
    mainIconText.classList.toggle('min-main-icon-text');
    companiyes.classList.toggle('min-companiyes');
    Customers.classList.toggle('min-customers');
    settings.classList.toggle('min-setting');
    footerBtn.classList.toggle('min-footer-btn');
}


// ----==== User Update script ====----

// let UpdateUser = document.querySelector('.user-btn')
// let Alert = document.querySelector('.alert-none')

// UpdateUser.onclick = function(e){
//     console.log(e.target)
//     if(Alert.classList.contains('alert-none')){
//         Alert.classList.remove('alert-none')
//         Alert.classList.add('alert')
//     } else {
//         Alert.classList.remove('alert')
//         Alert.classList.add('alert-none')
//     }
    
// }