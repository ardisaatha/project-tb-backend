const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const penilaianRepositories = require("../repositories/penilaianRepositroy");
const puskesmasRepositories = require("../repositories/faskesRepository");

const createNilai = async (reqBody) => {
  const { id_pusk, kegiatan, sasaran, target, realisasi, capaian, nilai } =
    reqBody;

  const puskesmas = await puskesmasRepositories.getPuskById(id_pusk);

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
    // const existingPenilaian = await penilaianRepositories.getPenilaianByIdPusk(
    //   id_pusk
    // );
    // console.log("INIIII");
    // console.log(existingPenilaian);

    // if (puskesmas.penilaians.length === 18) {
    //   // Jika penilaian sudah ada, hapus penilaian yang sudah ada
    //   penilaianRepositories.deletePenilaianByIdPusk(id_pusk);
    //   const newPenilaian = {
    //     id_pusk,
    //     kegiatan,
    //     sasaran,
    //     target,
    //     realisasi,
    //     capaian,
    //     nilai,
    //   };
    //   return await penilaianRepositories.createNilai(newPenilaian);
    // } else {
    const newPenilaian = {
      id_pusk,
      kegiatan,
      sasaran,
      target,
      realisasi,
      capaian,
      nilai,
    };
    return await penilaianRepositories.createNilai(newPenilaian);
  }
  // }
};

const getNilaiByIdPusk = async (id) => {
  const result = await penilaianRepositories.getPenilaianByIdPusk(id);
  const puskesmas = await puskesmasRepositories.getPuskById(id);

  // validasi data yang kosong
  if (!puskesmas)
    throw new ApiError(httpStatus.NOT_FOUND, "puskesmas not found");
  if (result.length === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, "Puskesmas Belum Di Nilai");
  } else {
    return result;
  }
};

const updateNilaiByIdPusk = async (reqBody, id) => {
  const { id_pusk, kegiatan, sasaran, target, realisasi, capaian, nilai } =
    reqBody;
  const puskesmas = await puskesmasRepositories.getPuskById(id);

  if (!puskesmas) {
    throw new ApiError(httpStatus.NOT_FOUND, "puskesmas not found");
  } else {
    const newPenilaian = {
      id_pusk,
      kegiatan,
      sasaran,
      target,
      realisasi,
      capaian,
      nilai,
    };
    await penilaianRepositories.updatePenilaianPusk(newPenilaian, id);

    return await puskesmasRepositories.getPuskById(id);
  }
};

const deletNilaiPusk = async (id) => {
  const nilai = await penilaianRepositories.getPenilaianByIdPusk(id);
  const puskesmas = await puskesmasRepositories.getPuskById(id);

  // validasi data yang kosong
  if (!puskesmas)
    throw new ApiError(httpStatus.NOT_FOUND, "puskesmas not found");
  if (nilai.length === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, "Puskesmas Belum Di Nilai");
  } else {
    return await penilaianRepositories.deletePenilaianByIdPusk(id);
  }
};

module.exports = {
  createNilai,
  getNilaiByIdPusk,
  deletNilaiPusk,
  updateNilaiByIdPusk,
};
