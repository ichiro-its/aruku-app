/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.aruku_interfaces.proto.ConfigWalking', null, global);
goog.exportSymbol('proto.aruku_interfaces.proto.Empty', null, global);
goog.exportSymbol('proto.aruku_interfaces.proto.Point2', null, global);
goog.exportSymbol('proto.aruku_interfaces.proto.SetWalking', null, global);
goog.exportSymbol('proto.aruku_interfaces.proto.Status', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aruku_interfaces.proto.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aruku_interfaces.proto.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.aruku_interfaces.proto.Empty.displayName = 'proto.aruku_interfaces.proto.Empty';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aruku_interfaces.proto.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.aruku_interfaces.proto.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aruku_interfaces.proto.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aruku_interfaces.proto.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aruku_interfaces.proto.Empty}
 */
proto.aruku_interfaces.proto.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aruku_interfaces.proto.Empty;
  return proto.aruku_interfaces.proto.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aruku_interfaces.proto.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aruku_interfaces.proto.Empty}
 */
proto.aruku_interfaces.proto.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aruku_interfaces.proto.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aruku_interfaces.proto.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aruku_interfaces.proto.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aruku_interfaces.proto.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aruku_interfaces.proto.Point2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aruku_interfaces.proto.Point2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.aruku_interfaces.proto.Point2.displayName = 'proto.aruku_interfaces.proto.Point2';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aruku_interfaces.proto.Point2.prototype.toObject = function(opt_includeInstance) {
  return proto.aruku_interfaces.proto.Point2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aruku_interfaces.proto.Point2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aruku_interfaces.proto.Point2.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    y: +jspb.Message.getFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aruku_interfaces.proto.Point2}
 */
proto.aruku_interfaces.proto.Point2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aruku_interfaces.proto.Point2;
  return proto.aruku_interfaces.proto.Point2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aruku_interfaces.proto.Point2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aruku_interfaces.proto.Point2}
 */
proto.aruku_interfaces.proto.Point2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aruku_interfaces.proto.Point2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aruku_interfaces.proto.Point2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aruku_interfaces.proto.Point2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aruku_interfaces.proto.Point2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.aruku_interfaces.proto.Point2.prototype.getX = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.aruku_interfaces.proto.Point2.prototype.setX = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.aruku_interfaces.proto.Point2.prototype.getY = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.aruku_interfaces.proto.Point2.prototype.setY = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aruku_interfaces.proto.ConfigWalking = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aruku_interfaces.proto.ConfigWalking, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.aruku_interfaces.proto.ConfigWalking.displayName = 'proto.aruku_interfaces.proto.ConfigWalking';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aruku_interfaces.proto.ConfigWalking.prototype.toObject = function(opt_includeInstance) {
  return proto.aruku_interfaces.proto.ConfigWalking.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aruku_interfaces.proto.ConfigWalking} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aruku_interfaces.proto.ConfigWalking.toObject = function(includeInstance, msg) {
  var f, obj = {
    jsonKinematic: jspb.Message.getFieldWithDefault(msg, 1, ""),
    jsonWalking: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aruku_interfaces.proto.ConfigWalking}
 */
proto.aruku_interfaces.proto.ConfigWalking.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aruku_interfaces.proto.ConfigWalking;
  return proto.aruku_interfaces.proto.ConfigWalking.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aruku_interfaces.proto.ConfigWalking} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aruku_interfaces.proto.ConfigWalking}
 */
proto.aruku_interfaces.proto.ConfigWalking.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJsonKinematic(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJsonWalking(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aruku_interfaces.proto.ConfigWalking.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aruku_interfaces.proto.ConfigWalking.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aruku_interfaces.proto.ConfigWalking} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aruku_interfaces.proto.ConfigWalking.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJsonKinematic();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getJsonWalking();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string json_kinematic = 1;
 * @return {string}
 */
proto.aruku_interfaces.proto.ConfigWalking.prototype.getJsonKinematic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.aruku_interfaces.proto.ConfigWalking.prototype.setJsonKinematic = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string json_walking = 2;
 * @return {string}
 */
proto.aruku_interfaces.proto.ConfigWalking.prototype.getJsonWalking = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.aruku_interfaces.proto.ConfigWalking.prototype.setJsonWalking = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aruku_interfaces.proto.SetWalking = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aruku_interfaces.proto.SetWalking, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.aruku_interfaces.proto.SetWalking.displayName = 'proto.aruku_interfaces.proto.SetWalking';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aruku_interfaces.proto.SetWalking.prototype.toObject = function(opt_includeInstance) {
  return proto.aruku_interfaces.proto.SetWalking.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aruku_interfaces.proto.SetWalking} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aruku_interfaces.proto.SetWalking.toObject = function(includeInstance, msg) {
  var f, obj = {
    run: jspb.Message.getFieldWithDefault(msg, 1, false),
    xMove: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    yMove: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    aMove: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    aimOn: jspb.Message.getFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aruku_interfaces.proto.SetWalking}
 */
proto.aruku_interfaces.proto.SetWalking.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aruku_interfaces.proto.SetWalking;
  return proto.aruku_interfaces.proto.SetWalking.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aruku_interfaces.proto.SetWalking} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aruku_interfaces.proto.SetWalking}
 */
