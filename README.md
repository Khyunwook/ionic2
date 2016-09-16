# ionic2
My ionic2 Blog

Http service doesn't return an array, it returns an Observable.

#button,ion-item
```html
<button ion-item> VS <ion-item>
```
#[square brackets]
```html
this.myName = "Josh"
<something [myname] = "myName">
//he myname property would be set to “Josh”, because myName would get evaluated first in this instance.

<ion-checkbox checked="true"></ion-checkbox> 
-> <ion-checkbox [checked]="item.checked"></ion-checkbox>

```

#Observable
```javascript
//ex 
//------------Amodel.ts----------------------
export class Amodel{
      checklist;
      checklistObserver;
      
      construct(){
            //Observal 생성 
            this.checklist = Observable.create( observer => {
                  this.checklistObserver = observer;
            });
           //checklist = observable
           //checklistObserver = subscriber
           //what is subscriber?
      }

      amethod():void{
            this.checklistObserver.next(true);
            //amethod 함수 실행 시 checklistObserver.next(args)로 이벤트 전송
      }
}
//-------------------------------------------

//--------------Bcontrol.ts-------------------
export Bcontrol{
      amodel = new Amodel();
      //amodel 의 프로퍼티인 checklist, checklistObserver 접근 가능
      amodel.checklist.subscribe( update => {} );
      //checklist 프로퍼티를 이용해서 해당 Object가 다른 곳에서수정,사용되었는지에 대한 정보를 구독받음
}
//--------------------------------------------

//----------------Cview.ts---------------------
export Cview{
      amodel.amethod(); 
      //Bcontrol에서 전달받은 amodel에서 amethod()를 호출하면 해당 Obj의 this.checklistObserver.next(true); 실행
      //해당 Obj의 checklist(Observable)의 subscribe을 이용해서 변화를 구독받음
 }
//---------------------------------------------
  ```
