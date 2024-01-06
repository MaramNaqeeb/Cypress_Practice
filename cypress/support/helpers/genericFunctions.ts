
class GenericFunctions {
  
  static randomNumber() {
    return Math.round(1000 * Math.random());
  }
  static nextDayDate() {
    const NOW_DATE = new Date();
    let day = NOW_DATE.getDate()+1;
    let month = NOW_DATE.getMonth() +1;
    let year = NOW_DATE.getFullYear();
    let currentDate: any = `${year}-${month}-${day}`;
    return currentDate;
  }
  static nextFifteenDaysDate() {
    const NOW_DATE = new Date();
    let day = NOW_DATE.getDate()+15;
    let month = NOW_DATE.getMonth() +1;
    let year = NOW_DATE.getFullYear();
    let currentDate: any = `${year}-${month}-${day}`;
    return currentDate;
  }

  static nextThreeDaysDate() {
    const NOW_DATE = new Date();
    let day = NOW_DATE.getDate() + 3;
    let month = NOW_DATE.getMonth() +1;
    let year = NOW_DATE.getFullYear();
    let currentDate: any = `${year}-${month}-${day}`;
    return currentDate;
  }
}
export default GenericFunctions;