proto.aruku_interfaces.proto.SetWalking.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRun(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setXMove(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setYMove(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAMove(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAimOn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aruku_interfaces.proto.SetWalking.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aruku_interfaces.proto.SetWalking.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aruku_interfaces.proto.SetWalking} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aruku_interfaces.proto.SetWalking.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRun();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getXMove();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getYMove();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getAMove();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getAimOn();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional bool run = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.aruku_interfaces.proto.SetWalking.prototype.getRun = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.aruku_interfaces.proto.SetWalking.prototype.setRun = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional double x_move = 2;
 * @return {number}
 */
proto.aruku_interfaces.proto.SetWalking.prototype.getXMove = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.aruku_interfaces.proto.SetWalking.prototype.setXMove = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double y_move = 3;
 * @return {number}
 */
proto.aruku_interfaces.proto.SetWalking.prototype.getYMove = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.aruku_interfaces.proto.SetWalking.prototype.setYMove = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double a_move = 4;
 * @return {number}
 */
proto.aruku_interfaces.proto.SetWalking.prototype.getAMove = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.aruku_interfaces.proto.SetWalking.prototype.setAMove = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional bool aim_on = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.aruku_interfaces.proto.SetWalking.prototype.getAimOn = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.aruku_interfaces.proto.SetWalking.prototype.setAimOn = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aruku_interfaces.proto.Status = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aruku_interfaces.proto.Status, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.aruku_interfaces.proto.Status.displayName = 'proto.aruku_interfaces.proto.Status';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aruku_interfaces.proto.Status.prototype.toObject = function(opt_includeInstance) {
  return proto.aruku_interfaces.proto.Status.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aruku_interfaces.proto.Status} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aruku_interfaces.proto.Status.toObject = function(includeInstance, msg) {
  var f, obj = {
    isRunning: jspb.Message.getFieldWithDefault(msg, 1, false),
    xAmplitude: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    yAmplitude: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    aAmplitude: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    odometry: (f = msg.getOdometry()) && proto.aruku_interfaces.proto.Point2.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aruku_interfaces.proto.Status}
 */
proto.aruku_interfaces.proto.Status.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aruku_interfaces.proto.Status;
  return proto.aruku_interfaces.proto.Status.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aruku_interfaces.proto.Status} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aruku_interfaces.proto.Status}
 */
proto.aruku_interfaces.proto.Status.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRunning(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setXAmplitude(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setYAmplitude(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAAmplitude(value);
      break;
    case 5:
      var value = new proto.aruku_interfaces.proto.Point2;
      reader.readMessage(value,proto.aruku_interfaces.proto.Point2.deserializeBinaryFromReader);
      msg.setOdometry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aruku_interfaces.proto.Status.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aruku_interfaces.proto.Status.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aruku_interfaces.proto.Status} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aruku_interfaces.proto.Status.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsRunning();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getXAmplitude();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getYAmplitude();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getAAmplitude();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getOdometry();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.aruku_interfaces.proto.Point2.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool is_running = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.aruku_interfaces.proto.Status.prototype.getIsRunning = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.aruku_interfaces.proto.Status.prototype.setIsRunning = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional double x_amplitude = 2;
 * @return {number}
 */
proto.aruku_interfaces.proto.Status.prototype.getXAmplitude = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.aruku_interfaces.proto.Status.prototype.setXAmplitude = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double y_amplitude = 3;
 * @return {number}
 */
proto.aruku_interfaces.proto.Status.prototype.getYAmplitude = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.aruku_interfaces.proto.Status.prototype.setYAmplitude = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double a_amplitude = 4;
 * @return {number}
 */
proto.aruku_interfaces.proto.Status.prototype.getAAmplitude = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.aruku_interfaces.proto.Status.prototype.setAAmplitude = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional Point2 odometry = 5;
 * @return {?proto.aruku_interfaces.proto.Point2}
 */
proto.aruku_interfaces.proto.Status.prototype.getOdometry = function() {
  return /** @type{?proto.aruku_interfaces.proto.Point2} */ (
    jspb.Message.getWrapperField(this, proto.aruku_interfaces.proto.Point2, 5));
};


/** @param {?proto.aruku_interfaces.proto.Point2|undefined} value */
proto.aruku_interfaces.proto.Status.prototype.setOdometry = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.aruku_interfaces.proto.Status.prototype.clearOdometry = function() {
  this.setOdometry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.aruku_interfaces.proto.Status.prototype.hasOdometry = function() {
  return jspb.Message.getField(this, 5) != null;
};


export default proto.aruku_interfaces.proto;
