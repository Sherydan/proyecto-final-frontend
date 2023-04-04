
// number of columns must be 7
// none of the columns can be empty

// check if the csv file is in the correct format
const checkCsvFormat = (csvData) => {
    const csvDataFirstRowLength = csvData[0].length;
    if (csvDataFirstRowLength !== 6 ) {
      return false;
    }
  
    return true;
  };
  
  export default checkCsvFormat;

