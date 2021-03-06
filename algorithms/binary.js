const data = [
	89, 30, 25, 32, 72, 70, 51, 42, 25,
	24, 53, 55, 78, 50, 13, 40, 48, 32,
	26, 2 , 14, 33, 45, 72, 56, 44, 21,
	88, 27, 68, 15, 62, 93, 98, 73, 28,
	16, 46, 87, 28, 65, 38, 67, 16, 85,
	63, 23, 69, 64, 91, 9 , 70, 81, 27,
	97, 82, 6 , 88, 3 , 7 , 46, 13, 11,
	64, 76, 31, 26, 38, 28, 13, 17, 69,
	90, 1 , 6 , 7 , 64, 43, 9 , 73, 80,
	98, 46, 27, 22, 87, 49, 83, 6 , 39,
	42, 51, 54, 84, 34, 53, 78, 40, 14,
	5
];

const _binarySearch = (arr, tracker, start, end) => {

	start = !start ? 0 : start;
	end = !end ? arr.length-1 : end;

	let midIndex = Math.floor((start + end)/2);
	tracker.steps++;

	if(arr[midIndex] === tracker.lookup) {
		const final = tracker.steps;
		return final;
	}
	else if( arr[midIndex] < tracker.lookup) {
		return _binarySearch(arr, tracker, midIndex + 1, end);
	}
	else if( arr[midIndex] > tracker.lookup) {
		return _binarySearch(arr, tracker, start, midIndex - 1);
	}
};

const binarySearch = (arr, lookup) => {

	const tracker = {
		steps:0,
		lookup
	};

	const sorted = arr.sort((a,b) => a - b);

	return _binarySearch(sorted, tracker);

};

const value = 9;
const result = binarySearch(data, value);
console.log(`Found value ${value} in ${result} steps (data was pre-sorted)`);