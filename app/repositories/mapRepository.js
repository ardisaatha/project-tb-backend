const {
  pasiens,
  pasienb,
  kelurahan,
  puskesmas,
  sequelize,
  survei,
  Sequelize,
} = require("../models");
// const puskesmas = require("../models/puskesmas");

const mapping = async () => {
  const find = kelurahan.findAll({
    attributes: [
      "id",
      "nama_kelurahan",
      [Sequelize.fn("COUNT", Sequelize.col("pasienbs.id")), "jumlah_pasien"],
    ],
    include: [
      {
        model: pasienb,
        attributes: [],
      },
    ],
    group: ["kelurahan.id"],
  });
  return find;
};

const mapId = async (id) => {
  const find = await kelurahan.findByPk(id, {
    include: [
      {
        model: survei,
      },
      { model: pasienb },
    ],
  });

  if (!find || !find.survei) {
    return null; // Return null jika data tidak ditemukan
  }

  // Mendapatkan data survei dari hasil pencarian
  const surveiData = find.survei;

  // Membuat array data kegiatan
  const literasi = [
    {
      name: "literasi_excellent",
      value: parseInt(surveiData.literasi_excellent * 100),
    },
    {
      name: "literasi_inadequate",
      value: parseInt(surveiData.literasi_inadequate * 100),
    },
    {
      name: "literasi_problematic",
      value: parseInt(surveiData.literasi_problematic * 100),
    },
    {
      name: "literasi_sufficient",
      value: parseInt(surveiData.literasi_sufficient * 100),
    },
    {
      name: "avg_literasi",
      value: surveiData.avg_literasi,
    },
    {
      name: "persentase_literasi",
      value: parseInt(surveiData.persentase_literasi * 100),
    },
  ];

  const stigma = [
    {
      name: "stigma_rendah",
      value: parseInt(surveiData.stigma_rendah * 100),
    },
    {
      name: "stigma_sedang",
      value: parseInt(surveiData.stigma_sedang * 100),
    },
    {
      name: "stigma_tinggi",
      value: parseInt(surveiData.stigma_tinggi * 100),
    },
    {
      name: "tidak_stigma",
      value: parseInt(surveiData.tidak_stigma * 100),
    },
    {
      name: "avg_stigma",
      value: surveiData.avg_stigma,
    },
    {
      name: "persentase_stigma",
      value: parseInt(surveiData.persentase_stigma * 100),
    },
  ];

  const pengetahuan = [
    {
      name: "pengetahuan_baik",
      value: parseInt(surveiData.pengetahuan_baik * 100),
    },
    {
      name: "pengetahuan_buruk",
      value: parseInt(surveiData.pengetahuan_buruk * 100),
    },
    {
      name: "pengetahuan_cukup",
      value: parseInt(surveiData.pengetahuan_cukup * 100),
    },
    {
      name: "pengetahuan_kurang",
      value: parseInt(surveiData.pengetahuan_kurang * 100),
    },
    {
      name: "avg_pengetahuan",
      value: surveiData.avg_pengetahuan,
    },
    {
      name: "persentase_pengetahuan",
      value: parseInt(surveiData.persentase_pengetahuan * 100),
    },
  ];

  // const kegiatan = [
  //   ...literasi,
  //   ...stigma,
  //   ...pengetahuan,
  // ];

  return {
    find,
    literasi,
    stigma,
    pengetahuan,
  };
};

const mappingFaskes = async () => {
  return await puskesmas.findAll();
};

module.exports = { mapping, mapId, mappingFaskes };
