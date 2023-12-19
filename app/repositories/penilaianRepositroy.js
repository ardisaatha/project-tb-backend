const { penilaian, puskesmas } = require("../models");

const createNilai = async (data) => {
  return await penilaian.create(data);
};

const getPenilaianByIdPusk = async (id_pusk) => {
  // Implementasikan logika untuk mengambil penilaian berdasarkan id_pusk dari penyimpanan data (misalnya, database)
  // Gunakan sesuai dengan teknologi penyimpanan data yang Anda gunakan
  const today = new Date();
  const currentYear = today.getFullYear();
   const currentMonthNumber = today.getMonth();
  const getIndonesianMonth = (monthNumber) => {
    const indonesianMonths = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    return indonesianMonths[monthNumber];
  };

  const currentMonth = getIndonesianMonth(currentMonthNumber);
  const find = puskesmas.findByPk(id_pusk, {
    include: [
      {
        model: penilaian,
        where: {
          tahun: currentYear,
          bulan: currentMonth,
        },
      },
    ],
  });
  return find;
  // const result = await penilaian.findAll({
  //   where: { id_pusk },
  // });
  // return result;
};

const getPuskById = async (id) => {
  // console.log(currentYear)
  // console.log(currentMonth)
};

const updatePenilaianPusk = async (reqBody, id_pusk) => {
  // Implementasikan logika untuk mengambil penilaian berdasarkan id_pusk dari penyimpanan data (misalnya, database)
  // Gunakan sesuai dengan teknologi penyimpanan data yang Anda gunakan
  const result = await penilaian.update(reqBody, {
    where: { id_pusk },
  });
  return result;
};

const deletePenilaianByIdPusk = async (id_pusk) => {
  // Implementasikan logika untuk menghapus penilaian berdasarkan id_pusk dari penyimpanan data
  // Misalnya, jika Anda menggunakan database MongoDB, Anda bisa menggunakan Mongoose
  // untuk menghapus dokumen berdasarkan id_pusk.
  const result = await penilaian.destroy({
    where: { id_pusk },
  });
  return result;
};

const puskId = async (id) => {
  const find = await puskesmas.findByPk(id, {
    include: [
      {
        model: survei,
      },
      {
        model: pasienb,
      },
    ],
  });
  return find;
};

module.exports = {
  createNilai,
  getPenilaianByIdPusk,
  deletePenilaianByIdPusk,
  updatePenilaianPusk,
};
