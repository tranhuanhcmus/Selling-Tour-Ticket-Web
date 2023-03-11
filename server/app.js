var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var { create } = require("express-handlebars");

var app = express();

const hbs = create({
    //config
    encoding: "utf8",
    extname: `.handlebars`,
    layoutsDir: path.join(__dirname, "views/layout"),
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "views/partials"),
    helpers: {
        range: (start, end, step) => {
            if (step === 0) {
                step = 1;
            }
            if (!step) {
                step = end > start ? 1 : -1;
            }
            let result = [];
            if (step > 0) {
                for (let i = start; i <= end; i += step) {
                    result.push(i);
                }
            } else {
                for (let i = start; i >= end; i += step) {
                    result.push(i);
                }
            }
            return result;
        },
    },
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    },
});
// view engine setup
app.engine("handlebars", hbs.engine);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/index.js"));

app.use("/qna", require("./routes/qnaRoute"));

app.use("/Booking", require("./routes/BookingRoute"));

app.use("/admin", require("./routes/admin"));

app.use("/Booking-details", require("./routes/Booking-detailsRoute"));
app.use("/paymentmethods", require("./routes/PaymentMethodRouter"));
app.use("/findticked", require("./routes/findtickedRoute"));
app.use("/ticketinfo", require("./routes/ticketinfoRoute"));
app.get("/createTable", (req, res) => {
    let model = require("./models");
    model.sequelize.sync().then(() => {

        res.send("table create");
    });
});
// test các hàm database xem có chạy dc ko
app.use("/api/benxe", require("./routes/benxe"));
app.use("/api/user", require("./routes/user"));
app.use("/api/chuyenxe", require("./routes/chuyenxe"));
app.use("/api/ct_chuyenxe", require("./routes/ct_chuyenxe"));
app.use("/api/ct_phieuxe", require("./routes/ct_phieuxe"));
app.use("/api/diemdon", require("./routes/diemdon"));
app.use('/api/khachhang', require("./routes/khachhang"));
app.use('/api/nhaxe', require("./routes/nhaxe"));
app.use('/api/phieuxe', require("./routes/phieuxe"));

// 404 page
app.use((req, res) => {
    res.status(404).render("404", { title: "404 Error" });
});

module.exports = app;