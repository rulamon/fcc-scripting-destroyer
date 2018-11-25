	const destroyer = (arr, ...args) => arr.filter(x => !args.includes(x));
	console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));