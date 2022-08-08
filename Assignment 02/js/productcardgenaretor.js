const data = {
    "vaccines": [
        {
            "Name": "Fluarix Quadrivalent",
            "Manufacturer": "GlaxoSmithKline Biologicals",
            "Target": "Influenza Virus",
            "Type": "Inactivated, attenuated, recombinant",
            "Description": "FLUARIX QUADRIVALENT is a vaccine indicated for active immunization for the prevention of disease caused by influenza A subtype viruses and type B viruses contained in the vaccine. FLUARIX QUADRIVALENT is approved for use in persons aged 6 months and older.",
            "STN": "BL 125127"
        },
        {
            "Name": "Boostrix",
            "Manufacturer": "GlaxoSmithKline Biologicals",
            "Target": "Diphtheria, Pertussis, and Tetanus.",
            "Type": "Inactivated",
            "Description": "For active booster immunization against tetanus, diphtheria and pertussis  in individuals 10 years of age and older.",
            "STN": "BL 125106"
        },
        {
            "Name": "Ipol",
            "Manufacturer": "Sanofi Pasteur, SA",
            "Target": "Poliomyelitis",
            "Type": "Inactivated",
            "Description": "IPOL vaccine is indicated for active immunization of infants (as young as 6 weeks of age), children, and adults for the prevention of poliomyelitis caused by poliovirus Types 1, 2, and 3.",
            "STN": "103930"
        },
        {
            "Name": "Hiberix",
            "Manufacturer": "GlaxoSmithKline Biologicals",
            "Target": "Haemophilus Influenzae (Type B)",
            "Type": "Conjugate",
            "Description": "For active immunization for the prevention of invasive disease caused by Haemophilus influenzae type b. HIBERIX is approved for use in children 6 weeks through 4 years of age (prior to fifth birthday).",
            "STN": "125347"
        },
        {
            "Name": "",
            "Manufacturer": "",
            "Target": "",
            "Type": "",
            "Description": "",
            "STN": ""
        }
    ]
}
var vaccineData = Object.values(data.vaccines);
function productListGenarator() {
    const listContainer = document.getElementById("catalogue-container");
    console.log(vaccineData);
    var elementIndex = 0;
    for (let elements in data.vaccines) {
        var dataStructure = Object.keys(vaccineData[elementIndex]);
        const titleDescriptionPacket = document.createElement("div");
        titleDescriptionPacket.classList.add("titledescription-packet");
        listContainer.appendChild(titleDescriptionPacket);
        const h3Container = document.createElement("div");
        h3Container.classList.add("h3-container");
        h3Container.classList.add("coursecode");
        titleDescriptionPacket.appendChild(h3Container);
        const cardTitle = document.createElement("h3");
        h3Container.appendChild(cardTitle);
        cardTitle.appendChild(document.createTextNode(vaccineData[elementIndex]['Name']));
        const detailTable = document.createElement("table");
        titleDescriptionPacket.appendChild(detailTable);
        var propertyIndex = 0;
        for (let key in vaccineData[elementIndex]) {
            if (dataStructure[propertyIndex] == "Description"){

            } else if (dataStructure[propertyIndex] == "Name"){

            } else {
                const row = document.createElement("tr");
                detailTable.appendChild(row);
                const propertyName = document.createElement("td");
                row.appendChild(propertyName);
                propertyName.appendChild(document.createTextNode(dataStructure[propertyIndex]));
                const propertyValue = document.createElement("td");
                row.appendChild(propertyValue);
                propertyValue.appendChild(document.createTextNode(vaccineData[elementIndex][dataStructure[propertyIndex]]));
            }
            propertyIndex++;
        }
        elementIndex++;
    }

}
