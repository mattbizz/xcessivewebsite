var packages = { // 1=integrated; 2=photography; 3=videography; 4=social media, 5=podcast
    1: [
        "Tier 1 - $50",
        "Tier 2 - $100",
        "Tier 3 - $130",
       
    ],
    2: [
        "Tier 1 - $35",
        "Tier 2 - $88",
    ],
    3: [
        "Tier 1 - $35",
        "Tier 2 - $110"
    ],
    4: [
        "Tier 1 - $20",
        "Tier 2 - $50"
    ],
    5: [
        "Tier 1 - $25",
        "Tier 2 - $75"
    ]
}

$(document).ready(function(){

    function populatePackages() {
        $("#specificPackage").empty();
        for(i=0; i<packages[$("#packageCategory").val()].length; i++) {
            $("#specificPackage").append("<option value='" + i + "' id='pkg_"+ i +"'>" + packages[$("#packageCategory").val()][i] + "</option>")
        }
    }

    // Init the form select boxes
    $("select").formSelect();

    //Watch for change on the query type select box
    $("#queryType").change(function() {
        // If the query type is anything other than zero, it unhides the general message textarea, and adds a label.
        if($("#queryType").val() != 0) {
            $("#generalMessage").removeClass("hide");
            $("#generalMessage label").text("Your Message")
            $("#packageEnq").addClass("hide");
        } else if($("#queryType").val() == 0 ) { // If select value is exactly zero, then hide all text boxes regardless of what the user has selected previously. 
            $("#generalMessage, #packageEnq").addClass("hide");
        }
        // If the user selected 'work enquiry', show the package selector, and the message box, and then 
        if($("#queryType").val() == 2) {
            $("#packageEnq, #generalMessage").removeClass("hide");
            $("#generalMessage label").text("Additional Comments");
        }
    });

    // Watch for change in the package type selector box
    $("#packageCategory").change(function() {
        // If the value of the category select box is anything other than zero, then empty the specific package box, and then loop over the array finding all associated packages, add them as form select options, and then reinitialize the formselect with materialize so it updates
        if($("#packageCategory").val() != 0) {
            populatePackages();
            $("#specificPackage").formSelect();
        } else {
            // Else clear the form select, add an option prompting the user to select a category, and then reinit the form select to update the view. 
            $("#specificPackage").empty();
            $("#specificPackage").append("<option disabled selected>Select a category first</option>")
            $("#specificPackage").formSelect();
        }
    });

    if('URLSearchParams' in window) { // Check that the browser is capable of getting the URLSearchParams
        let searchParams= new URLSearchParams(window.location.search); // If it is, get those params. 
        if(searchParams.has("pkg")) { // and check that the parameter name is pkg
            let value = searchParams.get("pkg");

            // Due to the way materialize works, we have to first destroy the select box instance, and then reinitialize it to have the selected value update.
            $("#2").prop("selected", true);
            let packageBox = M.FormSelect.getInstance($("#queryType"));
            packageBox.destroy();
            $("#queryType").formSelect();

            // Unhide the Package Enquiry Section
            $("#packageEnq").removeClass("hide");

            // Split URL Params into two (category and package)
            let urlCategory = value.split('-')[0];
            let pkgType = value.split('-')[1];
            
            // Get the package category box instance so we can destroy it, and reinitisalise it later. 
            let packageCategoryBox = M.FormSelect.getInstance($("#packageCategory"))

            switch(urlCategory) {
                case "01":
                    $("#cat_01").prop("selected", true);
                    break;
                case "02":
                    $("#cat_02").prop("selected", true);
                    break;
                case "03":
                    $("#cat_03").prop("selected", true);
                    break;
                case "04":
                    $("#cat_04").prop("selected", true);
                    break;
                case "05":
                    $("#cat_05").prop("selected", true);
                    break;
            }

            packageCategoryBox.destroy();
            $("#packageCategory").formSelect();

            populatePackages();

            let pkgBox = M.FormSelect.getInstance($("#specificPackage"));

            switch(pkgType) {
                case "00":
                    $("#pkg_0").prop("selected", true);
                    break;
                case "01":
                    $("#pkg_1").prop("selected", true);
                    break;
                case "02":
                    $("#pkg_2").prop("selected", true);
                    break;
                case "03":
                    $("#pkg_3").prop("selected", true);
                    break;
            }

            pkgBox.destroy();
            $("#specificPackage").formSelect();

            $("#generalMessage").removeClass("hide");
            $("#generalMessage label").text("Additional Comments")
        }
    }
});