$(document).ready(function() {
    $.getJSON("members.json", function(data) {
        var items = [];
        $.each(data, function(i) {
            member = data[i];
            member["fullname"] = member["First name"] + " " +member["Last name"]
            member["link"] = "https://www.google.com/search?q="+member["fullname"]+" "+member["affiliation"]
            items.unshift("<div class='col-sm-3 member'><a href='"+member["link"]+"' target='_blank' class='fullname'><b>" + member["fullname"]+"</b></a><br/><span class='affiliation'>"+member["affiliation"]+"</span><br/><span class='country'>"+member["country"]+"</span></div>");
        });
        $(".members").append(items.join(""));

    });
});
