function coordinate(table) {

    table.coordinates = [];

    var tbody, c;
    for (var n in table.childNodes) {
        c = table.childNodes[n];
        if (c.tagName && c.tagName.match(/^tbody$/i)) {
            tbody = c;
            break;
        }
    }

    var x, y = -1;
    var row, rn;
    var col, cn;

    for (rn in tbody.childNodes) {
        row = tbody.childNodes[rn];
        if (row.tagName && row.tagName.match(/^tr$/i)) {
            x = -1;
            ++y;
            for (cn in row.childNodes) {
                col = row.childNodes[cn];
                if (col.tagName && col.tagName.match(/^td$/i)) {
                    var colspan = col.getAttribute('colspan');
                    if (! colspan) colspan = 1;
                    while (colspan--) {
                        ++x;
                        if (! table.coordinates[x]) table.coordinates[x] = [];
                        table.coordinates[x][y] = col;
                    }
                }
            }
        }
    }

    for (x=0; row=table.coordinates[x]; ++x) {
        for (y=0; col=table.coordinates[x][y]; ++y) {

            col.north = (y > 0) ?
                table.coordinates[x][y-1] : undefined;

            col.south = (table.coordinates[x][y+1]) ?
                table.coordinates[x][y+1] : undefined;

            col.west = (x > 0) ?
                table.coordinates[x-1][y] : undefined;

            col.east = (table.coordinates[x+1]) ?
                table.coordinates[x+1][y] : undefined;

        }
    }

}
