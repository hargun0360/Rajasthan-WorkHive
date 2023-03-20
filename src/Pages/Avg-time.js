let key;
let avg;
let ans;
let ind;
let f = false;
export const Avg_time = (arr , k , avg_time) => {
    console.log(arr,k,avg_time);
    key = k;
    arr.map((s) => {
        let ind;
        let a = s.split(",");
       ind =  a.findIndex(function checkNumber(num) {
            return num == k;
          });
          if(ind < 0){
            ans = "-"
          }else if(ind == 0){
            ans =  0;
          }else{
            ans =  ind * avg_time;
          }
      
    })

    return ans;
}



