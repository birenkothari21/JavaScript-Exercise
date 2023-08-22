console.log(moment().format("MMMM Do Y, H:mm:ss a")); // August 22nd 2023, 3:45:33 pm
console.log(moment().format("dddd")); // Tuesday
console.log(moment().format("MMM Do YY")); // Aug 22nd 23
console.log(moment().format("YYYY [escaped] YYYY")); // 2023 escaped 2023
console.log(moment().format()); // 2023-08-22T15:45:33+05:30

console.log(moment("2011-10-31", "YYYY-MM-DD").fromNow()); // 12 years ago
console.log(moment("20120620", "YYYYMMDD").fromNow()); // 11 years ago
console.log(moment().startOf("day").fromNow()); // 16 hours ago
console.log(moment().endOf("day").fromNow()); // in 8 hours
console.log(moment().startOf("hour").fromNow()); // an hour ago
console.log(moment().endOf("hour").fromNow()); // in 8 hours

console.log(moment().subtract(10, "days").calendar()); // 08/12/2023
console.log(moment().subtract(6, "days").calendar()); // Last Wednesday at 3:45 PM
console.log(moment().subtract(3, "days").calendar()); // Last Saturday at 3:45 PM
console.log(moment().subtract(1, "days").calendar()); // Yesterday at 3:45 PM
console.log(moment().calendar()); // Today at 3:45 PM
console.log(moment().add(1, "days").calendar()); // Tomorrow at 3:45 PM
console.log(moment().add(3, "days").calendar()); // Friday at 3:45 PM
console.log(moment().add(10, "days").calendar()); // 09/01/2023

console.log(moment.locale()); // en
console.log(moment().format("LT")); // 3:46 PM
console.log(moment().format("LTS")); // 3:46:46 PM
console.log(moment().format("L")); // 08/22/2023
console.log(moment().format("l")); // 8/22/2023
console.log(moment().format("LL")); // August 22, 2023
console.log(moment().format("ll")); // Aug 22, 2023
console.log(moment().format("LLL")); // August 22, 2023 3:46 PM
console.log(moment().format("lll")); // Aug 22, 2023 3:46 PM
console.log(moment().format("LLLL")); // Tuesday, August 22, 2023 3:46 PM
console.log(moment().format("llll")); // Tue, Aug 22, 2023 3:46 PM
