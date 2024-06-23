# Password Validation UI
Password Validation Check in Javascript
  
https://youtu.be/Hi8DVOaZ0Ug
   
```bash
npm install -g live-server
```
```bash
live-server --port=9002 --browser=chrome --ignorePattern=["*.css","*.js"]
```


```js
const _lowr = new RegExp('(?=.*[a-z])'); /* 소문자포함 */
const _uper = new RegExp('(?=.*[A-Z])'); /* 대문자포함 */
const _numb = new RegExp('[0-9]');       /* 숫자포함 */
const _spcl = new RegExp('(?=.*[~!@#\$%\^&\*])'); /* 특수문자포함 */
const _leng = new RegExp('(?=.{8,})');   /* 8자이상 */
```


![](screenshot.png)
