function computeAmount() {
    let total=0
    return {
        lacs:function(amount){
            total+=amount*100000
            return this

        },
        crore(amount){
            total+=amount*10000000
            return this
        },
        thousand(amount){
            total+=amount*1000
            return this
        },
        value:function() {
           return total 
        }
    }
}

console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value())