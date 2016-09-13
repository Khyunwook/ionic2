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
```

#Observable
```javascript
this.checklist = Observable.create( observer => {
      this.checklistObserver = observer;
    });
    //checklist = observable
    //checklistObserver = subscriber
    //what is subscriber?
  ```
