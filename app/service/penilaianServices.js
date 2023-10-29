const xlsx = require("xlsx");
const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const penilaianRepositories = require("../repositories/penilaianRepositroy");
const puskesmasRepositories = require("../repositories/faskesRepository");

// Fungsi untuk mengambil hanya kolom tertentu dari sheet tertentu dalam file Excel
const extractColumnsFromExcelSheet = async (
  file,
  selectedColumns,
  sheetName
) => {
  try {
    const workbook = xlsx.read(file, { type: "buffer" });

    // Cek apakah sheet dengan nama yang diinginkan ada dalam workbook
    if (!workbook.SheetNames.includes(sheetName)) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "Sheet not found in the Excel file"
      );
    }

    const worksheet = workbook.Sheets[sheetName];
    const rawData = xlsx.utils.sheet_to_json(worksheet);

    const dataToInsert = rawData.map((row) => {
      const formattedData = {};
      for (const column of selectedColumns) {
        formattedData[column] = row[column];
      }
      return formattedData;
    });

    const success = await penilaianRepositories.createNilai(dataToInsert);
    if (success) {
      return { success: true, message: "Data inserted into the database" };
    } else {
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Error inserting data into the database"
      );
    }
  } catch (error) {
    console.error("Error importing data from Excel: " + error);
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Error importing data from Excel"
    );
  }
};

const extractDataFromExcel = (fileBuffer) => {
  const workbook = xlsx.read(fileBuffer, { type: "buffer" });
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  // Inisialisasi range yang akan dibaca, misalnya C29:N46
  const range = "C29:N46";

  // Mendapatkan sel-sel dalam range yang diinginkan
  const selectedCells = worksheet[range];

  // Membuat objek JSON kosong untuk menyimpan data
  const jsonData = [];

  // Memproses setiap sel dalam range
  for (const cell in selectedCells) {
    const cellValue = selectedCells[cell].w; // Nilai sel
    // Disini Anda dapat menambahkan logika untuk memasukkan data ke dalam JSON
    // Berdasarkan sel-sel yang Anda inginkan dalam range
    // Misalnya, Anda bisa mendapatkan kolom dan baris dari nama sel dan menyimpannya dalam objek JSON
    const cellDetails = xlsx.utils.decode_cell(cell);
    const row = cellDetails.r;
    const col = cellDetails.c;
    jsonData.push({ row, col, value: cellValue });
  }

  return jsonData;
};

const createNilai = async (reqBody) => {
  console.log("AAAAA")
  const { id_pusk, kegiatan, sasaran, target, realisasi, capaian, nilai } =
    reqBody;

  const puskesmas = await puskesmasRepositories.getFasyankesId(id_pusk);

  // validasi data yang kosong
  if (!puskesmas)
    throw new ApiError(httpStatus.BAD_REQUEST, "puskesmas not found");
  if (!kegiatan)
    throw new ApiError(httpStatus.BAD_REQUEST, "activity cannot be empty");
  if (!sasaran)
    throw new ApiError(httpStatus.BAD_REQUEST, "sasaran cannot be empty");
  if (!target)
    throw new ApiError(httpStatus.BAD_REQUEST, "target cannot be empty");
  if (!realisasi)
    throw new ApiError(httpStatus.BAD_REQUEST, "realisasi cannot be empty");
  if (!capaian)
    throw new ApiError(httpStatus.BAD_REQUEST, "capaian cannot be empty");
  if (!nilai)
    throw new ApiError(httpStatus.BAD_REQUEST, "nilai cannot be empty");
  else {
    const newPenilaian = {
      id_pusk,
      kegiatan,
      sasaran,
      target,
      realisasi,
      capaian,
      nilai,
    };
    console.log("BBBBB")
    return await penilaianRepositories.createNilai(newPenilaian);
  }
};

module.exports = {
  extractColumnsFromExcelSheet,
  extractDataFromExcel,
  createNilai,
};
