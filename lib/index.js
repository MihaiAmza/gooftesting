function goof(resource_file_path, culture){
    this.Error = require("./errors");
    this.Messages = require("./messages")(resource_file_path, culture);
    return this;
}

module.exports = goof;

