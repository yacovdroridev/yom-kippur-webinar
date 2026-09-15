const form=document.querySelector('#registration-form');
const statusEl=document.querySelector('.form-status');
form.addEventListener('submit',async(e)=>{
  if(form.action.includes('FORM_ENDPOINT_PLACEHOLDER')){
    e.preventDefault();
    statusEl.className='form-status error';
    statusEl.textContent='טופס ההרשמה ייפתח ממש בקרוב.';
    return;
  }
  e.preventDefault();
  const button=form.querySelector('button');
  button.disabled=true; button.textContent='שולחים...'; statusEl.textContent='';
  try{
    const res=await fetch(form.action,{method:'POST',body:new FormData(form),mode:'no-cors'});
    form.reset(); statusEl.className='form-status success';
    statusEl.textContent='נרשמת בהצלחה. נתראה בוובינר ♡';
  }catch(err){statusEl.className='form-status error';statusEl.textContent='לא הצלחנו לשלוח. נסו שוב בעוד רגע.'}
  finally{button.disabled=false;button.innerHTML='מצטרפים לקבוצה <span>←</span>'}
});
