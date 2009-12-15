coordinate.js
=============

Did you ever wish you could address HTML table cells by X and Y
coordinates?

    <script src="coordinate.js"></script>
    <script>
    
        var table = document.getElementsByTagName('table')[0];
        coordinate(table);

        // The origin (0,0) is the top, leftmost cell
        table.coordinates[3][2].innerHTML = '(3,2)';
    
    </script>


Did you ever wish you could, given a table cell, easily address
its neighbors?

    <script src="coordinate.js"></script>
    <script>
    
        var table = document.getElementsByTagName('table')[0];
        coordinate(table);

        var cell = table.coordinates[3][2];

        /* "edge" cells have 1 undefined direction
           corner cells have 2 undefined directions
           a cell in a 1x1 table would have all 4 directions undefined
           (but why would you do that?) */

        if (cell.north) cell.north.innerHTML = 'up';
        if (cell.south) cell.south.innerHTML = 'down';
        if (cell.west)  cell.west.innerHTML  = 'left';
        if (cell.east)  cell.east.innerHTML  = 'right';
    
    </script>

I've barely tested this thing (though I *did* test it against table
cells with colspans), and only on browsers that rhyme with
"buyer stocks bee shot live". Enjoy.
