(function () {
    if (window.dat && window.dat.GUI) {
        return;
    }

    function Chain() {}

    Chain.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    Chain.prototype.min = function () {
        return this;
    };
    Chain.prototype.max = function () {
        return this;
    };
    Chain.prototype.step = function () {
        return this;
    };
    Chain.prototype.name = function () {
        return this;
    };
    Chain.prototype.listen = function () {
        return this;
    };
    Chain.prototype.onChange = function () {
        return this;
    };

    function GUI() {
        this.domElement = document.createElement("div");
        this.domElement.style.display = "none";
    }

    GUI.prototype.addFolder = function () {
        return this;
    };
    GUI.prototype.add = function () {
        return new Chain();
    };
    GUI.prototype.addColor = function () {
        return new Chain();
    };

    window.dat = { GUI: GUI };
})();
