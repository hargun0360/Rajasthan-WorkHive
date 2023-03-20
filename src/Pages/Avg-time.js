let key;
let avg;
let ans;
let ind;
let f = false;
export const Avg_time = (arr , k , avg_time) => {
    // console.log(arr,k,avg_time);
    key = k;
    arr.map((s) => {
        let a = s.split(",");
        let ind = a.indexOf(k);
        // console.log(ind);
        ans = ind * avg_time
        if(ans > 0){
            return ans;
        }else{
            return -1*ans;
        }
    })

    if(ans > 0){
        return ans;
    }else{
        return -1*ans;
    }   
}



