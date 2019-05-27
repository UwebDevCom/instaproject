


export default class SaveLocalStorage{
    constructor(isLoggedIn,userId){
        this.isLoggedIn  = isLoggedIn;  
        this.userId = userId;  
    }

    saveUserOnLogin() {
        let localData = JSON.parse(localStorage.getItem('myData'));
        if ( localData === null || localData===false) {
          localStorage.setItem('myData', this.isLoggedIn);
        }else{
            if (!localStorage.getItem('userId')){ localStorage.setItem('userId', JSON.stringify(this.userId))} ;
        }
    }
}

 




         // }else {
        //     localData = localStorage.getItem('myData');
            
        //     return (
        //       <div className="App">
        //         { context.state.isLoggedIn || localData=="true" ? <AppRouter /> : <LoginFirst />  }
        //       </div>
        //     );
        // }