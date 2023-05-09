function stringLength (arg){
    let count = 0;
    if(arg.length >= 1 && arg.length <= 10){
        for (let i = 0 ; i <= arg.length ; i++){
            count = i;
        }
        return count;
    }
    else {
        throw new Error ("Wrong value");
    }
}
//stringLength("Tamoorsaeed22")
module.exports = stringLength;