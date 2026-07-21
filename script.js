// Theme button
const btn=document.getElementById('themeBtn');

// Load saved theme
if(localStorage.theme==='dark'){
 document.body.classList.add('dark');
}

// Toggle theme and save
btn.onclick=()=>{
 document.body.classList.toggle('dark');
 localStorage.theme=document.body.classList.contains('dark')?'dark':'light';
};

/*
NEXT IDEAS:
1. Add clock
2. Add visitor counter
3. Add QR code
4. Add typing animation
5. Add particles background
6. Fetch GitHub profile using API
7. Add language switch
8. Add contact form
*/
