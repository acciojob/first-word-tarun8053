function firstWord(str) {
  // your code here
	str = str.trimStart();
	if(str == "") return ""
	let i = 0;
let ans = "";
while(i < str.length){
    if(str[i] == " "){
         break;
    }else{
        ans += str[i];
    }
    i++;
}
if(ans === "") return str;
else return ans;
	
	
}

// Do not change the code below

const s = prompt("Enter String:")
alert(firstWord(s))
