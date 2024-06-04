const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
        }
        else{
            entry.target.classList.remove('show')
        }
    })
})

const hide = document.querySelectorAll('.container-laporkan, .lapor-form-header, .tentangkami-container, .panduan-container')
hide.forEach((el) => observer.observe(el));