"use strict";

/**
 * Builder
 *
 * BAD:
 * var field = {};
 * field.name = "anyName";
 * field.text = "anyText";
 *
 * GOOD:
 * var fieldBuilder = new FieldBuilder(),
 *     field;
 * field = fieldBuilder
 *     .withName(fieldName)
 *     .withText(fieldText)
 *     .build();
 */

var BuilderByConstructor = require("./BuilderByConstructor.es5"),
    builderByObjectFactory = require("./builderByObjectFactory.es5"),
    builderByPrototypeFactory = require("./builderByPrototypeFactory.es5"),
    nuclearSingletonBuilder = require("./nuclearSingletonBuilder.es5"),
    builderByConstructor = new BuilderByConstructor(),
    builderForIncompleteBuild = new BuilderByConstructor(),
    builderByObject = builderByObjectFactory.create(),
    builderByPrototype = builderByPrototypeFactory.create(),
    SAMPLE_NAME = "Sample Name",
    SAMPLE_TEXT = "sample text";

console.log(
    "builderByConstructor",
    builderByConstructor
        .withName(SAMPLE_NAME)
        .withText(SAMPLE_TEXT)
        .build()
);

console.log(
    "builderByObject",
    builderByObject
        .withName(SAMPLE_NAME)
        .withText(SAMPLE_TEXT)
        .build()
);

console.log(
    "builderByPrototype",
    builderByPrototype
        .withName(SAMPLE_NAME)
        .withText(SAMPLE_TEXT)
        .build()
);

console.log(
    "nuclearSingletonBuilder",
    nuclearSingletonBuilder
        .withName(SAMPLE_NAME)
        .withText(SAMPLE_TEXT)
        .build()
);

try {
    builderForIncompleteBuild
        .withName(SAMPLE_NAME)
        .build();
} catch (error) {
    console.log("builderForIncompleteBuild", error);
}