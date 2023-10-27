const mob = document.querySelector('.mob')
const cancel = document.querySelector('#cancel')


mob.addEventListener('click', handleClick)
cancel.addEventListener('click', handleCancel)


function handleClick() {
    document.querySelector('.mbi').style.display = 'block'
}
function handleCancel() {
    document.querySelector('.mbi').style.display = 'none'
}

