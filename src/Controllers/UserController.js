class UserController {

    constructor(formId) { /* trouxe do java para o html */

        this.form = document.getElementById(formId);
        this.onSubmit();

    }
 
   onSubmit() {    /* quando tiver submit na pag, ele irá chamar */
     this.form.addEventListener("submit", (e)=> { /* monitorar quando alguem clicar no submit */
      e.preventDefault(); /*irei parar o comportamento padrão */
        this.getValues();

     })
     }
     
     message(user) {
        console.log(user);
     }
     
     validation (element){
      if(["email","password"].indexOf(element.name) > -1 && !element.value) {
         element.classList.remove("success")
         element.classList.add("error")  /* adc uma classe chamada error */
         return false;
        } else {
         element.classList.remove("error")
         element.classList.add("success")
     }
   }

     getValues() {   /*vai pegar os valores */
      let user = {};
      let isvalid = true;
      [...this.form.elements].forEach((element, index) => {  /* os ... irá se transformar em arrays */
         
         isvalid = this.validation(element);
     
        if(element.name){
           user[element.name] = element.value;       /* elemento vem todo o elemento html que ele está percorrendo */
        }
   
     })
     if(!isvalid) {
        return false;
     }

     let object = new User(user.email, user.password);
     
      this.message(object);
    }
   }