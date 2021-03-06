/*global $, define, console*/
/*jslint sloppy:true*/

define(['ojs/ojcore', 'knockout', 'ojs/ojtable'], function (oj, ko) {
    function mainContentViewModel() {
        // change this root variable to point to YOUR environment
        var root = 'https://JavaTwitterMicroservice-busanuniv.apaas.us2.oraclecloud.com/',
            self = this,
            uri = 'statictweets/',
            prettySource = function (source) { return source.substring(source.indexOf('>') + 1, source.lastIndexOf('<')); },
            url = root + uri;
        self.items = ko.observableArray([]);
        self.tweets = new oj.ArrayTableDataSource(self.items, { idAttribute: 'Id' });
        $.ajax({ url: url, method: 'GET' }).success(function (result) { console.log(result.tweets); var items = self.items(); ko.utils.arrayForEach(result.tweets, function (value) {

            // make sure this is a creation tweet
            if (!!value.user) { items.push({ Id: value.id, Location: value.user.location, Text: value.text, Source: prettySource(value.source), User: value.user.name }); }
        }); self.items.valueHasMutated(); });
    }
    return mainContentViewModel;
});
