const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('revealed')
  })
},{threshold:0.15})

document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right').forEach(el=>observer.observe(el))

const header=document.getElementById('mainHeader')
window.addEventListener('scroll',()=>{
  header.classList.toggle('scrolled',window.scrollY>50)
})

const modal=document.getElementById('modal')
document.getElementById('bookBtn').onclick=e=>{
  e.preventDefault()
  modal.style.display='flex'
}
document.querySelector('.close-btn').onclick=()=>modal.style.display='none'
window.onclick=e=>{if(e.target===modal)modal.style.display='none'}

document.getElementById('bookForm').onsubmit=e=>{
  e.preventDefault()
  alert('Online Booking Successful!')
  modal.style.display='none'
}

const cursor=document.createElement('div')
cursor.className='cursor'
document.body.appendChild(cursor)

window.addEventListener('mousemove',e=>{
  cursor.style.left=e.clientX+'px'
  cursor.style.top=e.clientY+'px'
})

document.querySelectorAll('a,button,.card').forEach(el=>{
  el.addEventListener('mouseenter',()=>cursor.classList.add('hover'))
  el.addEventListener('mouseleave',()=>cursor.classList.remove('hover'))
})
