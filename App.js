var maxArea = function(height) {
    let max=0
    let i=0
    let j=height.length-1
    while(i<j){
        let minHeight=Math.min(height[i],height[j])
        let width=j-i
        if((minHeight*width)>max){
            max=minHeight*width
        }
        if(height[i]<height[j]){
            i++
        }else{
            j--
        }
           }
    return max
};