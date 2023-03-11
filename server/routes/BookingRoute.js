var express = require("express");
var router = express.Router();
const request = require("request-promise");
//const { checkTimeRange } = require("../public/utils/index")

const title = "BookingPage";
const title1 = "locds";

const Brand = [
  "Nhà xe Thành Bưởi",
  "Nhà xe Phương Trang",
  "Nhà xe Phương Tân Niên",
  "Nhà xe Tuấn Hưng",
];
const Place = ["TP Cà Mau", "TP Hồ Chí Minh", "TP Đà Nẵng", "TP Hà Nội"];
const TypeBed = ["Xe giường nằm", "Xe giường phòng", "Xe thường"];

router.get("/", async function (req, res) {
  const response = await request(`http://localhost:3000/api/chuyenxe/`);
  const data = [];
  const chuyenxe = await JSON.parse(response);
  for (i = 0; i < chuyenxe.length; i++) {
    chuyenxe[i].ngaykhoihanh = chuyenxe[i].ngaykhoihanh.substring(0, 10);
  }

  const start = req.query.start;
  const end = req.query.end;
  const day = req.query.day;
  const brand = req.query.brand;
  const tpden = req.query.tpden;
  const tpdi = req.query.tpdi;
  const title1 = `${tpdi} -  ${tpden}`;

  if (start && end) {
    const title1 = "ALL"
    chuyenxe.map((item) => { if (item.tgkhoihanh >= start && item.tgkhoihanh <= end) { data.push(item) } });
    await res.render("Pages/Booking", { data, Brand, Place, TypeBed, title, title1 });


  }
  else if (day && tpden && tpdi) {
    chuyenxe.map((item) => {
      if (Date.parse(new Date(item.ngaykhoihanh)) == Date.parse(new Date(day)) && item.tpden == tpden && item.tpdi == tpdi) { data.push(item) }
    });
    await res.render("Pages/Booking", { data, Brand, Place, TypeBed, title, title1 });
  }
  else if (tpden && tpdi) {
    chuyenxe.map((item) => {
      if (item.tpden == tpden && item.tpdi == tpdi) { data.push(item) }
    });
    await res.render("Pages/Booking", { data, Brand, Place, TypeBed, title, title1 });

  }
  else if (tpden) {
    chuyenxe.map((item) => {
      if (item.tpden == tpden) { data.push(item) }
    });
    await res.render("Pages/Booking", { data, Brand, Place, TypeBed, title, title1 });

  }
  else if (tpdi) {
    chuyenxe.map((item) => {
      if (item.tpden == tpdi) { data.push(item) }
    });
    await res.render("Pages/Booking", { data, Brand, Place, TypeBed, title, title1 });

  }
  else if (day) {
    const title1 = "ALL"
    chuyenxe.map((item) => { if (Date.parse(new Date(item.ngaykhoihanh)) == Date.parse(new Date(day))) { data.push(item) } });
    await res.render("Pages/Booking", { data, Brand, Place, TypeBed, title, title1 });

  }
  else if (brand) {
    const title1 = "ALL"
    chuyenxe.map((item) => { if (item.tennhaxe == brand) { data.push(item) } });
    await res.render("Pages/Booking", { data, Brand, Place, TypeBed, title, title1 });

  }


  else {
    const title1 = "ALL"
    chuyenxe.map((item) => data.push(item));
    await res.render("Pages/Booking", { data, Brand, Place, TypeBed, title, title1 });

  }
});



module.exports = router;