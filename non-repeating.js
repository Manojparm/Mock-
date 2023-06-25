/*  Mock Test-1 Question No-2 */


function myFirstUniqueChar(s){
    const charFreq={};

    for(let i=0; i<s.length;i++){
        const char=s[i];
        charFreq[char]=(charFreq[char] || 0) + 1; 
    
    }

for (let i=0; i<s.length;i++){
    const char=s[i];
    if(charFreq[char]===1){
        return i;
    }
}

return -1;
}


console.log(myFirstUniqueChar("leetcode"));
console.log(myFirstUniqueChar("loveleetcode"));
console.log(myFirstUniqueChar("aabb"));