function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 1500,
}){
    const toast = document.querySelector('#toast')
    if (toast){
        const toastElement = document.createElement('div')
        const icons = {
            success: 'bx bxs-check-circle',
            error:'bx bxl-tiktok',
            info:'bx bxl-visual-studio'
        }
        const icon = icons[type]
        const delay = (duration/1000).toFixed(2)
        const timeout = duration + 1000 //1000: time FadeOut
        // Add class
        toastElement.classList.add('toast',`toast--${type}`)
        // Add animation
        toastElement.style.animation =`sideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`
        // Render HTML
        toastElement.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__message">${message}</p>
            </div>
            <div class="toast__close">
                <i class='bx bxs-x-circle'></i>
            </div>
        `
        toast.appendChild(toastElement)
        const autoRemove = setTimeout(function(){
            toastElement.parentNode.removeChild(toastElement)
        },timeout)

        // Khi bấm vào nút close
        toastElement.onclick = function(e){
            if(e.target.closest('.toast__close')){
                toastElement.parentNode.removeChild(toastElement)
                clearTimeout(autoRemove)
            }
        }
    }
}

function showSuccessToast(){
    toast({
        title:'Success',
        message:'Bạn đã đăng kí thành công tài khoản tại Redo',
        type:'success',
        duration:5000,
    })
}
function showErrorToast(){
    toast({
        title:'Error',
        message:'Bạn đăng ký thất bại vui lòng liên hệ DoRe',
        type:'error',
        duration:5000,
    })
}