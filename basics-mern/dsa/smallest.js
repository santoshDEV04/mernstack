function smallest(nums) {
    let smallest = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] < smallest) {
            smallest = nums[i]
        }
    }
    return smallest;
}

let nums = [3,2,5,1,0.5]
console.log(smallest(nums));