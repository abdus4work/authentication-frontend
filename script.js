const pass=document.getElementById('password');
const con_pass=document.getElementById('con-pass');
const match=document.getElementById('pass-match');
const toggle_btn=document.getElementById('tgl-pass');
con_pass.addEventListener('input',(e)=>{
    if(pass.value==con_pass.value){
        match.innerHTML='';
        con_pass.classList.remove('bg-n');
        pass.classList.remove('bg-n');
        match.classList.remove('text-danger');
    }
    else{
        match.innerHTML='<i class="fa-solid fa-xmark"></i> Password doesn\'t match';
        match.classList.add('text-danger');
    }
});

const s_btn=document.querySelectorAll('button');
s_btn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
    })
})

// toggle_btn.addEventListener('click',()=>{
//     let type =pass.getAttribute('type');
//     type=type=='password'?'text':'password';
//     pass.setAttribute('type',type);
//     toggle_btn.classList.toggle('fa-eye')
// });
