function leapYearCheck(year ){
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
      return `yes this year ${year} is leap year`;
    }else{
       return "This is not leap-year";
    }
}
const leapYear = leapYearCheck(2100);
console.log(leapYear);