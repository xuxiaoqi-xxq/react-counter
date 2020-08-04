function total(total = 0, action) {
    switch (action.type) {
        case 'INCREASE': {
            //console.log(action);
            return total + 1;
        } 
        case 'DECREASE': return total - 1;
        case 'CLEAR': return 0;
        default :  {
            //console.log(action);
            return total;
        } 
    }
}

export default total;