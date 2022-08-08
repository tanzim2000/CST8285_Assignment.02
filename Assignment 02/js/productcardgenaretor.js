const data = {
    "vaccines": [
        {
            "Name": "Fluarix Quadrivalent",
            "Manufacturer": "GlaxoSmithKline Biologicals",
            "Target": "Influenza Virus",
            "Type": "Inactivated, attenuated, recombinant",
            "Description": "FLUARIX QUADRIVALENT is a vaccine indicated for active immunization for the prevention of disease caused by influenza A subtype viruses and type B viruses contained in the vaccine. FLUARIX QUADRIVALENT is approved for use in persons aged 6 months and older.",
            "STN": "125127"
        },
        {
            "Name": "Boostrix",
            "Manufacturer": "GlaxoSmithKline Biologicals",
            "Target": "Diphtheria, Pertussis, and Tetanus.",
            "Type": "Inactivated",
            "Description": "For active booster immunization against tetanus, diphtheria and pertussis  in individuals 10 years of age and older.",
            "STN": "125106"
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
            "Type": "Conjugated",
            "Description": "For active immunization for the prevention of invasive disease caused by Haemophilus influenzae type b. HIBERIX is approved for use in children 6 weeks through 4 years of age (prior to fifth birthday).",
            "STN": "125347"
        },
        {
            "Name": "Pentacel",
            "Manufacturer": "Sanofi Pasteur Limited",
            "Target": "Haemophilus Influenzae type b",
            "Type": "Multi-vaccine",
            "Description": "Active immunization against diphtheria, tetanus, pertussis, poliomyelitis and invasive disease due to Haemophilus influenzae type b. Pentacel is approved for use as a four dose series in children 6 weeks through 4 years of age (prior to 5th birthday).",
            "STN": "125145"
        },
        {
            "Name": "Prevnar 13",
            "Manufacturer": "Wyeth Pharmaceuticals, Inc",
            "Target": "Streptococcus Pneumoniae",
            "Type": "Conjugated",
            "Description": "Active immunization for the prevention of invasive disease caused by Streptococcus pneumoniae serotypes 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F and 23F in children 6 weeks through 5 years of age (prior to the 6th birthday).",
            "STN": "125324"
        },
        {
            "Name": "Prevnar 20",
            "Manufacturer": "Wyeth Pharmaceuticals, LLC",
            "Target": "Streptococcus Pneumoniae",
            "Type": "Conjugated",
            "Description": "Active immunization for the prevention of pneumonia and invasive disease caused by Streptococcus pneumoniae serotypes 1, 3, 4, 5, 6A, 6B, 7F, 8, 9V, 10A, 11A, 12F,14, 15B, 18C, 19A, 19F, 22F, 23F and 33F in adults 18 years of age and older.",
            "STN": "125731"
        },
        {
            "Name": "Rotarix",
            "Manufacturer": "GlaxoSmithKline Biologicals",
            "Target": "Rotavirus",
            "Type": "Attenuated",
            "Description": "For the prevention of rotavirus gastroenteritis caused by G1 and non-G1 types (G3, G4, and G9), for use in infants 6 weeks to 24 weeks of age.",
            "STN": "125265"
        },
        {
            "Name": "Priorix",
            "Manufacturer": "GlaxoSmithKline Biologicals SA",
            "Target": "Measles, Mumps and Rubella",
            "Type": "Attenuated",
            "Description": "For active immunization for the prevention of measles, mumps, and rubella in individuals 12 months of age and older.",
            "STN": "125748"
        },
        {
            "Name": "Menactra",
            "Manufacturer": "Sanofi Pasteur Inc",
            "Target": "Neisseria meningitidis",
            "Type": "Conjugate",
            "Description": "Active immunization of individuals 9 months through 55 years of age for the prevention of invasive meningococcal disease caused by Neisseria meningitidis serogroups A, C, Y and W-135.",
            "STN": "125089"
        },
        {
            "Name": "MenQuadfi",
            "Manufacturer": "Sanofi Pasteur Inc",
            "Target": "Neisseria meningitidis",
            "Type": "Polysaccharide",
            "Description": "Meningococcal is an active immunization for the prevention of invasive meningococcal disease caused by Neisseria meningitidis serogroups A, C, W, and Y for use in individuals 2 years and older.",
            "STN": "125701"
        },
        {
            "Name": "Varivax",
            "Manufacturer": "Merck Shark & Dohme Corp",
            "Target": "Varicella",
            "Type": "Attenuated",
            "Description": "Active immunization for the prevention of varicella in individuals 12 months of age and older.",
            "STN": "103552"
        },
        {
            "Name": "Recombivax HB",
            "Manufacturer": "Merck & Co, Inc",
            "Target": "Hepatitis B",
            "Type": "Recombinant",
            "Description": "For prevention of infection caused by all known subtypes of hepatitis B virus.",
            "STN": "101066"
        },
        {
            "Name": "Engerix-B",
            "Manufacturer": "GlaxoSmithKline Biologicals",
            "Target": "Hepatitis B",
            "Type": "Recombinant",
            "Description": "ENGERIX-B is a vaccine indicated for immunization against infection caused by all known subtypes of hepatitis B virus.",
            "STN": "103239"
        },
        {
            "Name": "Heplisav-B",
            "Manufacturer": "Dynavax Technologies Corporation",
            "Target": "Hepatitis B",
            "Type": "Adjuvanted",
            "Description": "For prevention of infection caused by all known subtypes of hepatitis B virus. HEPLISAV-B is approved for use in adults 18 years of age and older.",
            "STN": "125428"
        },
        {
            "Name": "Gardasil 9",
            "Manufacturer": "",
            "Target": "Human papillomavirus",
            "Type": "Protein subunit",
            "Description": "Indicated in girls and women 9 through 45 years of age for the prevention of the following diseases: Cervical, vulvar, vaginal, anal, oropharyngeal and other head and neck cancers caused by Human Papillomavirus (HPV) types 16, 18, 31, 33, 45, 52, and 58. Genital warts (condyloma acuminata) caused by HPV types 6 and 11.",
            "STN": "125508"
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
        const titleDescriptionPacket = document.createElement("li");
        titleDescriptionPacket.classList.add("titledescription-packet");
        listContainer.appendChild(titleDescriptionPacket);
        const h3Container = document.createElement("div");
        h3Container.classList.add("h3-container");
        h3Container.classList.add("titlebox");
        titleDescriptionPacket.appendChild(h3Container);
        const anchor = document.createElement("a");
        h3Container.appendChild(anchor);
        const cardTitle = document.createElement("h3");
        anchor.appendChild(cardTitle);
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
                propertyName.classList.add("propertyName");
                row.appendChild(propertyName);
                propertyName.appendChild(document.createTextNode(dataStructure[propertyIndex]));
                const propertyValue = document.createElement("td");
                propertyValue.classList.add("propertyValue");
                row.appendChild(propertyValue);
                propertyValue.appendChild(document.createTextNode(vaccineData[elementIndex][dataStructure[propertyIndex]]));
            }
            propertyIndex++;
        }
        elementIndex++;
    }

}
function search() {
    var input, filter, ul, li, i, textValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("catalogue-container");
    console.log(ul);
    listHead = ul.getElementsByTagName("h3");
    listBox = ul.getElementsByTagName("li");
    
    console.log(li);
    for (index = 0; index < listHead.length; index++) {
        textValue = listHead[index].textContent || listHead[index].innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            listBox[index].style.display = "";
          } else {
            listBox[index].style.display = "none";
          }
    }
}
