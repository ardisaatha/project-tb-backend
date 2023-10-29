const penilaianService = require("../service/penilaianServices");
const httpStatus = require('http-status');

// const createNilai = (req, res, next) => {
//   const { file, selectedColumns } = req.body;

//   if (!file || !selectedColumns || selectedColumns.length === 0) {
//     return res.status(400).json({ message: "Invalid request data" });
//   }

//   penilaianService
//     .createNilai(file, selectedColumns)
//     .then((result) => {
//       if (result.success) {
//         return res.status(200).json({ message: result.message });
//       } else {
//         return res.status(500).json({ message: result.message });
//       }
//     })
//     .catch((error) => {
//       console.error("Error uploading Excel file: " + error);
//       next(error);
//     });
// };

const createNilai = (req, res, next) => {
  penilaianService
    .createNilai(req.body)
    .then((penilaian) => {
      res.status(201).json({
        status: "Success",
        message: "Success add new scoring",
        data: penilaian,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const uploadAndConvertToJSON = async (req, res, next) => {
    try {
      if (!req.file) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'File not provided');
      }
  
      const fileBuffer = req.file.buffer;
      const extractedData = penilaianService.extractDataFromExcel(fileBuffer);
  
      res.status(httpStatus.OK).json({ message: 'Data extracted from Excel', data: extractedData });
    } catch (error) {
      console.error('Error extracting data from Excel: ' + error);
      next(error);
    }
  };

module.exports = {createNilai, uploadAndConvertToJSON}
