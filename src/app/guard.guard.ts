import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  const router=inject(Router)
  if(localStorage.getItem('user')=="asd"&&localStorage.getItem('pass')=='asd')
    {return true;}
  else{
    if(localStorage.getItem('user')!="" || localStorage.getItem('pass')!='')
      {
    alert('Invalid details')
  }
    router.navigateByUrl('')
    return false;
  }
  
};
