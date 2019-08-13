"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.mongoUrl = "mongodb://localhost:27017/nodets_jest";
        this.PORT = process.env.PORT || 3000;
        this.init();
        this.listen();
    }
    App.prototype.init = function () {
        this.setCors();
        this.setBodyParser();
        this.setUpMongoDb();
    };
    App.prototype.setCors = function () {
        this.app.use(cors);
    };
    App.prototype.setBodyParser = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    };
    App.prototype.setUpMongoDb = function () {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
        mongoose.connection.once("open", function () {
            console.log("Database is connected");
        });
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.PORT, function () {
            console.log("Server is running at port", _this.PORT);
        });
    };
    return App;
}());
exports.default = new App();
//# sourceMappingURL=app.js.map