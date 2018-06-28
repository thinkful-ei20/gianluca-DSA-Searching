

export const linearSearch = (arr, lookup) => {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === lookup) {
			return i + 1;
		}
	}
	return null;
};

export const binarySearch = (arr, lookup) => {
	const tracker = {
		steps:0,
		lookup
	};

	const oldArray = [...arr];

	const sorted = oldArray.sort((a,b) => a - b);

	_binarySearch(sorted, tracker);
	return tracker.steps;

};

const _binarySearch = (arr, tracker, start, end) => {

	start = !start ? 0 : start;
	end = !end ? arr.length-1 : end;

	let midIndex = Math.floor((start + end)/2);
	tracker.steps++;

	if(arr[midIndex] === tracker.lookup) {
		const final = tracker.steps;
		console.log('In Binary Search!', final);
		return final;
	}
	else if( arr[midIndex] < tracker.lookup) {
		_binarySearch(arr, tracker, midIndex + 1, end);
	}
	else if( arr[midIndex] > tracker.lookup) {
		_binarySearch(arr, tracker, start, midIndex - 1);
	}
};

export default {
	linearSearch,
	binarySearch
};