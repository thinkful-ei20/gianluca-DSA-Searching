const getMaxProfit = shares => {

	console.log(shares);

	/**
	 * Keep track of index of smallest and largest share index
	 * for max profit
	 */
	let smallest = 0;
	let largest = 1;

	/**
	 * keep track of the most recent minimum for calculating
	 * profits
	 */

	let minIndex = 0;

	for(let i = 1; i < shares.length; i++) {
		if(shares[minIndex] > shares[i]) {
			minIndex = i;
		}

		if(shares[largest] - shares[smallest] < shares[i] - shares[minIndex]) {
			largest= i;
			smallest = minIndex;
		}
	}

	return shares[largest] - shares[smallest];
};

const input = [128, 97, 121, 123, 98, 97, 105];
console.log(getMaxProfit(input));