const { penilaian, puskesmas } = require("../models");

const createNilai = async (data) => {
  return await penilaian.create(data);
};

const getPenilaianByIdPusk = async (id_pusk) => {
  // Implementasikan logika untuk mengambil penilaian berdasarkan id_pusk dari penyimpanan data (misalnya, database)
  // Gunakan sesuai dengan teknologi penyimpanan data yang Anda gunakan
  const result = await penilaian.findAll({
    where: { id_pusk },
  });
  return result;
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
