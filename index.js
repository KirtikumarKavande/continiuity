var MyStack = function() {
this.mainQueue=[]
this.helperQueue=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.mainQueue.push(x)
};
MyStack.prototype.keepOnlyOneElementInArray=function(){
    let mainQueueLength=this.mainQueue.length
    while(mainQueueLength>1){
        let movedEle=this.mainQueue.shift()
        this.helperQueue.push(movedEle)
        mainQueueLength--
    }
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
   this.keepOnlyOneElementInArray()
    let lastEle= this.mainQueue.shift()
    this.mainQueue=this.helperQueue
    this.helperQueue=[]
    return lastEle
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
   this.keepOnlyOneElementInArray()
    let top= this.mainQueue.shift()
    this.helperQueue.push(top)
    this.mainQueue=this.helperQueue
    this.helperQueue=[]
    return top
   
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.mainQueue.length===0?true:false
};
