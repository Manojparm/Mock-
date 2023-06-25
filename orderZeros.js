/* 
Moke Test -1  Question NO 1:
*/




function adjustZeroes(nums){
      let i=0;

      for(let j=0;j<nums.length;j++){
        if(nums[j]!==0){
            nums[i]=nums[j];
            i++;
        }
      }

  while(i<nums.length){
    nums[i]=0;
    i++;
  }

}

const nums=[0,1,0,3,12];
adjustZeroes(nums);
console.log(nums);