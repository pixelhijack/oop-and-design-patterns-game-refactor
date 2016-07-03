"use strict";

var DatabaseProvider,
    ComposedDatabaseAdapter,
    SubtypedDatabaseAdapter;

DatabaseProvider = function(theConnection) {

    var connection = theConnection;

    this.connect = function() {
        // uses connection
    };

    this.syncSave = function(data) {
        // persisting...
        return result;
    };

    this.asyncSave = function(data, resultHandler) {
        // persisting...
        resultHandler(error, result);
    };

    // ...
};

ComposedDatabaseAdapter = function() {

    var connection,// some connection configuration
        databaseProvider = new DatabaseProvider(connection);

    function transform(data) {
        // transformation...
        return transformedData;
    }

    databaseProvider.connect();

    this.save = function(data) {
        databaseProvider.syncSave(
            transform(data)
        );
    };

    // ...
};

SubtypedDatabaseAdapter = function() {

    var connection;// some connection configuration

    DatabaseProvider.call(this, connection);

    function transform(data) {
        // transformation...
        return transformedData;
    }

    this.connect();

    this.save = function(data) {
        this.syncSave(
            transform(data)
        );
    };

    // ...
};

SubtypedDatabaseAdapter.prototype = new DatabaseProvider();
SubtypedDatabaseAdapter.prototype.constructor = SubtypedDatabaseAdapter;

module.exports = {
    "ComposedDatabaseAdapter": ComposedDatabaseAdapter,
    "SubtypedDatabaseAdapter": SubtypedDatabaseAdapter
};
