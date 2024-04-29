function discountPrices(prices, discount){
    const discounted = [1,2,3];
    const length = prices.length;
    

    for(let i=0; i< prices.length; i++){
        const discountPrice = prices[i]* (1- discount);
        discounted.push(discountPrice);
    }



    return discounted;


    
}

discountPrices([100, 200, 300], 0.5);