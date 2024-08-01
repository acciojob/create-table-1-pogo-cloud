let table_top = document.querySelector("#sampleTable");

        function insert_Row() {
            let tableRow = document.createElement("tr");
            let tcolOne = document.createElement("td");
            let tcolTwo = document.createElement("td");
            tcolOne.innerHTML = "New Cell1"
            tcolTwo.innerHTML = "New Cell2";
            tableRow.appendChild(tcolOne);
            tableRow.appendChild(tcolTwo);
            table_top.prepend(tableRow);
        }
