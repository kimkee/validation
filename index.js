const validate = {
    init: function(){
        this.evt();
    },
    pwds: document.querySelector("input.pwds"),
    btog: document.querySelector("button.btog"),
    evt: function(){
      this.btog.addEventListener("click", e => this.togs() );
      this.pwds.addEventListener("keyup", e => this.check(e.target.value) );
    },
    check: function(txt){
        console.log(txt);
        const _lowr = new RegExp('(?=.*[a-z])'); /* 소문자포함 */
        const _uper = new RegExp('(?=.*[A-Z])'); /* 대문자포함 */
        const _numb = new RegExp('[0-9]'); /* 숫자포함 */
        const _spcl = new RegExp('(?=.*[~!@#\$%\^&\*])'); /* 특수문자포함 */
        const _leng = new RegExp('(?=.{8,})');   /* 8자이상 */

        const lowr = document.querySelector("li.lowr");
        const uper = document.querySelector("li.uper");
        const numb = document.querySelector("li.numb");
        const spcl = document.querySelector("li.spcl");
        const leng = document.querySelector("li.leng");

        const show = el => el.classList.remove("check");
        const hide = el => el.classList.add("check");
        
        _lowr.test(txt) ? hide(lowr) : show(lowr);
        _uper.test(txt) ? hide(uper) : show(uper);
        _numb.test(txt) ? hide(numb) : show(numb);
        _spcl.test(txt) ? hide(spcl) : show(spcl);
        _leng.test(txt) ? hide(leng) : show(leng);
    },
    togs: function(){
        if( this.pwds.type == "password" ){
            this.pwds.setAttribute("type","text");
            this.btog.classList.add("view");
        }else{
            this.pwds.setAttribute("type","password");
            this.btog.classList.remove("view");
        }
    }
};

document.addEventListener('DOMContentLoaded', validate.init() );